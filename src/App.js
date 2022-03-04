import TimelineView from './components/TimelineView/TimelineView'

import './App.css'

const timelineItemsList = [
  {
    id: 'e681e826-260c-4540-9ee5-f53d0e6ecba0',
    categoryId: 'PROJECT DETAILS',
    title: 'NXT ECOM Application',
    courseTitle: 'Ecom-App',
    description:
      'Learnt how to build dynamic web applications with the React JS library. Comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.',
    duration: '4 days',
    tagsList: [
      {
        id: '94947ad2-f768-11eb-9a03-0242ac130003',
        name: 'Components',
      },
      {
        id: '94947d52-f768-11eb-9a03-0242ac130003',
        name: 'Lists',
      },
      {
        id: '94947e4c-f768-11eb-9a03-0242ac130003',
        name: 'Conditional Rendering',
      },
      {
        id: '94947f14-f768-11eb-9a03-0242ac130003',
        name: 'setState()',
      },
      {
        id: '94948270-f768-11eb-9a03-0242ac130003',
        name: 'Updating Phase',
      },
      {
        id: '94948342-f768-11eb-9a03-0242ac130003',
        name: 'Routing',
      },
      {
        id: '94948400-f768-11eb-9a03-0242ac130003',
        name: 'API Calls',
      },
    ],
  },
  {
    id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
    categoryId: 'PROJECT',
    title: 'Dynamic Responsive Website',
    projectTitle: 'Nxt Trendz',
    description:
      'Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.',
    imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',
    duration: '4 days',
    projectUrl: 'https://ecom-app.vercel.app/login',
  },
  {
    id: 'd80781c3-980e-4ab9-96ca-9ad1a9cdf93d',
    categoryId: 'PROJECT DETAILS',
    title: 'Ecom & OTT App',
    courseTitle: 'Ecommerce & OTT Application',
    description:
      'This is a modern Ecommerce application and OTT platform.',
    duration: '7 days',
    tagsList: [
      {
        id: '34e6b208-f768-11eb-9a03-0242ac130003',
        name: 'React Js',
      },
      {
        id: '34e6b460-f768-11eb-9a03-0242ac130003',
        name: 'React Router',
      },
      {
        id: '34e6ba28-f768-11eb-9a03-0242ac130003',
        name: 'React Context API',
      },
      {
        id: '34e6b76c-f768-11eb-9a03-0242ac130003',
        name: 'Firebase Authentication',
      },
      {
        id: '34e6b83e-f768-11eb-9a03-0242ac130003',
        name: 'Firebase Cloud Functions',
      },
      {
        id: '34e6b8fc-f768-11eb-9a03-0242ac130003',
        name: 'Stripe Payment Gateway',
      },
      
      
    ],
  },
  {
    id: '7bc3f006-f0f1-4574-924b-17c480556727',
    categoryId: 'PROJECT',
    title: 'Dynamic Website',
    projectTitle: 'Ecommerce & OTT App',
    description:
      'This application is a combination of ecommerce and OTT. User can login and buy their productts as well as enjoy watching movies.',
    imageUrl:
      'https://res.cloudinary.com/maheshsf9/image/upload/v1646373013/Amazon_dwc106.png',
    duration: '7 days',
    projectUrl: 'https://ecommerce-app-6f9f7.web.app/',
  },
  {
    id: 'c6aad2fb-7673-45cf-9606-a335acc0cf4b',
    categoryId: 'PROJECT DETAILS',
    title: 'Google Search Application',
    courseTitle: 'Dynamic Responsive Website',
    description:
      'Implemented Search Functionality and Pagination, Fetched Data from Google API, Then it is Server-Side-Rendered.',
    duration: '3 days',
    tagsList: [
      {
        id: 'c31b2ad8-f766-11eb-9a03-0242ac130003',
        name: 'Next Js',
      },
      {
        id: 'c31b2d08-f766-11eb-9a03-0242ac130003',
        name: 'React Js',
      },
      {
        id: 'c31b2dee-f766-11eb-9a03-0242ac130003',
        name: 'Tailwind CSS',
      },
      {
        id: 'c31b2ec6-f766-11eb-9a03-0242ac130003',
        name: 'Google API',
      },
      {
        id: 'c31b2eb6-f766-11eb-9a03-0242ac130003',
        name: 'Vercel',
      }
    ],
  },
  {
    id: 'a19d93d6-bdac-479e-b554-974ef9e6e66c',
    categoryId: 'PROJECT',
    title: 'DYNAMIC RESPONSIVE WEBSITE',
    projectTitle: 'Search Website',
    description:
      'This is a Google search application, it provides the results of your search.',
    imageUrl: 'https://res.cloudinary.com/maheshsf9/image/upload/v1646220850/Google_App_Image_ityolz.png',
    duration: '3 days',
    projectUrl: 'https://google-nandavaram-mahesh.vercel.app/',
  },
  {
    id: '40b82899-fdf7-4a3e-a43a-41a9917b4582',
    categoryId: 'PROJECT DETAILS',
    title: 'Hotel Booking Website',
    courseTitle: 'Dynamic Responsive Website',
    description:
      'A Tourism website which helps tourists to find better accomidation and facilitates booking facility.',
    duration: '4 days',
    tagsList: [
      {
        id: '551e2b7e-f767-11eb-9a03-0242ac130003',
        name: 'Responsive Web Design',
      },
      {
        id: '551e2de0-f767-11eb-9a03-0242ac130003',
        name: 'Grid Layouts',
      },
      {
        id: '551e3114-f767-11eb-9a03-0242ac130003',
        name: 'Map Integration',
      },
      {
        id: '551e31e6-f767-11eb-9a03-0242ac130004',
        name: 'Calender Integration',
      },
      {
        id: '551e31e6-f767-11eb-9a03-0242ac130003',
        name: 'Search Functionality',
      },
      {
        id: '551e32a4-f767-11eb-9a03-0242ac130003',
        name: 'Next Js',
      },
      {
        id: '551e334e-f767-11eb-9a03-0242ac130003',
        name: 'React Js',
      },
      {
        id: '551e3402-f767-11eb-9a03-0242ac130004',
        name: 'Tailwind CSS',
      },
      {
        id: '551e3402-f767-11eb-9a03-0242ac130003',
        name: 'Next Routing',
      },
    ],
  },
  {
    id: 'ae2ede68-af77-427c-817c-0ce4beeb69c7',
    categoryId: 'PROJECT',
    title: 'DYNAMIC RESPONSIVE WEBSITE',
    projectTitle: 'Airbnb',
    description: 'Airbnb Website is a user-centric hotel booking website.',
    imageUrl: 'https://res.cloudinary.com/maheshsf9/image/upload/v1646222004/Airbnb_cn6pa3.png',
    duration: '4 days',
    projectUrl: 'https://hotelbookingapp-nandavaram-mahesh.vercel.app/',
  },
  {
    id: '4938c3d1-81cd-4729-9d2c-dcd50796aa4d',
    categoryId: 'PROJECT DETAILS',
    title: 'Movies Search App',
    courseTitle: 'Dynamic Responsive Website',
    description:
      'This is a movie search application, the movies are fetched from tmdb database and serverside rendered.',
    duration: '1 days',
    tagsList: [
      {
        id: 'd4743c06-f767-11eb-9a03-0242ac130003',
        name: 'Data Fetching From API',
      },
      {
        id: 'd4744516-f767-11eb-9a03-0242ac130004',
        name:'Server Side Rendering',
      },
      {
        id: 'd4743ecc-f767-11eb-9a03-0242ac130003',
        name: 'Responsive Layout',
      },
      {
        id: 'd4743fe4-f767-11eb-9a03-0242ac130003',
        name: 'Scrollable Navbar',
      },
      {
        id: 'd47440d4-f767-11eb-9a03-0242ac130003',
        name: 'Next Js',
      },
      {
        id: 'd474434a-f767-11eb-9a03-0242ac130003',
        name: 'React Js',
      },
      {
        id: 'd474443a-f767-11eb-9a03-0242ac130003',
        name: 'Tailwind CSS',
      },
      {
        id: 'd4744516-f767-11eb-9a03-0242ac130003',
        name: 'Next Routing',
      },
    ],
  },
  {
    id: 'd6c4b3a5-7b1d-4906-aca8-823f44129004',
    categoryId: 'PROJECT',
    title: 'Dynamic Responsive Website',
    projectTitle: 'Hulu Application',
    description:
      'This app helps users to search for latest movies based on genre.',
    imageUrl:
      'https://res.cloudinary.com/maheshsf9/image/upload/v1646222691/hulu_image_di447s.png',
    duration: '1 Days',
    projectUrl: 'https://hulu-nandavaram-mahesh.vercel.app/',
  },
  // {
  //   id: '0a35abbe-22ca-40a1-81da-613f656b7702',
  //   categoryId: 'PROJECT',
  //   title: 'Ecommerce Application',
  //   projectTitle: 'NXT ECOM Application',
  //   description:
  //     'This is a modern ecommerce application.',
  //   imageUrl: 'https://res.cloudinary.com/maheshsf9/image/upload/v1646340686/NXT_ecom-app_cykk7e.png',
  //   duration: '10 Days',
  //   projectUrl: 'https://ecom-app.vercel.app/login',
  // },
  
  // {
  //   id: 'e681e826-260c-4540-9ee5-f53d0e6ecba0',
  //   categoryId: 'PROJECT DETAILS',
  //   title: 'NXT ECOM Application',
  //   courseTitle: 'React JS',
  //   description:
  //     'Learnt how to build dynamic web applications with the React JS library. Comfortable in creating a modern, clean, and maintainable application in React JS, from scratch.',
  //   duration: '4 days',
  //   tagsList: [
  //     {
  //       id: '94947ad2-f768-11eb-9a03-0242ac130003',
  //       name: 'Components',
  //     },
  //     {
  //       id: '94947d52-f768-11eb-9a03-0242ac130003',
  //       name: 'Lists',
  //     },
  //     {
  //       id: '94947e4c-f768-11eb-9a03-0242ac130003',
  //       name: 'Conditional Rendering',
  //     },
  //     {
  //       id: '94947f14-f768-11eb-9a03-0242ac130003',
  //       name: 'setState()',
  //     },
  //     {
  //       id: '94948270-f768-11eb-9a03-0242ac130003',
  //       name: 'Updating Phase',
  //     },
  //     {
  //       id: '94948342-f768-11eb-9a03-0242ac130003',
  //       name: 'Routing',
  //     },
  //     {
  //       id: '94948400-f768-11eb-9a03-0242ac130003',
  //       name: 'API Calls',
  //     },
  //   ],
  // },
  // {
  //   id: 'e093c08a-a2ae-413a-814b-e7c83f5f2ac3',
  //   categoryId: 'PROJECT',
  //   title: 'Dynamic Responsive Website',
  //   projectTitle: 'Nxt Trendz',
  //   description:
  //     'Nxt Trendz application is an E-commerce application like Amazon, Flipkart where users can log in and see the list of products with search, filters, sort by, etc.',
  //   imageUrl: 'https://assets.ccbp.in/frontend/react-js/nxt-trendz-img.png',
  //   duration: '4 days',
  //   projectUrl: 'https://ecom-app.vercel.app/login',
  // },
]

const App = () => <TimelineView timelineItemsList={timelineItemsList} />

export default App
