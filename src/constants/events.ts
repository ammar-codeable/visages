import westernSolo from "@/assets/western-solo.jpg";

export type Event = {
  title: string;
  date: string;
  venue: string;
  image: string;
  description: string;
  rating: number;
  rules: string[];
  capacity?: string;
  registrationFee: number;
  timeLimit?: string;
  open: boolean;
  cashPrize?: number;
  eventHeadName: string;
  eventHeadNumber: string;
};

export const events: readonly Event[] = [
  {
    title: "Indian Group Dance",
    date: "",
    venue: "Main Stage",
    image:
      "https://media-cdn.tripadvisor.com/media/attractions-splice-spp-674x446/07/36/66/09.jpg",
    description: "A vibrant showcase of Indian dance styles and music.",
    rating: 5,
    registrationFee: 1500,
    rules: [
      "Only Indian styles and Indian music are allowed (Contemporary, Bollywood, Classical, Semi-Classical, Folk or any other Indian style).",
      "Any act of vulgarity in the costume or dance/indiscipline behaviour will lead to disqualification.",
      "Usage of props is allowed considering it is not harmful. (Usage of fire, water or any flammable objects will not be allowed.)",
      "Exceeding the time limit will lead to a reduction in the score",
    ],
    capacity: "8-14 members",
    timeLimit: "5+1 minutes",
    open: false,
    cashPrize: 8000,
    eventHeadName: "Vismaya",
    eventHeadNumber: "+91 88671 13115",
  },
  {
    title: "Western Group Dance",
    date: "",
    venue: "Main Stage",
    image:
      "https://static.wixstatic.com/media/d90ac3_63db656ddfa8483bbd89dd3f926df712~mv2.jpg/v1/fill/w_1469,h_828,fp_0.50_0.50,q_85,usm_0.66_1.00_0.01,enc_auto/d90ac3_63db656ddfa8483bbd89dd3f926df712~mv2.jpg",
    description: "A dynamic fusion of Western dance styles and music.",
    rating: 5,
    registrationFee: 1500,
    rules: [
      "Profanity, vulgarity or obscenity will lead to disqualification.",
      "Usage of props is allowed. Fire or liquid substances are not permitted.",
      "University dress code to be strictly adhered to.",
      "Any genre of music is allowed but the dance style must be strictly western.",
      "Participants are requested to submit their audio through the google form that will be provided prior to the day of the event.",
    ],
    capacity: "5-20 members",
    timeLimit: "3+2 minutes",
    open: false,
    cashPrize: 8000,
    eventHeadName: "Mahek",
    eventHeadNumber: "+91 80003 03199",
  },
  {
    title: "Fashion Walk",
    date: "",
    venue: "Main Stage",
    image:
      "https://img.freepik.com/premium-photo/model-walks-ramp-indian-fashion-show_997657-42418.jpg?w=1060",
    description:
      "Showcase your style, creativity, and confidence on the runway.",
    rating: 5,
    registrationFee: 1500,
    rules: [
      "No of Participants: 8 to 10 members",
      "Judging will be based on clothes, creativity, choreography, styling and walk.",
      "No vulgarity.",
      "Dress Code: Inappropriate outfits are not allowed—college norms are to be followed (e.g., no crop tops, sleeveless tops, off-shoulder tops, deep neck tops, backless tops, sheer tops, ripped jeans).",
      "Stockings to be worn (no sheer stockings).",
      "Violation of dress code/any rules will lead to disqualification.",
    ],
    capacity: "8-10 members",
    timeLimit: "6+2 minutes",
    open: false,
    cashPrize: 8000,
    eventHeadName: "Pratham",
    eventHeadNumber: "+91 91135 11958",
  },
  {
    title: "Indian Group Singing",
    date: "",
    venue: "University Auditorium",
    image:
      "https://scontent.fblr1-6.fna.fbcdn.net/v/t39.30808-6/304311011_387185596932148_2628574824892498863_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=cc71e4&_nc_ohc=BusgJZjGw0gQ7kNvgFAxowx&_nc_zt=23&_nc_ht=scontent.fblr1-6.fna&_nc_gid=A0B3Orb3ALVFTcpKcqvge2m&oh=00_AYBoFkb1F2a5PyYvpfgMKTOD1WQTpJeOLndMJ38Fa1kRmw&oe=6797325A",
    description: "A melodious journey through Indian languages and genres.",
    rating: 5,
    registrationFee: 1000,
    rules: [
      "No of Participants: 4 to 18 members (including instrumentalists)",
      "Teams must strictly adhere to the time limit.",
      "All Indian languages and genres are allowed.",
      "Usage of karaoke is NOT allowed.",
      "Participants have to carry their own instruments (a drum kit will be provided).",
      "Any kind of vulgarity will lead to immediate disqualification.",
    ],
    capacity: "3-8 members",
    timeLimit: "5+2 minutes",
    open: false,
    cashPrize: 5000,
    eventHeadName: "Supriya",
    eventHeadNumber: "+91 86603 50610",
  },
  {
    title: "Western Group Singing",
    date: "",
    venue: "University Auditorium",
    image:
      "https://3.files.edl.io/a851/23/05/16/051433-e30c7c6b-2ac3-4f3a-9079-df55c40e0a08.jpg",
    description: "A celebration of vocal harmony and live Western music.",
    rating: 5,
    registrationFee: 1000,
    rules: [
      "No of Participants: 6 to 10 members",
      "Total Teams allowed: Max two per college, Cap at 15 teams",
      "Songs must be in English.",
      "Teams may use live instruments only (Acoustic, Keyboard, Basic Perc like Cajon, etc).",
      "Use of backing vocals in tracks is prohibited.",
      "Teams must bring their own instruments.",
      "Stage setup and soundcheck must be completed within the allotted time",
      "Exceeding the time limit may result in a penalty or disqualification.",
      "Use of vulgar language is prohibited.",
    ],
    capacity: "6-10 members, 2 team per college. Cap at 15 teams",
    timeLimit: "6+2 minutes (6 minutes performance + 2 minute soundcheck)",
    open: false,
    cashPrize: 5000,
    eventHeadName: "Gareth",
    eventHeadNumber: "+91 77603 45707",
  },
  {
    title: "Mad Ads",
    date: "",
    venue: "Main Stage",
    image: "https://contentfuel.co/wp-content/uploads/2021/04/clown.jpeg",
    description: "Creative advertisements with humor and ingenuity.",
    rating: 5,
    registrationFee: 1000,
    rules: ["Number of rounds : 2"],
    capacity: "6-8 members",
    timeLimit: "3+1 minutes",
    open: false,
    cashPrize: 5000,
    eventHeadName: "Sachin",
    eventHeadNumber: "+91 97393 64613",
  },
  {
    title: "Personality",
    date: "",
    venue: "University Auditorium",
    image: "https://cpu.edu.ph/wp-content/uploads/2018/09/mscpu3.jpg",
    description: "An individual event showcasing charisma and uniqueness.",
    rating: 5,
    registrationFee: 500,
    rules: [
      "No of Participants: Individual event",
      "Vulgarity, obscenity and offensive content are strictly prohibited.",
      "Props will be allowed at the Judge's discretion.",
      "There could be multiple rounds left to the Judges.",
    ],
    capacity: undefined,
    open: false,
    cashPrize: 3000,
    eventHeadName: "Aishwarya",
    eventHeadNumber: "+91 99625 22299",
  },
  {
    title: "Street Play",
    date: "",
    venue: "Hostel Block",
    image:
      "https://im.indiatimes.in/content/2016/Dec/002_inside_1480572106.jpg?w=725&h=483&cc=1&webp=1&q=75",
    description: "Expressive performances on open themes with live sound.",
    rating: 4,
    registrationFee: 500,
    rules: [
      "Number of participants: 12-15 members",
      "No government, religion, or political party is to be targeted directly.",
      "Use of props is allowed.",
      "Theme: Open",
      "Vulgarity in language, gestures, and costumes will not be entertained and can lead to disqualification.",
      "The sound and music should be live.",
      "Audio tracks, digital sound or electronic instruments will not be allowed.",
      "Original and fresh scripts will be entertained.",
    ],
    capacity: "12-15 members",
    timeLimit: "8+2 minutes",
    open: false,
    cashPrize: 4000,
    eventHeadName: "Benny",
    eventHeadNumber: "+91 98445 20704",
  },
  {
    title: "Mock Rock",
    date: "",
    venue: "University Auditorium",
    image: "https://images3.alphacoders.com/134/1347639.png",
    description:
      "A hilarious performance combining music, memes, and creativity.",
    rating: 4,
    registrationFee: 500,
    rules: [
      "Participants form teams to convey a story with the help of music and MEME references, adding their own comedic twists, exaggerated acting, and ridiculous props.",
      "Any language can be used in audio.",
      "Any vulgarity, profanity, or offensive actions regarding caste, religion, politics, or discrimination will lead to disqualification.",
      "Choreography, composition, costume, and audience reaction will be considered as well.",
    ],
    capacity: "6-8 members",
    timeLimit: "4+2 minutes",
    open: false,
    cashPrize: 4000,
    eventHeadName: "Aloysious",
    eventHeadNumber: "+91 73385 55271",
  },
  {
    title: "Air Crash",
    date: "",
    venue: "",
    image:
      "https://th.bing.com/th/id/OIF.4qYNGRGkJO7rLeG1ftmbaw?rs=1&pid=ImgDetMain",
    description:
      "On-the-spot characters and creative scenarios to test your imagination.",
    rating: 4,
    registrationFee: 400,
    rules: [
      "No prior preparations are required, as characters will be assigned by the judges to participants on the spot.",
      "Each round will include multiple segments, which will be announced by the judges.",
      "Any display of vulgarity, foul language, or obscene, or offensive content will result in immediate disqualification.",
    ],
    capacity: undefined,
    open: false,
    cashPrize: 3000,
    eventHeadName: "Naomi",
    eventHeadNumber: "+91 99024 77648",
  },
  {
    title: "Indian Solo Dance",
    date: "",
    venue: "Aloysius Hall",
    image:
      "https://cdn.groupmuse.com/b186beaa-467c-45d1-b858-6b472ea8b3d8/-/scale_crop/1800x960/center/-/max_icc_size/10/-/format/auto/-/quality/lighter/-/progressive/yes/",
    description:
      "Show your skills in Indian dance styles and captivate the audience.",
    rating: 4,
    registrationFee: 400,
    rules: [
      "Only Indian styles and Indian music are allowed (Contemporary, Bollywood, Classical, Semi-Classical, Folk or any other Indian style).",
      "Two contingent participants per College /University are allowed.",
      "Any act of vulgarity in the costume or dance/indiscipline behaviour during the event will lead to disqualification.",
      "Usage of props is allowed, considering it is not harmful (Usage of fire, water, or any flammable object will not be allowed).",
      "Exceeding the time limit will lead to a reduction in score.",
    ],
    capacity: "individual",
    timeLimit: "3+1 minutes (Inclusive of entry, stage set up and exit)",
    open: false,
    cashPrize: 3000,
    eventHeadName: "Angelina",
    eventHeadNumber: "+91 88269 16458",
  },
  {
    title: "Reel Making",
    date: "",
    venue: "",
    image:
      "https://www.maketecheasier.com/assets/uploads/2022/08/best-apps-to-make-instagram-reels-featured-image-800x400.jpg",
    description:
      "Create captivating reels to showcase your creativity and win hearts.",
    rating: 4,
    registrationFee: 400,
    rules: [
      "Max length 2 minutes.",
      "Exceeding the time limit would lead to disqualification.",
      "Use of vulgar language or profanity will lead to disqualification.",
      "Results will be graded based on the judge's decision under the amount of engagement (likes, shares, views).",
      "Each university/college can have up to 3 registrations.",
      "Each team must submit their original content.",
      "Teams must focus on the theme of Visages and promote it.",
    ],
    capacity: "Individual",
    open: false,
    cashPrize: 3000,
    eventHeadName: "M. Gayathry",
    eventHeadNumber: "+91 77367 40185",
  },
  {
    title: "Stand-up Comedy",
    date: "",
    venue: "",
    image:
      "https://media.gqindia.com/wp-content/uploads/2020/02/standup-comedy-specials.jpg",
    description:
      "An opportunity to showcase your comedic talent in front of an audience.",
    rating: 3,
    registrationFee: 300,
    rules: [
      "Only original material is allowed.",
      "Participants are not allowed to use profanity or offensive content.",
      "Time limit must be strictly adhered to.",
      "Two Rounds, R1 - Scheduled performance, R2 - Surprise round.",
    ],
    capacity: "Individual",
    timeLimit: "3+1 minutes",
    open: false,
    cashPrize: 2000,
    eventHeadName: "Alwin",
    eventHeadNumber: "+91 99861 49499",
  },
  {
    title: "Treasure Hunt",
    date: "",
    venue: "Campus-wide",
    image:
      "https://pluspng.com/img-png/treasure-hunt-png-hd-treasure-hunt-1920.jpg",
    description: "Follow clues and solve riddles to find the hidden treasure.",
    rating: 3,
    registrationFee: 500,
    rules: [
      "Teams of 3 members.",
      "The clues will be scattered across the campus.",
      "Any act of cheating, misbehavior, discussion with other teams or outside individuals, or the use of gadgets (unless explicitly instructed) is strictly prohibited and will result in instant disqualification.",
      "The first team to find the treasure wins.",
    ],
    capacity: "3 members",
    timeLimit: undefined,
    open: false,
    cashPrize: 2000,
    eventHeadName: "Fathima Fasna",
    eventHeadNumber: "+91 99959 63767",
  },
  {
    title: "Rap and Beatbox",
    date: "",
    venue: "",
    image: "https://25.media.tumblr.com/tumblr_lqllh1v18p1qb4z6jo1_500.gif",
    description:
      "A high-energy event featuring rappers and beatboxers competing in dynamic tag teams.",
    rating: 3,
    registrationFee: 300,
    rules: [
      "No of Participants: 2 in a team.",
      "Rappers and beatboxers will compete in tag teams.",
      "Showcase round: 3+1 minutes.",
      "Further rounds, if any, will be announced at the event based on the judge’s decision.",
      "There is no language barrier for participants.",
      "Participants will be disqualified for vulgarity and discrimination against contestants on any grounds.",
      "Originality is encouraged.",
    ],
    capacity: "2 members per team",
    timeLimit: "3+1 minutes (Showcase round)",
    open: false,
    cashPrize: 2000,
    eventHeadName: "Varish",
    eventHeadNumber: "+91 99868 59666",
  },
  {
    title: "BGMI",
    date: "",
    venue: "Online",
    image:
      "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWRicmgxMGlnN3BzbGp1anZxMGJhdmN3ajFoeHdzNmd5MmQxYnV0eSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/vVwv7I87uB9gZ7avim/giphy.gif",
    description:
      "An exhilarating online gaming tournament for BGMI enthusiasts, testing teamwork and strategy.",
    rating: 0,
    registrationFee: 300,
    rules: [
      "No of Participants: 4+1 (Substitution - Optional).",
      "All participants must be from the same college.",
      "The event will be completely online.",
      "After the qualification rounds, the top 18 teams will be selected for the main finals.",
      "In case of a draw, the team with the most kills would be declared the winner.",
      "The official BGMI E-Sports point system will be followed.",
      "Emulators/iPad players are not allowed.",
      "No third-party applications, Hacks, or Cheats are allowed. Any team accused of using such programs, if failing to produce any proof (POV), will be disqualified.",
      "Team-ups are not allowed.",
      "In-game ID and player information must be submitted prior, and no changes will be accepted after the commencement of the tournament.",
    ],
    capacity: "4+1 members per team",
    timeLimit: "As per BGMI tournament guidelines",
    open: true,
    cashPrize: 2000,
    eventHeadName: "Astle",
    eventHeadNumber: "+91 85908 67797",
  },
  {
    title: "Meme Making",
    date: "",
    venue: "",
    image: "https://media.tenor.com/jWTOcH5trbIAAAAC/meow-im-dancing.gif",
    description:
      "A fun and creative event where participants design memes based on on-the-spot themes within a limited time frame.",
    rating: 3,
    registrationFee: 300,
    rules: [
      "No of Participants: Individual Event (1 registration per college).",
      "Total Entries Allowed: Max 1 participant per college; a maximum of 15 participants overall.",
      "Theme Announcement: Themes will be provided on the spot, and participants must create memes within the given time frame.",
      "Time Limit: Participants will have 15 minutes to create and submit their memes.",
      "Submission Guidelines: Memes must be submitted in image format (.jpg or .png).",
      "Content Restrictions: Memes must not contain any offensive, vulgar, dark humor, political, or inappropriate content. Adherence to university guidelines is mandatory.",
      "Judgment Criteria: Creativity, originality, humor, and relevance to the theme will be evaluated and scored by the judges.",
      "Malpractice: Any form of plagiarism, pre-prepared memes, or use of unauthorized gadgets will result in instant disqualification.",
    ],
    capacity: "15 participants overall (1 participant per college)",
    timeLimit: "15 minutes",
    open: false,
    cashPrize: 2000,
    eventHeadName: "Satyam",
    eventHeadNumber: "+91 96634 69507",
  },
  {
    title: "Battle of Bands",
    date: "",
    venue: "",
    image:
      "https://i.pinimg.com/originals/95/e3/ed/95e3ed74aa66610a2bea7c58245b6fdd.gif",
    description:
      "A thrilling musical competition where college bands battle it out with electrifying performances.",
    rating: 0,
    registrationFee: 2000,
    rules: [
      "Total entry: 15 (first come, first serve basis).",
      "It is not an open event. Entry is restricted to college students, including SJU.",
      "SJU Bands: Maximum of 3 bands only (first come, first serve basis).",
      "Number of members in a team: 4 to 8.",
      "Total time for performance: 8 minutes stage performance, 2 minutes setup.",
      "Only drum kits will be provided. Participants should bring other instruments.",
      "Both western and Indian songs can be performed.",
      "Participants can represent only one band. If seen in multiple bands, the team will be disqualified.",
      "No use of vulgar language; participants will be disqualified for violations.",
      "Original music is appreciated.",
      "Judges' decision will be final.",
    ],
    capacity: "15 bands (4-8 members per band)",
    timeLimit: "8 minutes stage performance + 2 minutes setup",
    open: true,
    cashPrize: 15000,
    eventHeadName: "Karim",
    eventHeadNumber: "+91 81470 12753",
  },
  {
    title: "Improv",
    date: "",
    venue: "",
    image:
      "https://www.ere.net/_next/image?url=https%3A%2F%2Fapi.eremedia.com%2Fwp-content%2Fuploads%2F2018%2F06%2Fimprov.jpg&w=1200&q=75",
    description:
      "A dynamic and spontaneous event where teams create entertaining and unpredictable skits based on random prompts.",
    rating: 3,
    registrationFee: 300,
    rules: [
      "No of Participants: Two Members Per Team.",
      "Participants will receive random scenarios, characters, or themes with only a few moments to prepare, resulting in anything from hilarious skits to thought-provoking scenes.",
      "Whether you’re an experienced performer or trying improv for the first time, this event is all about fun, creativity, and spot brilliance.",
      "With audience participation adding an extra twist, every performance promises to be uniquely exciting and unpredictable!",
    ],
    capacity: "Two members per team",
    timeLimit: "As per event structure",
    open: false,
    cashPrize: 2000,
    eventHeadName: "Gnana",
    eventHeadNumber: "+91 94486 15863",
  },
  {
    title: "Face Painting",
    date: "",
    venue: "",
    image:
      "https://media.gettyimages.com/id/1419740490/video/happy-halloween-mother-paint-little-girls-face-makeup-applied-for-trick-or-treating-for.jpg?s=640x640&k=20&c=EuqSy19bgc_yGyZFXKR4CTIqEFYkfyrqCOK0Lz8vNZs=",
    description:
      "A creative event where participants showcase their artistic skills by painting faces inspired by cultural elements, traditions, or landmarks worldwide.",
    rating: 3,
    registrationFee: 300,
    rules: [
      "No of Participants: Individual event (The participant should bring along a model with them).",
      "Time Limit: 90 minutes for face painting and 30 minutes for presentation and judging (Total 2 hours).",
      "Participants must showcase their creativity by painting faces inspired by cultural elements, traditions, or landmarks worldwide.",
      "Themes can include iconic global symbols, national festivals, traditional attire, or significant cultural motifs.",
      "All materials must be brought by the participants.",
      "Non-compliance to the theme may result in disqualification.",
      "Only skin-safe, non-toxic paints should be used. Organisers are not responsible for any skin allergies or reactions.",
      "Face paintings will be judged based on their creativity, detailing, and relevance to the theme and presentation.",
    ],
    capacity: "Individual event (1 participant with a model)",
    timeLimit: "2 hours (90 minutes for painting + 30 minutes for judging)",
    open: false,
    cashPrize: 2000,
    eventHeadName: "Surabhi",
    eventHeadNumber: "+91 96204 55780",
  },
  {
    title: "Murder Mystery",
    date: "",
    venue: "",
    image: "https://www.indigoextra.com/web/images/murder-mystery(1).webp",
    description:
      "An engaging trio event where teams solve ciphers, compete in a treasure hunt, and use detective skills to unravel mysteries.",
    rating: 3,
    registrationFee: 300,
    rules: [
      "No of Participants: Trio Event (1 registration per college).",
      "Total Teams Allowed: Maximum 1 team per college, 10 teams in total.",
      "Teams will have to solve ciphers, compete in a treasure hunt, and use their detective skills to figure out clues and mysteries along the way.",
      "Teams will be eliminated round-wise.",
      "Malpractice or any use of gadgets unless instructed will lead to instant disqualification.",
    ],
    capacity: "3 members per team, 10 teams in total",
    timeLimit: "As per event structure",
    open: false,
    cashPrize: 2000,
    eventHeadName: "Isha",
    eventHeadNumber: "+91 95918 59161",
  },
  {
    title: "Solo Instrumental",
    date: "",
    venue: "",
    image:
      "https://cdn.pixabay.com/animation/2023/04/06/23/17/23-17-32-365_512.gif",
    description:
      "A platform for solo musicians to showcase their technical skills and creativity through live instrumental performances.",
    rating: 3,
    registrationFee: 300,
    rules: [
      "No of Participants: Individual event.",
      "Time Limit: 3+1 minutes.",
      "Participants must carry their instruments.",
      "A drum kit and keyboard will be provided.",
      "Backing tracks are not allowed.",
      "Loop pedals and effects are permitted if they are operated live by the participant.",
      "An original composition is welcomed.",
      "No profanities will be tolerated.",
      "Contestants will be evaluated on Technical Skill, Creativity and Originality, Stage Presence, Musicality, and Time Management.",
    ],
    capacity: "Individual event",
    timeLimit: "3+1 minutes",
    open: false,
    cashPrize: 2000,
    eventHeadName: "Ricky",
    eventHeadNumber: "+91 97257 58959",
  },
  {
    title: "DJ Wars",
    date: "",
    venue: "",
    image:
      "https://i0.wp.com/jasminpatterson.com/wp-content/uploads/2018/05/What-Acting-Like-The-World-Really-Means-5.21.18.jpg?w=1920&ssl=1",
    description:
      "A thrilling competition where DJs showcase their original mixes and battle for the ultimate title.",
    rating: 4,
    registrationFee: 400,
    rules: [
      "Number of Participants: Individual Participation.",
      "Time Limit: 10+2 minutes.",
      "Original mixes only. No premixes allowed.",
      "No profanity in the samples.",
      "Standard CDJ 3000 and DJM 900 mixers will be provided.",
    ],
    capacity: "Individual participation",
    timeLimit: "10+2 minutes",
    open: false,
    cashPrize: 3000,
    eventHeadName: "Meghna",
    eventHeadNumber: "+91 63640 56622",
  },
  {
    title: "Indian Classical Solo Singing",
    date: "",
    venue: "",
    image:
      "https://indianewengland.com/wp-content/uploads/2018/03/Kaushiki_Chakraborty-LQ-e1522282105483.jpg",
    description:
      "A classical music event where participants showcase their vocal skills in Hindustani or Carnatic music.",
    rating: 4,
    registrationFee: 400,
    rules: [
      "No of Participants: Individual Participation.",
      "Time Limit: 3+1 minutes.",
      "Both Hindustani and Carnatic music are allowed.",
      "The use of electronic tanpura and electronic tabla is permitted (use of mobile applications for the same is allowed).",
      "Following the time limit is mandatory.",
      "One accompanying classical instrumentalist is permitted (this will not be given any extra consideration or points).",
    ],
    capacity: "Individual participation",
    timeLimit: "3+1 minutes",
    open: false,
    cashPrize: 3000,
    eventHeadName: "Anagha",
    eventHeadNumber: "+91 91082 20057",
  },
  {
    title: "Western Solo Music",
    date: "",
    venue: "",
    image:
      "https://www.careersinmusic.com/wp-content/uploads/2018/11/singing-competition.jpg",
    description:
      "A solo singing competition where participants perform English songs, showcasing their vocal prowess.",
    rating: 4,
    registrationFee: 400,
    rules: [
      "No of Participants: Individual Participation.",
      "Time Limit: 3+1 minutes.",
      "The song must be performed in English.",
      "Instrumental accompaniment is permitted.",
      "Use of backing tracks is strictly prohibited.",
      "The use of vulgar or inappropriate language is not allowed.",
      "Contestants will be evaluated solely based on their vocal performance.",
    ],
    capacity: "Individual participation",
    timeLimit: "3+1 minutes",
    open: false,
    cashPrize: 3000,
    eventHeadName: "Rose",
    eventHeadNumber: "+91 86606 24338",
  },
  {
    title: "Indian Solo Singing",
    date: "",
    venue: "",
    image:
      "https://i0.wp.com/www.socialnews.xyz/wp-content/uploads/2023/03/23/9af842f4d6651f8e1238cb1a7686a4d1.jpg?fit=1999%2C1413&quality=80&zoom=1&ssl=1?v=1679584024",
    description:
      "A solo singing competition where participants perform Indian songs based on specific themes, showcasing their vocal talent and creativity.",
    rating: 4,
    registrationFee: 400,
    rules: [
      "No of Participants: Individual Participation.",
      "Time Limit: 3+1 minutes.",
      "Participants will have to sing a song based on one of the following themes: 'Nature', 'Adipoli', or 'Retro (1980s-90s)'.",
      "Themes will be allotted to participants, at random, 3 days prior to the event.",
      "Songs must belong to Indian languages (any) and genres only.",
      "Those performing their original compositions needn't follow the themes.",
      "One accompanying instrumentalist is allowed.",
      "Use of Karaoke is not permitted.",
      "Use of tanpura is allowed.",
      "Following the time limit is mandatory.",
      "Pro-tip: A unique choice of song based on the theme may earn you brownie points!",
    ],
    capacity: "Individual participation",
    timeLimit: "3+1 minutes",
    open: false,
    cashPrize: 3000,
    eventHeadName: "Niha",
    eventHeadNumber: "+91 73496 27355",
  },
  {
    title: "Art",
    date: "",
    venue: "",
    image:
      "https://th.bing.com/th/id/OIP.ZB6Icf7u5qEgVZfkWwZyiQHaE7?rs=1&pid=ImgDetMain",
    description: "",
    rating: 3,
    rules: [
      "Traditional mediums only (i.e watercolours, pencils, paints)",
      "Digital medium is NOT allowed",
      "Bring your own material",
      "The topic will be given on the spot (be well prepared)",
      "References are permitted but should not be copied to the dot",
      "Artworks judged on Overall creativity, Adherence to the topic given, Aesthetic value",
    ],
    registrationFee: 300,
    open: false,
    cashPrize: 2000,
    capacity: "Individual participation",
    eventHeadName: "Ved",
    eventHeadNumber: "+91 86980 62091",
  },
  {
    title: "Minute to Win It",
    date: "",
    venue: "",
    image:
      "https://d8it4huxumps7.cloudfront.net/uploads/images/opportunity/mobile_banner/6540c1859cbc2_just-a-minute-competition.png",
    description: "",
    rating: 3,
    rules: [],
    registrationFee: 300,
    open: false,
    cashPrize: 2000,
    eventHeadName: "Suhotra",
    eventHeadNumber: "+91 94330 46441",
  },
  {
    title: "Photography",
    date: "",
    venue: "",
    image: "https://cdn.mos.cms.futurecdn.net/gvQ9NhQP8wbbM32jXy4V3j.jpg",
    description: "",
    rating: 3,
    rules: [],
    registrationFee: 300,
    open: false,
    cashPrize: 2000,
    eventHeadName: "Dhanush",
    eventHeadNumber: "+91 88670 52135",
  },
  {
    title: "Western Solo Dance",
    date: "",
    venue: "",
    image: westernSolo,
    description: "",
    rating: 4,
    rules: [],
    registrationFee: 400,
    open: false,
    cashPrize: 3000,
    eventHeadName: "Ananya",
    eventHeadNumber: "+91 99167 85410",
  },
  {
    title: "Council Wars",
    date: "",
    venue: "Main Stage",
    image:
      "https://www.careeraddict.com/uploads/article/60560/student-life-school-council-campaign.png",
    description: "",
    rating: 5,
    rules: [
      "Only one team per college is allowed to participate.",
      "Only Council members, Secretaries and Office bearers of the respective colleges are allowed to participate.",
      "The rounds will be given by the judges on spot.",
      "Props and musical instruments are allowed.",
      "If teams require any tracks to be played during their performances, it must be submitted to the event heads at least one hour before the event.",
      "Personal attacks, abusive language, vulgarity, and hurting religious and political controversies during the performance will lead to immediate disqualification.",
    ],
    registrationFee: 1000,
    capacity: "6-8 members",
    open: false,
    cashPrize: 5000,
    eventHeadName: "Ajay",
    eventHeadNumber: "+91 94803 19848",
  },
  {
    title: "Pro Night - Day 1",
    description:
      "Experience an electrifying night of music and dance on Day 1 of Visages. Special student DJ performances and professional DJ set.",
    image: "https://img.freepik.com/premium-photo/dj-club-with-party-peopleai-generative_46383-955.jpg",
    registrationFee: 500,
    venue: "University Ground",
    timeLimit: "5:00 PM - 07:30 PM",
    date: "February 21 2025",
    rating: 0,
    open: true,
    rules: [
      "Valid college ID card is mandatory",
      "Entry restricted to 18+ only",
      "No unauthorized photography",
      "Special discount available when booking both days",
    ],
    eventHeadName: "Anjali",
    eventHeadNumber: "+91 96566 47656",
  },
  {
    title: "Pro Night - Day 2",
    description:
      "The grand finale night of Visages 2025! Join us for an unforgettable evening of music, dance, and celebration.",
    image: "https://img.freepik.com/premium-photo/dj-playing-mixing-music-nightclub-party-night-edm-dance-music-club-with-crowd_457222-1500.jpg",
    registrationFee: 500,
    venue: "University Ground",
    timeLimit: "5:00 PM - 07:30 PM",
    date: "February 22, 2025",
    rating: 0,
    open: true,
    rules: [
      "Valid college ID card is mandatory",
      "Entry restricted to 18+ only",
      "No unauthorized photography",
      "Special discount available when booking both days",
    ],
    eventHeadName: "Anjali",
    eventHeadNumber: "+91 96566 47656",
  },
];

export type ComboOffer = {
  events: string[];
  originalPrice: number;
  offerPrice: number;
  title: string;
  description: string;
};

export const comboOffers: ComboOffer[] = [
  {
    title: "Pro Night Combo Pass",
    description: "Access to Pro Night on both days of Visages 2025",
    events: ["Pro Night - Day 1", "Pro Night - Day 2"],
    originalPrice: 1000,
    offerPrice: 800,
  },
];
