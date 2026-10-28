/* eslint-disable linebreak-style */
const projectData = [
  {
    title: 'Weather Then',
    description: 'Weather Then is an app I designed and built on my own that answers a question most weather apps can\'t: is this weather actually unusual for where I live? It puts today\'s forecast beside decades of NOAA climate history for your location, so you can see how today, this season, and this year stack up against the local record. The app is built with Expo and React Native in TypeScript, with Skia-powered charts and home screen widgets on both iOS and Android. Behind it is an API I wrote in Python with FastAPI and Postgres that serves historical NOAA GHCN-Daily data from roughly 19,000 U.S. weather stations, while live conditions and forecasts come from Open-Meteo. Weather Then is available on the App Store and Google Play.',
    url: 'https://weather-then.com/',
    mobileImage: 'weather-then-mobile.png',
    desktopImage: 'weather-then-desktop.png',
    active: true
  },
  {
    title: 'Unchained Audio Player',
    description: 'Unchained Audio Player is an app I built for listening to audio files you already own — music, audiobooks, and anything else — without being tied to a streaming service or subscription. You import files from the Files app, and it organizes them into a library of tracks, albums, and artists that you can sort and search, with custom artwork from your photo library. Audiobooks pick up right where you left off on every track, and the player includes playback speed, a sleep timer, shuffle, and a queue. It is built with Expo and React Native in TypeScript, using expo-audio and a custom native module for the iOS audio session so playback keeps going in the background, SQLite for the library, Redux Toolkit for state, and NativeWind for styling. It adapts its layout to iPhone, iPad, and the folding iPhone Duo.',
    url: 'https://apps.apple.com/us/app/unchained-audio-player/id6738159048',
    mobileImage: 'unchained-audio-mobile.png',
    desktopImage: 'unchained-audio-desktop.png',
    active: true
  },
  {
    title: 'DateTracker',
    description: 'This is an app I originally built for my own use when I saw what was available in the App Store and decided I could build something better. It counts down to or up from the dates that matter to you, shows the count in days or in years, months, and days, can repeat a date every year, and puts your most important date in a home screen widget. In 2026 I rebuilt it from the ground up with Expo and React Native\'s New Architecture, with a redesigned interface and a native SwiftUI widget, while making sure every existing user\'s saved dates carried over through the update. DateTracker is available for iPhone and iPad on the App Store.',
    url: 'https://apps.apple.com/us/app/datetracker/id6466183057',
    mobileImage: 'datetracker-mobile.png',
    desktopImage: 'datetracker-desktop.png',
    active: true
  },
  {
    title: 'Walmart Global Tech',
    description: 'As a Senior Software Engineer at Walmart Global Tech, I work within the Walmart Careers department — the recruiting arm of the world\'s largest private employer, processing millions of job applications annually. My work is focused on building and improving the tools that power Walmart\'s hiring process. I contributed to two standalone web applications — one for recruiters to schedule interviews, provide feedback, and manage the interview process, and another with similar functionality tailored for recruiting coordinators. More recently, I have been part of the effort to integrate this interview flow into campus.walmart.com, Walmart\'s internal employee platform, bringing hiring manager and interviewer functionality — including requisition tracking, interview scheduling, and post-interview feedback — directly into a single unified experience. campus.walmart.com is built as both a website and a mobile app using React Native and React Native Web, with GraphQL powering the data layer. I have also mentored junior developers throughout these projects.',
    mobileImage: 'walmart_mobile.png',
    desktopImage: 'walmart_desktop.png',
    active: true
  },
  {
    title: 'Kinship',
    description: 'I was the lead architect and UI engineer for Kinship, a mobile app and website developed in React Native and React, respectively. The app serves as a personal relationship manager, assisting users in developing and maintaining connections with friends, family, and business associates. It interfaces with a backend API for data loading and storage while seamlessly interacting with the device, integrating features such as calendar, contacts, camera, photo library, and more. Kinship is compatible with iOS, Android, and web platforms.',
    mobileImage: 'kinship-mobile.png',
    desktopImage: 'kinship-desktop.png',
    active: true
  },
  {
    title: 'Clay CMS',
    description: 'Clay is the interactive CMS that enables editors to create and edit articles and other content for New York Magazine\'s suite of sites, developed in-house. The UI was constructed using Vue.js, complemented by a Node.js backend. I was one of several engineers responsible for maintaining and enhancing the functionalities of the CMS.',
    url: 'https://clay.nymag.com/',
    desktopImage: 'clay-desktop.gif',
    active: true
  },
  {
    title: 'BMW - Build Your Own',
    description: 'I served as the lead front-end engineer for a website that enabled visitors to customize their own BMW on BMW\'s website. Developed using Angular on the frontend and with AEM as the CMS, the site interacts with the backend through a series of API calls. These calls dynamically update various options based on user selections and configuration rules as the user progresses through the creation process.',
    url: 'https://www.bmwusa.com/byo',
    mobileImage: 'bmw-mobile.jpg',
    desktopImage: 'bmw-desktop.jpg',
    active: true
  },
  {
    title: 'BMW - Mobile Site',
    description: 'Before bmwusa.com underwent conversion into a fully responsive site, I was a part of the team that constructed m.bmwusa.com—a streamlined, mobile-only version of the BMW website. This mobile platform included features such as Build Your Own (BYO), Dealer Locator, Contact a Dealer, along with general information and promotional pages. The site was developed as a single-page application using an in-house framework built with vanilla JavaScript.',
    mobileImage: 'bmw-mobile-mobile.jpg',
    active: false
  },
  {
    title: 'Lista Cabinet Configurator',
    description: 'I served as the lead React/Redux developer for the cabinet configurator, taking charge of coding the dashboard, managing all form interactions, and orchestrating the seamless transfer of data between the backend and the Three.js visualization app. This application empowered users to intricately design their cabinets with precision and ease.',
    mobileImage: 'lista-mobile.jpg',
    desktopImage: 'lista-desktop.jpg',
    active: true
  },
  {
    title: 'Pods',
    description: 'I spearheaded the reconstruction of the Pods website as the lead front-end engineer. Leveraging Sitecore on the back-end, I developed multiple modules within the site. Notably, I engineered the Get a Quote process using React/Redux, interacting with two distinct back-end services to ensure accurate and efficient data delivery to users.',
    url: 'https://www.pods.com/',
    mobileImage: 'pods-mobile.jpg',
    desktopImage: 'pods-desktop.jpg',
    active: true
  },
  {
    title: 'Three Movie Buffs',
    description: 'I was the sole engineer on a movie review website that ran for many years using a custom PHP/MYSQL CMS. Contributing one-third of the movie reviews, I was also an active member of the New York Film Critics Online society, attending press screenings and conducting celebrity interviews. The website is now archived as flat HTML pages.',
    url: 'http://www.threemoviebuffs.com/',
    mobileImage: 'threemoviebuffs-mobile.jpg',
    desktopImage: 'threemoviebuffs-desktop.jpg',
    active: true
  },
  {
    title: 'Celebrity Concentration',
    description: 'This was a game I built for my movie review website threemoviebuffs.com in React, which uses images of celebrities taken from that site to make up the faces of the cards in this celebrity version of the classic memory card game.',
    url: 'https://scottnash.codes/concentration/',
    mobileImage: 'celebrity-concentration-mobile.jpg',
    desktopImage: 'celebrity-concentration-desktop.jpg',
    active: true
  },
  {
    title: 'Name that Movie',
    description: 'This was another game written for threemoviebuffs.com, this time using Vue.js. The game presents a hidden movie still and asks the user to identify the movie by removing random squares to reveal more of the image. The fewer squares removed, the more points the user earns.',
    url: 'https://scottnash.codes/name-that-movie/#/',
    mobileImage: 'name-that-movie-mobile.jpg',
    desktopImage: 'name-that-movie-desktop.jpg',
    active: true
  },
  {
    title: 'Beautyrest - Mattress Selector',
    description: 'I was one of two developers involved in the creation of this visually engaging website that guides visitors through the mattress selection process. The interactive experience involves asking users a series of questions about their sleeping habits, animated for an immersive journey. The website was built using React and Redux.',
    mobileImage: 'beautyrest-mobile.jpg',
    desktopImage: 'beautyrest-desktop.jpg',
    active: false
  },
  {
    title: 'Fruit2Day',
    description: 'I served as the lead engineer for a fruit-infused beverage website. I developed a rudimentary CMS using PHP and MySQL, enabling an admin to input details about different fruit drink flavors. I also built out the front end that accessed the data and displayed the flavors in a promotional site.',
    desktopImage: 'fruit2day.jpg',
    active: false
  },
  {
    title: 'Justin Bieber - Someday',
    description: 'I served as the lead front-end engineer for a site promoting and selling Justin Bieber\'s fragrance \'Someday,\' along with other related merchandise.',
    desktopImage: 'justinbieber-mobile.jpg',
    active: false
  },
  {
    title: 'The Prostate Czech',
    description: 'A site I constructed for the Prostate Cancer Foundation as part of their effort to raise awareness for prostate cancer and encourage men to get checked. The site was recognized as a 16th Annual Webby Award Honoree.',
    mobileImage: 'czech-site-mobile.jpg',
    desktopImage: 'czech-site-desktop.jpg',
    url: 'https://www.youtube.com/watch?v=_653fwqWSRA',
    active: false
  },
  {
    title: 'Puma - Factory',
    description: 'I was one of several front-end engineers on the team that built Puma\'s \'Design Your Own Puma\' site. Through this platform, visitors could personalize their shoes by selecting various components and choosing colors. The site was developed using React.',
    desktopImage: 'puma-desktop.jpg',
    active: false
  },
  {
    title: 'Vanguard - Life Ticker',
    description: 'A promotional site I constructed using Vanilla JavaScript that enables users to create a \'ticker,\' emphasizing aspects they want more or less of in their life. The platform guides them to explore investment opportunities with Vanguard to enhance the positive aspects. Additionally, users could easily share their customized \'ticker\' on social media.',
    desktopImage: 'vanguard-desktop.jpg',
    active: false
  }
];

export default projectData;
