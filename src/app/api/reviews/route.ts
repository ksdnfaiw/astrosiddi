import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const PLACE_ID = "ChIJ__-_Pp5DSzkR-7rLsvNUxdM";
const GOOGLE_MAPS_URL =
  "https://www.google.com/maps/place/Sri+Raghavendra+Jyothishalayam,+P8RQ%2B3P4,+MVP+Double+Rd,+Sector+10,+MVP+Colony,+Visakhapatnam,+Andhra+Pradesh+530017/@17.740137,83.3393431,17z/";
const WRITE_REVIEW_URL =
  "https://search.google.com/local/writereview?placeid=ChIJ__-_Pp5DSzkR-7rLsvNUxdM";

export interface GoogleReviewItem {
  id: string;
  authorName: string;
  authorPhoto?: string;
  rating: number;
  relativeTime: string;
  text: string;
  time?: number;
}

export async function GET() {
  const apiKey =
    process.env.GOOGLE_PLACES_API_KEY ||
    process.env.GOOGLE_MAPS_API_KEY ||
    process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  const baseResponse = {
    businessName: "Sri Raghavendra Jyothishalayam",
    address:
      "P8RQ+3P4, MVP Double Rd, Sector 10, MVP Colony, Visakhapatnam, Andhra Pradesh 530017",
    placeId: PLACE_ID,
    mapsUrl: GOOGLE_MAPS_URL,
    writeReviewUrl: WRITE_REVIEW_URL,
    verifiedRating: 4.9,
    verifiedReviewCount: 414,
  };

  // If no Google Places API key is configured yet in environment variables
  if (!apiKey) {
    return NextResponse.json({
      success: true,
      hasApiKey: false,
      ...baseResponse,
      reviews: [],
      message:
        "Google Places API key not configured. Add GOOGLE_PLACES_API_KEY to your .env.local file to fetch live customer reviews automatically from Google Places API, or provide a widget ID.",
    });
  }

  try {
    // Call Google Places Details API (Legacy Details endpoint or New Places API)
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,user_ratings_total,reviews,formatted_address,url&key=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 86400 }, // Cache server-side for 24h per Google caching guidelines
    });

    if (!res.ok) {
      throw new Error(`Google API returned status ${res.status}`);
    }

    const data = await res.json();

    if (data.status === "OK" && data.result) {
      const place = data.result;
      const reviews: GoogleReviewItem[] = (place.reviews || []).map(
        (rev: any, index: number) => ({
          id: `rev-${index}-${rev.time || Date.now()}`,
          authorName: rev.author_name || "Google Reviewer",
          authorPhoto: rev.profile_photo_url || "",
          rating: Number(rev.rating) || 5,
          relativeTime: rev.relative_time_description || "Recently",
          text: rev.text || "",
          time: rev.time,
        })
      );

      return NextResponse.json({
        success: true,
        hasApiKey: true,
        businessName: place.name || baseResponse.businessName,
        address: place.formatted_address || baseResponse.address,
        placeId: PLACE_ID,
        mapsUrl: place.url || GOOGLE_MAPS_URL,
        writeReviewUrl: WRITE_REVIEW_URL,
        verifiedRating: Number(place.rating) || baseResponse.verifiedRating,
        verifiedReviewCount:
          Number(place.user_ratings_total) || baseResponse.verifiedReviewCount,
        reviews,
      });
    } else {
      console.warn("Google Places API response non-OK status:", data.status, data.error_message);
      return NextResponse.json({
        success: true,
        hasApiKey: true,
        apiError: data.error_message || data.status,
        ...baseResponse,
        reviews: [],
        message: `Google API responded with ${data.status}: ${data.error_message || "Unable to retrieve reviews"}`,
      });
    }
  } catch (error: any) {
    console.error("Failed to fetch Google Reviews:", error);
    return NextResponse.json(
      {
        success: false,
        hasApiKey: true,
        ...baseResponse,
        reviews: [],
        error: error.message || "Failed to fetch reviews",
      },
      { status: 500 }
    );
  }
}
