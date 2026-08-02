// Single source of truth for the portfolio page and the downloadable CV PDF.
// Components import from here so the page and the generated PDF stay in sync.

export const profile = {
  firstName: 'Enrico',
  lastName: 'Montanari',
  title: 'Software Developer',
  subtitle: 'a developer.',
}

export const contacts = {
  email: 'enrico.montanari13@gmail.com',
  linkedin: 'https://www.linkedin.com/in/EnricoMontanari13/',
  linkedinLabel: 'Enrico Montanari',
  github: 'https://github.com/Kirilanshelo',
  githubLabel: 'Kirilanshelo',
  // Shown in the CV/PDF only, under the role.
  // The phone number is kept out of the repository: it is read from the
  // VITE_CV_PHONE env var (set it in .env.local, which is gitignored).
  phone: import.meta.env.VITE_CV_PHONE || '',
  city: 'Mestre, Italy',
}

// Short version, shown on the website.
export const about =
  'Astrophysicist by training, software developer by passion. ' +
  'I used to study the stars, now I mostly stare at code, and honestly I love it. ' +
  'These days I build backend systems and distributed services, lately with a good dose of AI and agentic tooling, and I get a real kick out of turning messy problems into something clean and reliable. ' +
  "I'm endlessly curious, always tinkering with side projects and new ideas, and I do my best work on a team where we can build cool things and grow together. " +
  'When I can, I try to make time to stay in shape (gym, five-a-side football, running) and to play Magic: The Gathering with friends.'

// Longer version, used only in the CV/PDF profile.
export const aboutLong =
  'Astrophysicist by training and software developer by passion. ' +
  'After studying the physics of stars and black holes, I moved into software and never looked back. ' +
  'Today I focus on backend development and distributed systems: gathering requirements, designing services and turning complex, messy problems into clean and reliable solutions, most recently working with AI and agentic capabilities in production. ' +
  'I am a hands-on, endlessly curious engineer who likes to understand not just how something works, but why it was built that way. ' +
  'I do my best work on a team where we can build ambitious things and grow together, and outside of work I channel the same curiosity into personal projects, from 2D game development to small tools that remove friction from the things I care about.'

export const career = [
  {
    company: 'Xuniplay s.r.l.',
    period: 'Feb 2026 - present',
    role: 'Software Developer',
    description:
      'My responsibilities include gathering requirements, planning and implementing backend features for a digital signage platform, with a particular focus on AI and agentic capabilities.',
    technologies: 'Node.js, Typescript, Kafka, MQTT, PostgreSQL, Redis, Kubernetes, Piscina, Mastra',
  },
  {
    company: 'fabbricadigitale s.r.l.',
    period: 'Sept 2021 - Jan 2026',
    role: 'Software Developer',
    description:
      'My tasks are mainly focused on the backend side of a software for digital signage. Since the advent of AI, we are also integrating it in our day to day coding tasks.',
    technologies: 'Node.js, Typescript, Kafka, MQTT, PostgreSQL, Redis, Kubernetes, Piscina',
  },
  {
    company: 'Serenissima Informatica Spa',
    period: 'Apr 2019 - Aug 2021',
    role: 'Full-Stack Developer',
    description:
      'Full-Stack developer mainly working on a multi-tenant cloud platform for hotels, structured with Node.js microservices and a React frontend.',
  },
]

export const education = [
  {
    institution: 'Università di Padova',
    period: 'Oct 2016 - Mar 2019',
    degree: "Master's Degree: Astronomy",
    description:
      'Final mark 110/110 with a thesis about how the stellar rotation influences black hole formation. ',
    link: 'https://arxiv.org/abs/1909.01371',
    linkText: ' you can read the published article.',
  },
  {
    institution: 'Università di Padova',
    period: 'Oct 2009 - Mar 2016',
    degree: "Bachelor's Degree: Astronomy",
    description: 'Many courses about physics, math, quantum mechanic, geometry and computer.',
  },
]

export const onlineCourses = [
  {
    title: 'The Complete Python Developer',
    period: "Sept '25 - Oct '25",
    link: 'https://www.udemy.com/course/the-complete-python-developer-zero-to-mastery/',
    description:
      'Learn Python like a Professional! Start from the basics and go all the way to creating your own applications and games',
  },
  {
    title: 'JavaScript: The Advanced Concepts (2023 Update)',
    period: "Nov '22",
    link: 'https://www.udemy.com/course/advanced-javascript-concepts/',
    description:
      'Learn modern advanced JavaScript practices and be in the top 10% of JavaScript developers',
  },
  {
    title: 'JavaScript Algorithms and Data Structures Masterclass',
    period: "Aug '22 - Oct '22",
    link: 'https://www.udemy.com/course/js-algorithms-and-data-structures-masterclass/',
    description: 'The Missing Computer Science and Coding Interview Bootcamp',
  },
  {
    title: 'Kubernetes for the Absolute Beginners - Hands-on',
    period: "Aug '22",
    link: 'https://www.udemy.com/course/learn-kubernetes/',
    description:
      'Learn Kubernetes in simple, easy and fun way with hands-on coding exercises. For beginners in DevOps.',
  },
  {
    title: 'The Complete Development Bootcamp',
    period: "Jul '21",
    link: 'https://www.udemy.com/course/the-complete-web-development-bootcamp/',
    description: 'Introduction and basic usage of HTML, CSS, Javascript, Node, React, MongoDB',
  },
]

// Skill icons used only for on-page rendering. The PDF uses the names as text tags.
const CDN = 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons'

export const skills = {
  good: [
    { name: 'Javascript', icon: `${CDN}/javascript/javascript-original.svg` },
    { name: 'Node.js', icon: `${CDN}/nodejs/nodejs-original.svg` },
    { name: 'TypeScript', icon: `${CDN}/typescript/typescript-original.svg` },
    { name: 'PostgreSQL', icon: `${CDN}/postgresql/postgresql-original.svg` },
    { name: 'Kafka', icon: `${CDN}/apachekafka/apachekafka-original.svg` },
    { name: 'Redis', icon: `${CDN}/redis/redis-original.svg` },
    { name: 'Elasticsearch', icon: `${CDN}/elasticsearch/elasticsearch-original.svg` },
  ],
  familiar: [
    { name: 'MongoDB', icon: `${CDN}/mongodb/mongodb-original.svg` },
    { name: 'React', icon: `${CDN}/react/react-original.svg` },
    { name: 'Vue.js', icon: `${CDN}/vuejs/vuejs-original.svg` },
    { name: 'Bootstrap', icon: `${CDN}/bootstrap/bootstrap-original.svg` },
    { name: 'CSS3', icon: `${CDN}/css3/css3-original.svg` },
    { name: 'HTML5', icon: `${CDN}/html5/html5-original.svg` },
    { name: 'Kubernetes', icon: `${CDN}/kubernetes/kubernetes-plain.svg` },
    // Mastra uses a local asset; resolved in the component to keep this module bundler-agnostic.
    { name: 'Mastra', icon: null, localIcon: 'mastra' },
  ],
  freeTime: [
    { name: 'Godot', icon: `${CDN}/godot/godot-original.svg` },
    { name: 'Rust', icon: `${CDN}/rust/rust-original.svg` },
    { name: 'Electron', icon: `${CDN}/electron/electron-original.svg` },
  ],
}

export const languages = [
  { name: 'Italian', proficiency: 'Native speaker', flag: '🇮🇹' },
  { name: 'English', proficiency: 'Fluent in writing, good in listening and speaking', flag: '🇬🇧' },
]
