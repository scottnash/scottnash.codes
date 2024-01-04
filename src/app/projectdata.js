/* eslint-disable linebreak-style */
const projectData = [
  {
    title: 'Beautyrest - Mattress Selector',
    description: 'One of two developers who worked on this highly visual website that walked visitors through the selection of their mattress by asking them an assortment of questions relating to their sleeping habits using animation. It was built using React & Redux.',
    mobileImage: 'beautyrest-mobile.jpg',
    desktopImage: 'beautyrest-desktop.jpg',
    active: false
  },
  {
    title: 'BMW - Build Your Own',
    description: 'I was the lead front end engineer for a site that allowed visitors to BMW\'s website to configure their own BMW online. Written in Angular on the Frontend, with AEM as the CMS, the site interacts with a complex backend using a series of API calls to update all the various options based on user selections and configuration rules as the user moved through the creation process.',
    url: 'https://www.bmwusa.com/byo',
    mobileImage: 'bmw-mobile.jpg',
    desktopImage: 'bmw-desktop.jpg',
    active: true
  },
  {
    title: 'BMW - Mobile Site',
    description: 'Before bmwusa.com was converted to a fully responsive site, I was part of the team who built m.bmwusa.com, a stripped down, mobile only version of the BMW website that included a BYO, Dealer Locator, Contact a Dealer, as well as general information and promo pages.  It was built as a single page application using a framework developed in-house using vanilla JavaScript.',
    mobileImage: 'bmw-mobile-mobile.jpg',
    active: false
  },
  {
    title: 'Celebrity Concentration',
    description: 'A concentration card game game I wrote in Rect just for the fun of it to test your memory using images of celebrities.',
    url: 'https://scottnash.codes/concentration/',
    mobileImage: 'celebrity-concentration-mobile.jpg',
    desktopImage: 'celebrity-concentration-desktop.jpg',
    active: true
  },
  {
    title: 'Clay CMS',
    description: 'Clay is the interactive CMS that allows editors to create and edit articles and other content for New York Magazine\'s suite of sites that was developed in-house. The UI was built with VueJS, with a backend written in NodeJS. I was a member of the team maintaining and expanding the capabilities of the CMS.',
    url: 'https://clay.nymag.com/',
    desktopImage: 'clay-desktop.gif',
    active: true
  },
  {
    title: 'DateTracker',
    description: 'When I was in need of an app to track a date for my own personal use, I searched the app store for one, but after looking at waht was available I deced that I could build something just as good as any that are available, so I decided to write my own.  I was the sole architect/designer/engineer on it.  The app is written in React Native and runs on iOS as well as Android. DateTracker allows you to track the number of days since or until a certain date. You can use it to countdown to a special event (Christmas, anniversary, moving day, graduation, etc.) or to track how long it has been since a certain day, such as positive habits like how long since you quit smoking, started a diet or any other streak you\'d like to track You can enter the dates to track manually or import them from your calendar. You can add the most important date as a widget to your home screen to keep it front and center.',
    url: 'https://apps.apple.com/us/app/datetracker/id6466183057',
    desktopImage: 'daytracker-mobile.png',
    active: true
  },
  {
    title: 'Fruit2Day',
    description: 'I was the lead engineer for this fruit in a drink site. I built a basic CMS using PHP and mySQL that allowed an admin to enter details about the various flavors of fruit drinks.  I also built out the front end that accessed the data and displayed the flavors in a promotional site.',
    desktopImage: 'fruit2day.jpg',
    active: false
  },
  {
    title: 'Justin Bieber - Someday',
    description: 'I was the lead front end engineer for this site that promoted and sold Justin Bieber\'s fragrance \'Someday\', along with other related merchandise.',
    desktopImage: 'justinbieber-mobile.jpg',
    active: false
  },
  {
    title: 'Kinship',
    description: 'I am the lead architect and ui engineer for Kinship, a mobile app and website written in React-Native and React, respectively. The app is a personal relationship manager that helps user to develop and maintain their relationships with friends, family, and business associates. It connects to backend api to load and store data, as well as interacting with the device it is running on to connect your calendar, contacts, camera, photo library, etc. It runs on iOS, Android, and the web.',
    url: 'https://www.heykinship.com/',
    mobileImage: 'kinship-mobile.png',
    desktopImage: 'kinship-desktop.png',
    active: true
  },
  {
    title: 'Lista Cabinet Configurator',
    description: 'I was the lead React/Redux developer on the cabinet configurator, responsible for coding the dashboard and all the form interactions as well as the passing of data between the backend and the Three.js visualization app that allowed the user to design their cabinets.',
    url: 'http://www.storageconfiguration.com/lista/configuration',
    mobileImage: 'lista-mobile.jpg',
    desktopImage: 'lista-desktop.jpg',
    active: true
  },
  {
    title: 'Name that Movie',
    description: 'Another game that I wrote just for the fun of it, in which the player has to guess what movie is hidden behind a series of small boxes. This one was written in VueJS.',
    url: 'https://scottnash.codes/name-that-movie/#/',
    mobileImage: 'name-that-movie-mobile.jpg',
    desktopImage: 'name-that-movie-desktop.jpg',
    active: true
  },
  {
    title: 'Pods',
    description: 'I was the lead front end engineer on this rebuild of the Pods website. With Sitecore on the back-end, I built out the various modules on the site, including the Get a Quote process, which was built using React/Redux and interacted with 2 different back-end services to provide the correct data to the user.',
    url: 'https://www.pods.com/',
    mobileImage: 'pods-mobile.jpg',
    desktopImage: 'pods-desktop.jpg',
    active: true
  },
  {
    title: 'The Prostate Czech',
    description: 'A site I built for the Prostate Cancer Foundation as part of their effort to raise awareness for Prostate Cancer and to encourage men to get checked. The site was a 16th Annual Webby Award Honoree.',
    mobileImage: 'czech-site-mobile.jpg',
    desktopImage: 'czech-site-desktop.jpg',
    active: false
  },
  {
    title: 'Puma - Factory',
    description: 'I was one of several front end engineers on the team who built Puma\'s \'Design Your Own Puma\' site. Using it, visitors to the site were able to design their own by choosing various components for their shoes as well as pick their colors. The site was written in React.',
    desktopImage: 'puma-desktop.jpg',
    active: false
  },
  {
    title: 'Three Movie Buffs',
    description: 'This was a movie review website that I was the sole engineer on, building it out using a custom CMS written in PHP/MYSQL. I also wrote one-third of the movie reviews and was a member of the New York Film Critics Online society, attended press screenings and conducted a few celebrity interviews. It is now archived as flat HTML pages.',
    url: 'http://www.threemoviebuffs.com/',
    mobileImage: 'threemoviebuffs-mobile.jpg',
    desktopImage: 'threemoviebuffs-desktop.jpg',
    active: true
  },
  {
    title: 'Vanguard - Life Ticker',
    description: 'A promotional site that I built using Vanilla JavaScript that allowed users to create a \'ticker\' that emphasized the things users wanted more of and less of in their life and which would then lead them to find ways to invest with Vanguard to get more of the positives. It also allowed the user to share their \'ticker\' on social media.',
    desktopImage: 'vanguard-desktop.jpg',
    active: false
  }
];

export default projectData;
