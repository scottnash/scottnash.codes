/* eslint-disable linebreak-style */
const projectData = [
  {
    title: 'Kinship',
    description: 'I am the lead architect and UI engineer for Kinship, a mobile app and website developed in React Native and React, respectively. The app serves as a personal relationship manager, assisting users in developing and maintaining connections with friends, family, and business associates. It interfaces with a backend API for data loading and storage while seamlessly interacting with the device, integrating features such as calendar, contacts, camera, photo library, and more. Kinship is compatible with iOS, Android, and web platforms.',
    url: 'https://www.heykinship.com/',
    mobileImage: 'kinship-mobile.png',
    desktopImage: 'kinship-desktop.png',
    active: true
  },
  {
    title: 'Clay CMS',
    description: 'Clay is the interactive CMS that enables editors to create and edit articles and other content for New York Magazine\'s suite of sites, developed in-house. The UI was constructed using Vue.js, complemented by a Node.js backend. I played a key role as a team member, responsible for maintaining and enhancing the functionalities of the CMS.',
    url: 'https://clay.nymag.com/',
    desktopImage: 'clay-desktop.gif',
    active: true
  },
  {
    title: 'BMW - Build Your Own',
    description: 'I served as the lead front-end engineer for a website that enabled visitors to customize their own BMW on BMW\'s website. Developed using Angular on the frontend and AEM as the CMS, the site seamlessly interacts with a sophisticated backend through a series of API calls. These calls dynamically update various options based on user selections and configuration rules as the user progresses through the creation process.',
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
    url: 'http://www.storageconfiguration.com/lista/configuration',
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
    title: 'DateTracker',
    description: 'After searching for a date-tracking app and seeeing what was available, I decided to create my own using React Native. As the sole architect, designer, and engineer, I crafted DateTracker for both iOS and Android. This versatile app lets you count down to or track days since specific events or habits, manually or by importing from your calendar. For quick access, you can add the most important date as widget on your home screen.',
    url: 'https://apps.apple.com/us/app/datetracker/id6466183057',
    desktopImage: 'daytracker-mobile.png',
    active: true
  },
  {
    title: 'Three Movie Buffs',
    description: 'I single-handedly engineered a movie review website using a custom PHP/MYSQL CMS. Contributing one-third of the movie reviews, I was also an active member of the New York Film Critics Online society, attending press screenings and conducting celebrity interviews. The website is now archived as flat HTML pages.',
    url: 'http://www.threemoviebuffs.com/',
    mobileImage: 'threemoviebuffs-mobile.jpg',
    desktopImage: 'threemoviebuffs-desktop.jpg',
    active: true
  },
  {
    title: 'Celebrity Concentration',
    description: 'Remember the old Concentration card game? Well, brace yourself for the celebrity edition, where memory meets the red carpet! It\'s like the Oscars for your brain, but with cards. Ready to exercise those memory muscles and match the faces of stars? Let the games begin! This game was built using React and images taken from my movie review website threemoviebuffs.com.',
    url: 'https://scottnash.codes/concentration/',
    mobileImage: 'celebrity-concentration-mobile.jpg',
    desktopImage: 'celebrity-concentration-desktop.jpg',
    active: true
  },
  {
    title: 'Name that Movie',
    description: 'Get set for a cinematic brain teaser! Dive into a movie guessing game, where you have to guess the hidden movie. With a few clever clues and VueJS magic, it\'s your own film detective agency in a digital nutshell!',
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
