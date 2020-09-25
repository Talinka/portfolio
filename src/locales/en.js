export default {
  translation: {
    about: {
      title: 'About',
      aboutTitle: 'About me',
      aboutDescription: [
        `Hello, I'm Natalia. As a C# developer I used to spend a lot of time developing desktop applications, and my favorite part
        was creating smart and functional user interfaces with Win Forms. During the parental leave I decided to completely change my specialisation
        and dive into absolutely new for me exciting world of front-end web development.`,
        `Thus I've been taking courses and doing my best to obtain best practices
        of the modern front-end development. It has turned out to be more difficult than I expected
        (much more difficult, actually :), but I'm enthusiastic about developing and improving these skills. I'm responsible, open-minded and friendly,
        and I truly like to gain knowledge.`,
        `I am from Moscow, Russia. In August 2018 I relocated to Brno, Czech Republic with my family. I'm learning the Czech language with a great interest,
        my current language level is B2.`,
      ],
      hobbyTitle: 'Hobbies',
      hobbyDescription: 'In my spare time I do something from the list below or just relax with my family.',
      hobbies: [
        'painting',
        'craft and decoration',
        'gardening',
        'travelling',
        'cycling and hiking',
        'photography',
        'food garnishing',
        'playing piano',
        'birdwatching',
      ],
      contactTitle: 'Contacts',
      contactDescription: `I'm currently available for full-time work. If you're
        interested in working with me, please get in touch using one of the method below.`,
      contactDirect: 'Contact me directly',
      contactSocial: 'Social networks',
    },
    experience: {
      title: 'Experience',
      subtitle: 'Education and experience',
      job: {
        title: 'Experience',
        name: 'Research and Development Institute Kvant',
        responsibilities: 'Responsibilities',
        responsibilitiesList: [
          'developing different modules for stream processing and clustering data in the big dataflow system',
          'creating Windows desktop tools using DevExpress WinForms components for pipeline controlling and configuration',
          'registering, storing and manipulating the information elements of our system using Microsoft SQL Server database',
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
      subtitle: 'My projects',
      description: `These projects were created during my studying in order to obtain the main front-end technologies.
        All the projects could be found on GitHub.`,
      frameworks: 'Frameworks and technologies',
      rss: {
        title: 'RSS aggregator',
        subtitle: 'Simple RSS aggregator',
        description: `Web application for browsing posts from added rss-feeds.
          Checks if input url is valid and hasn't already been added. Automatically reloads rss-sources.`,
        use: ['JQuery', 'Promises', 'webpack', 'axios', 'validation with Yup', 'Bootstrap', 'ESLint', 'CORS proxy', 'internationalization with i18next'],

      },
      gendiff: {
        title: 'Gendiff',
        subtitle: 'Console utility',
        description: `Simple console utility for comparing two versions of configuration files.
          Supports different file formats: json, ini, yml.
          The result could be output in simple text form, verbose text form or as json.`,
        use: ['make', 'babel', 'TDD', 'writing tests with Jest', 'creating node package'],
      },
      memoji: {
        title: 'Memoji game',
        subtitle: 'Memory card game with emojis',
        description: 'Just vanilla JavaScript and CSS :) For interaction the application uses CSS animation.',
        use: '',
      },
      chat: {
        title: 'Chat',
        subtitle: 'Simple messenger',
        description: `Chat web application, an analog of Slack. Users can add, delete, and rename message channels and send messages on every channel.
          The full system state is stored in Redux. For real time messages synchronization application uses WebSockets.`,
        use: ['WebSockets with Socket.IO', 'React', 'Redux', 'Redux-toolkit', 'React Form with Formik', 'Bootstrap on React', 'webpack', 'ESLint'],
      },
      portfolio: {
        info: `This webpage is also my front-end project where I used the knowledge I got learnt.`,
        link: 'Its sources could be found on GitHub as well',
        description: 'Technologies and frameworks I used:',
        use: [
          { tech: 'React', goal: 'as a main framework' },
          { tech: 'React router', goal: 'for web page navigation' },
          { tech: 'i18next and react-i18next', goal: 'for the Czech version' },
          { tech: 'Bootstrap on React', goal: 'for responsive design' },
          { tech: 'SASS', goal: 'for creating the animation' },
          { tech: 'GitHub pages', goal: 'for deploy' },
        ],
      },
    },
  }
}