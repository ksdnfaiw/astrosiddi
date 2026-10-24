export interface CityLocation {
  name: string;
  state: string;
  country: string;
  lat: number;
  lng: number;
  timezone: string;
  tzOffsetMinutes: number;
}

export const POPULAR_INDIAN_CITIES: CityLocation[] = [
  { name: "Visakhapatnam (Vizag)", state: "Andhra Pradesh", country: "India", lat: 17.6868, lng: 83.2185, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Hyderabad", state: "Telangana", country: "India", lat: 17.3850, lng: 78.4867, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Vijayawada", state: "Andhra Pradesh", country: "India", lat: 16.5062, lng: 80.6480, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Guntur", state: "Andhra Pradesh", country: "India", lat: 16.3067, lng: 80.4365, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Tirupati", state: "Andhra Pradesh", country: "India", lat: 13.6288, lng: 79.4192, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Rajahmundry", state: "Andhra Pradesh", country: "India", lat: 17.0005, lng: 81.8040, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Kakinada", state: "Andhra Pradesh", country: "India", lat: 16.9891, lng: 82.2475, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Nellore", state: "Andhra Pradesh", country: "India", lat: 14.4426, lng: 79.9865, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Kurnool", state: "Andhra Pradesh", country: "India", lat: 15.8281, lng: 78.0373, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Warangal", state: "Telangana", country: "India", lat: 17.9689, lng: 79.5941, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Bengaluru (Bangalore)", state: "Karnataka", country: "India", lat: 12.9716, lng: 77.5946, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Chennai", state: "Tamil Nadu", country: "India", lat: 13.0827, lng: 80.2707, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Mumbai", state: "Maharashtra", country: "India", lat: 19.0760, lng: 72.8777, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Delhi / New Delhi", state: "Delhi", country: "India", lat: 28.6139, lng: 77.2090, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Kolkata", state: "West Bengal", country: "India", lat: 22.5726, lng: 88.3639, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
  { name: "Pune", state: "Maharashtra", country: "India", lat: 18.5204, lng: 73.8567, timezone: "Asia/Kolkata", tzOffsetMinutes: 330 },
];

export const MAJOR_WORLD_TIMEZONES = [
  { label: "India Standard Time (IST, UTC +05:30)", offsetMinutes: 330 },
  { label: "US Eastern Time (EST/EDT, UTC -05:00 / -04:00)", offsetMinutes: -300 },
  { label: "US Central Time (CST/CDT, UTC -06:00 / -05:00)", offsetMinutes: -360 },
  { label: "US Mountain Time (MST/MDT, UTC -07:00 / -06:00)", offsetMinutes: -420 },
  { label: "US Pacific Time (PST/PDT, UTC -08:00 / -07:00)", offsetMinutes: -480 },
  { label: "United Kingdom (GMT/BST, UTC +00:00 / +01:00)", offsetMinutes: 0 },
  { label: "Central Europe (CET/CEST, UTC +01:00 / +02:00)", offsetMinutes: 60 },
  { label: "Gulf Standard Time (UAE/Dubai, UTC +04:00)", offsetMinutes: 240 },
  { label: "Singapore Standard Time (SGT, UTC +08:00)", offsetMinutes: 480 },
  { label: "Australian Eastern Time (AEST/AEDT, UTC +10:00 / +11:00)", offsetMinutes: 600 },
];
