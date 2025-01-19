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
];
