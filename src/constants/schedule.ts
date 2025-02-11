export type ScheduleEvent = {
  venue: string;
  time: string;
  event: string;
};

export const bgmiEvent: ScheduleEvent = {
  venue: "Online",
  time: "Evening",
  event: "BGMI",
};

export const dayOneEvents: ScheduleEvent[] = [
  { venue: "Main Stage", time: "8:30 AM", event: "Inaugration" },
  { venue: "Main Stage", time: "9:15 AM", event: "Battle of Bands" },
  { venue: "Main Stage", time: "12:30 PM", event: "Indian Group Dance" },
  { venue: "Main Stage", time: "2:30 PM", event: "DJ Wars" },
  { venue: "Auditorium", time: "9:00 AM", event: "Mock Rock" },
  { venue: "Auditorium", time: "1:00 PM", event: "Personality" },
  { venue: "Aloysius Hall", time: "9:00 AM", event: "Indian Solo Dance" },
  { venue: "Faber Hall", time: "9:00 AM", event: "Beatbox and rap battle" },
  { venue: "De Nobili", time: "9:00 AM", event: "Western Music Solo" },
  { venue: "Loyola Hall", time: "9:00 AM", event: "Solo Instrumental" },
  { venue: "Arrupe", time: "9:00 AM", event: "Improv" },
  { venue: "Arrupe", time: "12:00 PM", event: "Aircrash" },
  { venue: "Classroom", time: "11:00 AM", event: "Murder Mystery" },
  { venue: "Classroom", time: "11:00 AM", event: "Meme Making" },
  { venue: "Hostel Block", time: "9:30 AM", event: "Street Play" },
  { venue: "Across Campus", time: "10:00 AM", event: "Reel Making" },
];

export const dayTwoEvents: ScheduleEvent[] = [
  { venue: "Main Stage", time: "9:00 AM", event: "Western Group Dance" },
  { venue: "Main Stage", time: "11:00 AM", event: "Council Wars" },
  { venue: "Main Stage", time: "2:00 PM", event: "Fashion Show" },
  { venue: "Auditorium", time: "9:00 AM", event: "Western Group Song" },
  { venue: "Auditorium", time: "11:00 AM", event: "Indian Group Song" },
  { venue: "Auditorium", time: "1:00 PM", event: "Mad Ads" },
  { venue: "Aloysius Hall", time: "9:30 AM", event: "Western Solo Dance" },
  { venue: "De Nobili", time: "9:30 AM", event: "Indian Solo Singing" },
  { venue: "Loyola Hall", time: "9:30 AM", event: "Indian Classical Solo Singing" },
  { venue: "Arrupe", time: "1:30 PM", event: "Standup comedy" },
  { venue: "Classroom", time: "10:00 AM", event: "Art" },
  { venue: "Classroom", time: "12:30 PM", event: "Minute to win it" },
  { venue: "Classroom", time: "12:30 PM", event: "Treasure Hunt" },
  { venue: "UG Quadrangle", time: "11:00 AM", event: "Face Painting" },
  { venue: "Across Campus", time: "12:00 PM", event: "Photography" },
];
