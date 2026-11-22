export interface CityFaq {
  question: string;
  answer: string;
}

export interface City {
  slug: string;
  name: string;
  state: string;
  isLocal: boolean;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  intro: string[];
  concerns: { title: string; text: string }[];
  howItWorks: string[];
  faqs: CityFaq[];
}

export const CITIES: City[] = [
  {
    slug: "astrologer-in-visakhapatnam",
    name: "Visakhapatnam",
    state: "Andhra Pradesh",
    isLocal: true,
    metaTitle: "Astrologer in Visakhapatnam | Astro Siddhi, MVP Colony",
    metaDescription:
      "Meet Sri Raghavendra Siddhanti Garu at the MVP Colony office in Visakhapatnam for Vedic horoscope, Kundali matching and Vastu, in Telugu or English.",
    h1: "Vedic Astrologer in Visakhapatnam (Vizag) - Consult at Our MVP Colony Office",
    intro: [
      "Visakhapatnam, widely known as Vizag, is a coastal city where the port, steel and manufacturing industries and a growing IT sector shape many career and family decisions. Astro Siddhi, led by Sri Raghavendra Siddhanti Garu, is based in the city itself, at MVP Double Road, Sector 10, MVP Colony, opposite Axis Bank. You can sit down in person and talk through your birth chart in Telugu or English.",
      "Over 25 years of Vedic astrology practice and more than 15,000 clients have shaped how Garu explains a chart: clearly, patiently and without drama. Services include horoscope reading, Kundali matching for marriage, career and business guidance, love and relationship counselling, Vastu Shastra and dosha parihara. If you are travelling or cannot visit, the same consultation is available online.",
    ],
    concerns: [
      {
        title: "Career in port, steel and IT",
        text: "Many Vizag households have someone working in port logistics, steel and heavy industry or the expanding IT sector. A career reading studies dasha periods and planetary placements in your chart to help you think through job changes, transfers and timing.",
      },
      {
        title: "Kundali matching for marriage",
        text: "Families in and around Vizag often begin the marriage search with Kundali matching. Both charts are compared in detail, each point is explained in plain Telugu or English, and any doshas are discussed calmly along with traditional parihara options.",
      },
      {
        title: "Vastu for homes and shops",
        text: "Whether you are building, buying an apartment or setting up a shop or office in Visakhapatnam, a Vastu Shastra consultation reviews the layout, entrances and room placement, and suggests practical adjustments that respect how the space is actually used.",
      },
      {
        title: "A face-to-face conversation",
        text: "Some matters feel easier to discuss in person. At the MVP Colony office you can bring printed charts, ask questions at your own pace and take the time you need, with Sunday visits available by advance appointment.",
      },
    ],
    howItWorks: [
      "Message us on WhatsApp at +91 96524 12221 to book a time, Monday to Saturday between 9:00 AM and 8:00 PM, or on Sunday by advance appointment.",
      "Visit the MVP Colony office with your date, time and place of birth, or choose an online session by video call, phone or WhatsApp.",
      "Discuss your chart with Sri Raghavendra Siddhanti Garu in Telugu or English and leave with a clear understanding of the points covered.",
    ],
    faqs: [
      {
        question: "Where is the Astro Siddhi office in Visakhapatnam?",
        answer:
          "The office is at MVP Double Road, Sector 10, MVP Colony, Visakhapatnam, Andhra Pradesh 530017, opposite Axis Bank. It is open Monday to Saturday from 9:00 AM to 8:00 PM, and on Sunday by advance appointment.",
      },
      {
        question: "Do I need to book before visiting the MVP Colony office?",
        answer:
          "We recommend booking in advance on WhatsApp at +91 96524 12221 so that time is set aside for you. Sunday visits are only by advance appointment. Replies usually come within a few hours.",
      },
      {
        question: "I live in Vizag but travel often. Can I consult online?",
        answer:
          "Yes. Consultations can be held by video call, phone or WhatsApp from anywhere, so you can continue a discussion even when you are away from the city. The language options remain Telugu and English.",
      },
    ],
  },
  {
    slug: "astrologer-in-hyderabad",
    name: "Hyderabad",
    state: "Telangana",
    isLocal: false,
    metaTitle: "Online Vedic Astrologer for Hyderabad | Astro Siddhi",
    metaDescription:
      "Telugu and English Vedic astrology consultations for Hyderabad families and professionals, held online by Sri Raghavendra Siddhanti Garu. Book on WhatsApp.",
    h1: "Vedic Astrology for Hyderabad: Online Consultations with Sri Raghavendra Siddhanti Garu",
    intro: [
      "Hyderabad is home to a very large Telugu-speaking population, along with many professionals who have moved here for technology and corporate careers. If you want an experienced Vedic astrologer who can speak with you comfortably in Telugu or English, Astro Siddhi offers consultations with Sri Raghavendra Siddhanti Garu, who has practised for more than 25 years.",
      "To be clear and honest: consultations for Hyderabad are held online, by video call, phone or WhatsApp. Our only physical office is in MVP Colony, Visakhapatnam, and we do not have an office in Hyderabad. Online sessions cover the same topics as an in-person meeting, including horoscope reading, Kundali matching, career guidance, Vastu and dosha parihara.",
    ],
    concerns: [
      {
        title: "Job changes in the IT and corporate world",
        text: "Hyderabad careers often involve frequent job moves, project changes and onsite opportunities. A chart reading looks at dasha periods and planetary influences, so that you can weigh decisions with more perspective. It is guidance, not a prediction you must follow.",
      },
      {
        title: "Marriage matching for families here and abroad",
        text: "Many Hyderabad families have relatives in other states or overseas, so matches are often arranged across distance. Online Kundali matching lets both sides share birth details and discuss the results together in Telugu or English.",
      },
      {
        title: "Vastu for apartments and gated communities",
        text: "Much of the city's housing is in apartment blocks and gated communities where structural changes are limited. Vastu consultation can focus on the placement of rooms, furniture and everyday-use areas, and on remedies that do not require construction work.",
      },
      {
        title: "Staying connected to your roots",
        text: "Many people in Hyderabad have family in Andhra Pradesh and Telangana towns. Consulting in Telugu lets you and your parents join the same call, so that everyone follows the discussion, whichever generation they belong to.",
      },
    ],
    howItWorks: [
      "Message us on WhatsApp at +91 96524 12221 to book an online slot. We usually reply within a few hours.",
      "Share your date, time and place of birth, plus a short note on what you would like to discuss.",
      "Join the video call, phone call or WhatsApp session and receive your consultation in Telugu or English.",
    ],
    faqs: [
      {
        question: "Do you have an office in Hyderabad?",
        answer:
          "No. Our only physical office is at MVP Colony in Visakhapatnam. Consultations for people in Hyderabad are held online by video call, phone or WhatsApp, and there is no difference in the topics we can cover.",
      },
      {
        question: "Can my parents and I join the same online consultation?",
        answer:
          "Yes. Family members can join the same video call or phone conversation, and discussing in Telugu often helps elders follow along. Please mention in advance who will attend so we can plan the session.",
      },
      {
        question: "What if I am not sure of my exact birth time?",
        answer:
          "Birth time matters for an accurate chart. If you are unsure, check hospital records or ask family elders, and tell us what you know. During the consultation we can discuss what can be read reliably from the details available.",
      },
    ],
  },
  {
    slug: "astrologer-in-bangalore",
    name: "Bangalore",
    state: "Karnataka",
    isLocal: false,
    metaTitle: "Bangalore Astrologer | Online Vedic Astrology | Astro Siddhi",
    metaDescription:
      "Online Vedic astrology for Bangalore (Bengaluru) professionals and families. Horoscope, Kundali matching and Vastu in English or Telugu, via WhatsApp.",
    h1: "Astrologer for Bangalore (Bengaluru): Online Vedic Astrology in English and Telugu",
    intro: [
      "Bangalore, also called Bengaluru, draws people from across India into its technology companies and startups, and many of them come from Telugu-speaking families. If you are far from home and would like a Vedic astrologer who understands your language and background, Sri Raghavendra Siddhanti Garu offers consultations in English or Telugu, drawing on over 25 years of practice.",
      "Consultations for Bangalore are held online, by video call, phone or WhatsApp. Astro Siddhi does not have an office or branch in the city; our only physical office is in MVP Colony, Visakhapatnam. This arrangement suits busy schedules, because you can book a session in advance, join from home or between work commitments, and ask your questions without any commute.",
    ],
    concerns: [
      {
        title: "Startup and tech career decisions",
        text: "Startups, funding cycles and fast-moving tech roles make career paths in Bangalore unpredictable. A career reading examines your chart for strengths and timing, giving you another viewpoint when you consider a move, a venture or a change of field.",
      },
      {
        title: "Relationships under long working hours",
        text: "Demanding schedules and living away from family can strain relationships. Love and relationship guidance looks at the compatibility and planetary periods in the charts, helping you reflect on communication and expectations rather than offering quick verdicts.",
      },
      {
        title: "Kundali matching when family is far away",
        text: "Many people in Bangalore search for a match while their parents live in another city. Online Kundali matching lets both families take part from different places, with each point explained in English or Telugu.",
      },
      {
        title: "Vastu in rented homes",
        text: "A large share of Bangalore residents live in rented flats where walls and layouts cannot change. Vastu consultation can concentrate on how you arrange rooms, furniture and daily-use areas, and on simple adjustments that suit rented homes.",
      },
    ],
    howItWorks: [
      "Message us on WhatsApp at +91 96524 12221 to book an online slot. We usually reply within a few hours.",
      "Send your date, time and place of birth, along with the topics you wish to cover, such as career, marriage or Vastu.",
      "Join your video call, phone call or WhatsApp session and receive the consultation in English or Telugu.",
    ],
    faqs: [
      {
        question: "Is there an Astro Siddhi office in Bangalore?",
        answer:
          "No. We do not have an office or branch in Bangalore or Bengaluru. Consultations are online, and our only in-person office is at MVP Double Road, MVP Colony, Visakhapatnam, which you are welcome to visit if you travel there.",
      },
      {
        question: "I do not speak Telugu. Can I still consult?",
        answer:
          "Yes. Sri Raghavendra Siddhanti Garu consults in both English and Telugu, so you can choose whichever language you are more comfortable with. Please mention your preference when you book on WhatsApp.",
      },
      {
        question: "Can a Vastu consultation be done online for my flat?",
        answer:
          "In many cases a layout can be discussed using a floor plan and the room directions you share. Please message us with details of your home when you enquire, and we will explain what can be reviewed online.",
      },
    ],
  },
  {
    slug: "astrologer-in-chennai",
    name: "Chennai",
    state: "Tamil Nadu",
    isLocal: false,
    metaTitle: "Chennai Telugu Astrologer Online | Astro Siddhi Vedic",
    metaDescription:
      "Vedic astrology for Chennai's Telugu and English-speaking families, held online. Kundali matching, horoscope reading and Vastu guidance, via WhatsApp.",
    h1: "Telugu and English Vedic Astrologer for Chennai - Online Consultations",
    intro: [
      "Chennai has a long-established Telugu-speaking community, many of whose families have lived in Tamil Nadu for generations while keeping the traditions of Andhra Pradesh close. If you would like to discuss your horoscope in Telugu, or in English, Sri Raghavendra Siddhanti Garu of Astro Siddhi is available for consultation with more than 25 years of Vedic practice behind him.",
      "Please note that consultations for Chennai are held online, through video call, phone or WhatsApp. We do not run an office in Chennai; the only physical office is at MVP Colony, Visakhapatnam. Consultations are offered in Telugu and English only, so if you need another language, a family member who can translate may join the call.",
    ],
    concerns: [
      {
        title: "Careers in manufacturing, IT and services",
        text: "Chennai's economy spans manufacturing, IT services, healthcare and education. A career reading looks at your chart's strengths and the timing of planetary periods, which can help you reflect when you are considering a role change or a new direction.",
      },
      {
        title: "Marriage within a Telugu community",
        text: "Many Telugu families in Chennai prefer a match that shares their language and customs, so Kundali matching is often arranged alongside relatives in Andhra Pradesh. We compare both charts and explain the findings in Telugu so elders can follow.",
      },
      {
        title: "Keeping traditions across generations",
        text: "Younger family members may be less familiar with traditional practices than their grandparents. A consultation lets everyone ask questions, and dosha parihara or other customary remedies can be explained in terms that each generation understands.",
      },
      {
        title: "Vastu for homes and workplaces",
        text: "Chennai residents often live in apartments or in long-held family homes. Vastu consultation reviews the direction of entrances, kitchens and living areas, and suggests changes that are realistic for the building you actually have.",
      },
    ],
    howItWorks: [
      "Message us on WhatsApp at +91 96524 12221 to book an online slot. We usually reply within a few hours.",
      "Share your date, time and place of birth, and tell us whether you prefer Telugu or English.",
      "Join the video call, phone call or WhatsApp session and receive your consultation from Sri Raghavendra Siddhanti Garu.",
    ],
    faqs: [
      {
        question: "Do you offer consultations in Tamil?",
        answer:
          "No. Consultations are held in Telugu and English. If you are more comfortable in Tamil, a family member who can translate is welcome to join the call so that nothing gets lost in the conversation.",
      },
      {
        question: "Does living in Chennai change how my birth chart is read?",
        answer:
          "A Vedic birth chart is calculated from your date, time and place of birth, not from where you live now. Your present location matters mainly for context such as work and family life, which we can discuss.",
      },
      {
        question: "Is there a Chennai office I can visit?",
        answer:
          "No. We have no office in Chennai. Consultations are online, and the only in-person office is at MVP Double Road, Sector 10, MVP Colony, Visakhapatnam, open Monday to Saturday, and on Sunday by advance appointment.",
      },
    ],
  },
  {
    slug: "astrologer-in-mumbai",
    name: "Mumbai",
    state: "Maharashtra",
    isLocal: false,
    metaTitle: "Mumbai Astrologer | Online Vedic Astrology - Astro Siddhi",
    metaDescription:
      "Online Vedic astrology for Mumbai businesspeople, professionals and families. Horoscope, Kundali matching and Vastu with Sri Raghavendra Siddhanti Garu.",
    h1: "Online Vedic Astrology for Mumbai: Business, Career and Family Guidance",
    intro: [
      "Mumbai is a city of trade, finance, services and entertainment, where people work long days and often have little time to travel across town for an appointment. Astro Siddhi offers Mumbai clients consultations with Sri Raghavendra Siddhanti Garu, a Vedic astrologer with over 25 years of experience, held entirely online and in Telugu or English.",
      "We want to be transparent: we do not have an office in Mumbai, and Garu does not hold consultations there in person. Our only physical office is in MVP Colony, Visakhapatnam. Mumbai sessions take place by video call, phone or WhatsApp, which allows you to consult from your home, your shop or your workplace, whichever is most convenient for you.",
    ],
    concerns: [
      {
        title: "Business timing and partnerships",
        text: "Traders and business owners in Mumbai often weigh partnerships, expansion and new ventures. Business astrology examines the chart for periods that favour or challenge such decisions. It complements, and never replaces, professional financial or legal advice.",
      },
      {
        title: "Career in a fast-moving city",
        text: "Whether you work in finance, services, media or a family firm, Mumbai careers can change quickly. A reading looks at dasha periods and planetary strengths to give you a calmer framework for thinking about your next step.",
      },
      {
        title: "Compact homes and Vastu",
        text: "Space in Mumbai is limited, and many homes and offices are small. Vastu consultation focuses on practical arrangements, such as where to place the main door, kitchen, workspace or bed, without suggesting major renovation.",
      },
      {
        title: "Telugu families far from home",
        text: "Telugu-speaking families settled in Mumbai often search for matches and discuss traditions with relatives in Andhra Pradesh or Telangana. Online Kundali matching in Telugu lets everyone join from different places.",
      },
    ],
    howItWorks: [
      "Message us on WhatsApp at +91 96524 12221 to book an online slot that fits your working day. We usually reply within a few hours.",
      "Send your date, time and place of birth and note which topics you would like to discuss.",
      "Join the video call, phone call or WhatsApp session and receive your consultation in Telugu or English.",
    ],
    faqs: [
      {
        question: "Does the astrologer visit Mumbai or have a Mumbai branch?",
        answer:
          "No. There is no Mumbai office, branch or visiting schedule. All consultations for Mumbai are held online, and our only in-person office is at MVP Colony in Visakhapatnam, Andhra Pradesh.",
      },
      {
        question: "Can astrology guide my business or investment decisions?",
        answer:
          "Astrology can offer a perspective on timing and personal tendencies, but it is not financial or legal advice and cannot promise results. Please consult qualified professionals for money matters, and use the reading as one input.",
      },
      {
        question: "I have a busy schedule. How do I book a time?",
        answer:
          "Message us on WhatsApp at +91 96524 12221 with a couple of preferred times. Our office hours are 9:00 AM to 8:00 PM Monday to Saturday, and Sunday by advance appointment, and we usually reply within a few hours.",
      },
    ],
  },
  {
    slug: "astrologer-in-delhi",
    name: "Delhi",
    state: "Delhi",
    isLocal: false,
    metaTitle: "Astrologer in Delhi NCR | Online Vedic - Astro Siddhi",
    metaDescription:
      "Online Vedic astrology for Delhi and NCR residents, students and professionals. Horoscope reading and Kundali matching in English or Telugu, via WhatsApp.",
    h1: "Delhi NCR Vedic Astrologer: Online Horoscope and Kundali Consultations",
    intro: [
      "Delhi and the wider NCR region draw students, government aspirants, officers and working professionals from every state, including many Telugu-speaking families who live far from home. Astro Siddhi offers them access to Sri Raghavendra Siddhanti Garu, a Vedic astrologer with more than 25 years of practice, who consults in English and Telugu and has served over 15,000 clients.",
      "For Delhi, consultations are held online by video call, phone or WhatsApp. We do not have an office, branch or visiting schedule in Delhi or NCR; our only physical office is at MVP Colony, Visakhapatnam. Online sessions are therefore the way to consult from the capital region, and they cover the same topics as an in-person meeting.",
    ],
    concerns: [
      {
        title: "Competitive exams and civil services",
        text: "Many young people come to Delhi to prepare for civil services and other competitive exams. A chart reading can offer perspective on study patterns and timing, but it cannot guarantee a result, and it should sit alongside steady preparation.",
      },
      {
        title: "Relocating to NCR for a job posting",
        text: "Transfers and postings often bring families to Delhi, Gurugram or Noida for a few years. A career and relocation discussion looks at planetary periods in your chart, helping you reflect on a move before you commit.",
      },
      {
        title: "Marriage matching across regions",
        text: "Families in Delhi may be matching a child with a family from another state, with relatives living in different cities. Online Kundali matching lets everybody participate, and each point is explained in English or Telugu.",
      },
      {
        title: "Vastu for rented and government housing",
        text: "Many NCR residents live in rented flats or allotted housing where structure cannot change. Vastu consultation then concentrates on how rooms and belongings are arranged, and on modest adjustments that are practical for temporary homes.",
      },
    ],
    howItWorks: [
      "Message us on WhatsApp at +91 96524 12221 to book an online slot. We usually reply within a few hours.",
      "Share your date, time and place of birth, and mention what you would like to focus on, such as career, exams or marriage.",
      "Join the video call, phone call or WhatsApp session and receive your consultation in Telugu or English.",
    ],
    faqs: [
      {
        question: "Is there an Astro Siddhi office in Delhi or NCR?",
        answer:
          "No. We have no office, branch or visiting schedule in Delhi, Gurugram, Noida or elsewhere in NCR. Consultations are online, and our only in-person office is at MVP Colony, Visakhapatnam.",
      },
      {
        question: "I am preparing for a competitive exam. Can astrology help?",
        answer:
          "A reading can discuss your chart's tendencies and the timing of planetary periods, which some students find helpful for reflection. It cannot promise success in any exam, and consistent preparation remains the most important factor.",
      },
      {
        question: "Does time zone or distance affect an online consultation?",
        answer:
          "No. Delhi follows Indian Standard Time, the same as our office. Distance does not change how your chart is read, and sessions can be scheduled in the office hours of Monday to Saturday, 9:00 AM to 8:00 PM.",
      },
    ],
  },
  {
    slug: "astrologer-in-vijayawada",
    name: "Vijayawada",
    state: "Andhra Pradesh",
    isLocal: false,
    metaTitle: "Vijayawada Astrologer | Telugu Vedic Astrology Online",
    metaDescription:
      "Telugu Vedic astrology and Vastu consultations for Vijayawada and Amaravati-region families, held online. Kundali matching and horoscope reading.",
    h1: "Vijayawada Jyotish and Vastu Consultations in Telugu - Online with Siddhanti Garu",
    intro: [
      "Vijayawada is one of Andhra Pradesh's busiest commercial and trading centres, and the wider Amaravati region has seen a great deal of new construction and relocation. For families here, questions about marriage, business and a new home often arrive together. Sri Raghavendra Siddhanti Garu offers Vedic astrology and Vastu consultations in Telugu, backed by over 25 years of practice.",
      "Consultations for Vijayawada are held online, by video call, phone or WhatsApp. Astro Siddhi has no office in Vijayawada; our only physical office is at MVP Colony in Visakhapatnam, within Andhra Pradesh. You are welcome to visit it by appointment if you happen to travel to the coast, and online sessions cover the same services, so you can choose whichever suits you.",
    ],
    concerns: [
      {
        title: "Vastu for new construction",
        text: "With so much building activity in and around Vijayawada and the Amaravati region, many families plan a plot, house or apartment purchase. Vastu consultation reviews orientation, entrances and room placement, ideally before finalising designs.",
      },
      {
        title: "Trade and business planning",
        text: "Vijayawada has a strong tradition of trade and family businesses. Business astrology looks at the chart for suitable periods to begin, expand or change course. It supports your own judgement and does not replace professional financial advice.",
      },
      {
        title: "Kundali matching for local families",
        text: "Marriage arrangements in Vijayawada often involve extended family and long discussions. Kundali matching, explained in Telugu and in detail, gives everyone a shared reference, and any doshas can be discussed with traditional parihara options.",
      },
      {
        title: "Careers, postings and relocation",
        text: "Government postings, private jobs and moves between Vijayawada, Guntur and other cities are common. A horoscope reading looks at dasha periods to help you reflect on timing when a change is on the table.",
      },
    ],
    howItWorks: [
      "Message us on WhatsApp at +91 96524 12221 to book an online slot. We usually reply within a few hours.",
      "Share your date, time and place of birth, and for Vastu a simple plan or description of the property.",
      "Join the video call, phone call or WhatsApp session and receive your consultation in Telugu or English.",
    ],
    faqs: [
      {
        question: "Is there an office in Vijayawada?",
        answer:
          "No. Consultations for Vijayawada are held online. The only physical office is at MVP Double Road, Sector 10, MVP Colony, Visakhapatnam, open Monday to Saturday from 9:00 AM to 8:00 PM and on Sunday by advance appointment.",
      },
      {
        question: "Can Vastu advice for a plot or new house be given online?",
        answer:
          "Often a plan or layout, together with directions and property details you share, can be discussed on a call. Please send the details on WhatsApp when you enquire, and we will explain what can be reviewed remotely.",
      },
      {
        question: "What should I prepare for Kundali matching?",
        answer:
          "Keep the date, exact time and place of birth of both the boy and the girl ready, ideally from birth certificates or hospital records. With those details, the charts can be compared and discussed in Telugu or English.",
      },
    ],
  },
];

export function getCity(slug: string): City | undefined {
  return CITIES.find((city) => city.slug === slug);
}
