export type Event = {
  title: string;
  date: string;
  venue: string;
  image: string;
  description: string;
  rating: number;
  rules: string[];
  capacity?: number; // Optional capacity property
};

export const events: readonly Event[] = [
  {
    title: "Annual Photography Exhibition",
    date: "October 15, 2023",
    venue: "Downtown Art Gallery",
    image: "/images/photo-exhibition.jpg",
    description:
      "Join us for our annual photography exhibition featuring works from talented local artists.",
    rating: 5,
    rules: [
      "All photographs must be original work",
      "Maximum 3 entries per participant",
      "Minimum resolution of 300 DPI",
      "No watermarks or signatures on images",
    ],
    capacity: 100,
  },
  {
    title: "Portrait Photography Workshop",
    date: "November 5, 2023",
    venue: "Creative Studio Space",
    image: "/images/workshop.jpg",
    description:
      "Learn essential portrait photography techniques from industry professionals.",
    rating: 4,
    rules: [
      "Bring your own camera",
      "Basic knowledge of photography required",
      "Limited to 15 participants",
      "Lighting equipment provided",
    ],
    capacity: 15,
  },
  {
    title: "Nature Photography Expedition",
    date: "December 3, 2023",
    venue: "National Park",
    image: "/images/nature-photo.jpg",
    description:
      "Join our outdoor photography expedition to capture the beauty of nature.",
    rating: 3,
    rules: [
      "Wear comfortable hiking shoes",
      "Bring your own camera and lenses",
      "Pack a lunch and water",
      "Follow park guidelines",
    ],
  },
  {
    title: "Street Photography Walk",
    date: "January 15, 2024",
    venue: "Historic City Center",
    image: "/images/street-photo.jpg",
    description:
      "Explore urban photography techniques while walking through historic streets.",
    rating: 4,
    rules: [
      "Bring your own camera",
      "Respect privacy of individuals",
      "Stay with the group",
      "Wear comfortable shoes",
    ],
  },
  {
    title: "Fashion Photography Masterclass",
    date: "February 1, 2024",
    venue: "Modern Studio Complex",
    image: "/images/fashion-photo.jpg",
    description:
      "Learn professional fashion photography techniques from industry experts.",
    rating: 5,
    rules: [
      "Bring your own camera",
      "Basic knowledge of photography required",
      "Limited to 10 participants",
      "Models and makeup artists provided",
    ],
  },
  {
    title: "Macro Photography Workshop",
    date: "February 20, 2024",
    venue: "Botanical Gardens",
    image: "/images/macro-photo.jpg",
    description:
      "Discover the fascinating world of macro photography in a beautiful setting.",
    rating: 4,
    rules: [
      "Bring your own camera and macro lens",
      "Tripods recommended",
      "Limited to 20 participants",
      "Follow garden rules",
    ],
  },
  {
    title: "Night Sky Photography",
    date: "March 10, 2024",
    venue: "Observatory Point",
    image: "/images/astro-photo.jpg",
    description:
      "Capture stunning images of stars, planets, and the Milky Way.",
    rating: 5,
    rules: [
      "Bring your own camera and tripod",
      "Dress warmly",
      "Limited to 25 participants",
      "Follow observatory guidelines",
    ],
  },
  {
    title: "Wedding Photography Seminar",
    date: "March 25, 2024",
    venue: "Grand Hotel Conference Room",
    image: "/images/wedding-photo.jpg",
    description:
      "Master the art of wedding photography with hands-on training.",
    rating: 4,
    rules: [
      "Bring your own camera",
      "Basic knowledge of photography required",
      "Limited to 30 participants",
      "Models and wedding setups provided",
    ],
  },
  {
    title: "Wildlife Photography Safari",
    date: "April 8, 2024",
    venue: "Wildlife Reserve",
    image: "/images/wildlife-photo.jpg",
    description:
      "An exciting expedition to photograph wild animals in their natural habitat.",
    rating: 5,
    rules: [
      "Bring your own camera and telephoto lens",
      "Wear neutral-colored clothing",
      "Follow guide instructions",
      "Respect wildlife",
    ],
  },
  {
    title: "Architecture Photography Tour",
    date: "April 22, 2024",
    venue: "Metropolitan Area",
    image: "/images/architecture-photo.jpg",
    description:
      "Learn to capture stunning architectural shots in urban environments.",
    rating: 4,
    rules: [
      "Bring your own camera",
      "Wear comfortable shoes",
      "Stay with the group",
      "Respect private property",
    ],
  },
  {
    title: "Food Photography Workshop",
    date: "May 5, 2024",
    venue: "Culinary Institute",
    image: "/images/food-photo.jpg",
    description:
      "Master the art of food photography for social media and commercial use.",
    rating: 4,
    rules: [
      "Bring your own camera",
      "Basic knowledge of photography required",
      "Limited to 20 participants",
      "Food provided for photography",
    ],
  },
  {
    title: "Documentary Photography Course",
    date: "May 20, 2024",
    venue: "Media Center",
    image: "/images/documentary-photo.jpg",
    description:
      "Learn storytelling through documentary photography techniques.",
    rating: 3,
    rules: [
      "Bring your own camera",
      "Basic knowledge of photography required",
      "Limited to 15 participants",
      "Follow ethical guidelines",
    ],
  },
  {
    title: "Drone Photography Basics",
    date: "June 1, 2024",
    venue: "Open Field Park",
    image: "/images/drone-photo.jpg",
    description:
      "Introduction to aerial photography using modern drone technology.",
    rating: 4,
    rules: [
      "Bring your own drone",
      "Follow drone regulations",
      "Limited to 10 participants",
      "Respect privacy of individuals",
    ],
  },
];
