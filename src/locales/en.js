export default {
  translation: {
    about: {
      title: 'About',
      subtitle: 'About me',
      aboutMe: [
        `Hello, I'm Natalia. As a C# developer I used to spend a lot of time developing desktop applications, and my favorite part
        was creating smart and functional user interfaces with Win Forms. During the parental leave I decided to completely change my specialisation
        and dive into absolutely new for me exciting world of front-end web development. Thus I've been taking courses and do my best to obtain best practices
        of the modern fron-end development. It turned out to be more difficult than I expected
        (much more difficult, actually :), but I'm enthusiastic about developing and improving this skills. I'm responsible, open-minded and friendly,
        and I truly like to gain knowleage.`,
        `I am from Moscow, Russia. In August 2018 I relocated to Brno, Czech Republic with my family. I'm learning Czech language with great interest,
        my current language level is B1.`,
        `In my spare time I do something from the list below or just to relax with my family.`,
      ],
      hobbies: [
        'painting',
        'craft and decoration',
        'planting',
        'travelling',
        'cycling and hiking',
        'photography',
        'cooking and food garnishing',
        'playing piano',
        'birdwatching',
      ],
      aboutGallery: '',
    },
    experience: {
      title: 'Experience',
      subtitle: 'Education and experience',
      job: {
        title: 'Experience',
        name: 'Research and Developing Institute Kvant',
        responsibilities: 'Responsibilities',
        responsibilitiesList: [
          'developing different parts of the big data processing system',
          'creating Windows desktop applications using DevExpress WinForms components',
          'working with Microsoft SQL Server',
        ],
      },
      institute: {
        title: 'Education',
        name: 'Moscow Aviation Institute',
        degree: 'Specialist, Applied Mathematics, Programming'
      },
      courses: {
        title: 'Courses',
      },
    },
    projects: {
      title: 'Projects',
      subtitle: 'My front-end projects',
      frameworks: 'Frameworks and technologies',
      rss: {
        title: 'RSS aggregator',
        subtitle: 'Simple RSS aggregator',
        description: `Web application for browsing posts from added rss-feeds.
          Checking if input url is valid and hasn't already added. Automatic reloading of  rss-sources.`,
        use: ['jquery', 'promises', 'webpack', 'axios', 'validation with yup', 'bootstrap', 'eslint', 'CORS proxy', 'internationalization with i18next'],

      },
      gendiff: {
        title: 'Gendiff',
        subtitle: 'Console utility',
        description: `Simple console utility for comparing two versions of configuration files.
          Supports different kind of file: json, ini, yml.
          The result could be output in simple text form, verbose text form or as json.`,
        use: ['make', 'babel', 'TDD', 'writing tests with Jest', 'creating node package'],
      },
      memoji: {
        title: 'Memoji game',
        subtitle: 'Memory card game with emojis',
        description: 'Just vanilla Javascript and CSS :) Interaction with help of CSS animation.',
        use: '',
      },
      chat: {
        title: 'Chat',
        subtitle: 'Simple messenger',
        description: `Web application for a chat, an analog of slack. Users can add, delete, and rename message channels and send messages on every channel.
          The full system state stores in Redux. For getting new messages uses websockets.`,
        use: ['websockets with socket.io', 'React', 'Redux', 'Redux-toolkit', 'React Form with formik', 'Bootstrap on React', 'webpack', 'eslint'],
      },
      portfolio: 'This webpage sources could be found on GitHub as well',
    },
    contacts: {
      title: 'Contacts',
      subtitle: 'My contants',
      email: 'E-mail',
    },
  }
}