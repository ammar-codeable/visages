export type Event = {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
  rating: number;
};

export const events: readonly Event[] = [
  {
    title: "Annual Photography Exhibition",
    date: "October 15, 2023",
    location: "Downtown Art Gallery",
    image: "/images/photo-exhibition.jpg",
    description:
      "Join us for our annual photography exhibition featuring works from talented local artists.",
    rating: 5,
  },
  {
    title: "Portrait Photography Workshop",
    date: "November 5, 2023",
    location: "Creative Studio Space",
    image: "/images/workshop.jpg",
    description:
      "Learn essential portrait photography techniques from industry professionals.",
    rating: 4,
  },
  {
    title: "Nature Photography Expedition",
    date: "December 3, 2023",
    location: "National Park",
    image: "/images/nature-photo.jpg",
    description:
      "Join our outdoor photography expedition to capture the beauty of nature.",
    rating: 3,
  },
  {
    title: "Street Photography Walk",
    date: "January 15, 2024",
    location: "Historic City Center",
    image: "/images/street-photo.jpg",
    description:
      "Explore urban photography techniques while walking through historic streets.",
    rating: 4,
  },
  {
    title: "Fashion Photography Masterclass",
    date: "February 1, 2024",
    location: "Modern Studio Complex",
    image: "/images/fashion-photo.jpg",
    description:
      "Learn professional fashion photography techniques from industry experts.",
    rating: 5,
  },
  {
    title: "Macro Photography Workshop",
    date: "February 20, 2024",
    location: "Botanical Gardens",
    image: "/images/macro-photo.jpg",
    description:
      "Discover the fascinating world of macro photography in a beautiful setting.",
    rating: 4,
  },
  {
    title: "Night Sky Photography",
    date: "March 10, 2024",
    location: "Observatory Point",
    image: "/images/astro-photo.jpg",
    description:
      "Capture stunning images of stars, planets, and the Milky Way.",
    rating: 5,
  },
  {
    title: "Wedding Photography Seminar",
    date: "March 25, 2024",
    location: "Grand Hotel Conference Room",
    image: "/images/wedding-photo.jpg",
    description:
      "Master the art of wedding photography with hands-on training.",
    rating: 4,
  },
  {
    title: "Wildlife Photography Safari",
    date: "April 8, 2024",
    location: "Wildlife Reserve",
    image: "/images/wildlife-photo.jpg",
    description:
      "An exciting expedition to photograph wild animals in their natural habitat.",
    rating: 5,
  },
  {
    title: "Architecture Photography Tour",
    date: "April 22, 2024",
    location: "Metropolitan Area",
    image: "/images/architecture-photo.jpg",
    description:
      "Learn to capture stunning architectural shots in urban environments.",
    rating: 4,
  },
  {
    title: "Food Photography Workshop",
    date: "May 5, 2024",
    location: "Culinary Institute",
    image: "/images/food-photo.jpg",
    description:
      "Master the art of food photography for social media and commercial use.",
    rating: 4,
  },
  {
    title: "Documentary Photography Course",
    date: "May 20, 2024",
    location: "Media Center",
    image: "/images/documentary-photo.jpg",
    description:
      "Learn storytelling through documentary photography techniques.",
    rating: 3,
  },
  {
    title: "Drone Photography Basics",
    date: "June 1, 2024",
    location: "Open Field Park",
    image: "/images/drone-photo.jpg",
    description:
      "Introduction to aerial photography using modern drone technology.",
    rating: 4,
  },
];
