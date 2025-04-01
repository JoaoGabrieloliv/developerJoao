import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation";

const splashScreen = {
  enabled: true,
  animation: splashAnimation,
  duration: 2000
};

const illustration = {
  animated: true
};

const greeting = {
  username: "Joao Gabriel Oliveira",
  title: "Bora conhecer o João?!",
  subTitle: emoji(
    "Desenvolvedor Full Stack apaixonado por tecnologia 🚀 com experiência na criação de aplicações web robustas usando Java, Spring Boot, Django, Vue e React — com foco em arquitetura limpa e soluções que fazem a diferença."
  ),
  resumeLink: "",
  displayGreeting: true
};

const socialMediaLinks = {
  github: "https://github.com/JoaoGabrieloliv",
  linkedin: "https://www.linkedin.com/in/joaogabrielolvdev/",
  gmail: "joaoglimasales@gmail.com",
  display: true
};

const skillsSection = {
  title: "O que eu faço",
  subTitle: "DESENVOLVEDOR FULL STACK QUE CURTE ENTENDER CADA CAMADA DO SISTEMA",
  skills: [
    emoji("⚡ APIs REST com Spring Boot e Django"),
    emoji("⚡ Integrações com PostgreSQL, autenticação JWT e microsserviços"),
    emoji("⚡ Desenvolvimento de soluções robustas com Java e Spring Boot"),
    emoji("⚡ Desenvolvimento de interfaces modernas com React e Vue")
  ],
  softwareSkills: [
    { skillName: "Java", fontAwesomeClassname: "fab fa-java" },
    { skillName: "Spring Boot", fontAwesomeClassname: "fas fa-leaf" },
    { skillName: "Python", fontAwesomeClassname: "fab fa-python" },
    { skillName: "Django", fontAwesomeClassname: "fas fa-fire" },
    { skillName: "Vue.js", fontAwesomeClassname: "fab fa-vuejs" },
    { skillName: "React", fontAwesomeClassname: "fab fa-react" },
    { skillName: "PostgreSQL", fontAwesomeClassname: "fas fa-database" },
    { skillName: "Docker", fontAwesomeClassname: "fab fa-docker" }
  ],
  display: true
};

const educationInfo = {
  display: true,
  schools: [
    {
      schoolName: "UNINASSAU",
      logo: require("./assets/images/uninassauLogo.png"),
      subHeader: "Tecnólogo em Análise e Desenvolvimento de Sistemas",
      duration: "2023 – 2024",
      desc: "Curso focado em desenvolvimento de software, bancos de dados, estruturas de dados e metodologias ágeis."
    },
    {
      schoolName: "Estácio",
      logo: require("./assets/images/estacioLogo.png"),
      subHeader: "Pós-graduação Lato Sensu em Engenharia de Software",
      duration: "2025 – em andamento",
      desc: "Focado em aplicar arquitetura de software escalável, padrões de projeto eficazes e práticas DevOps voltadas à automação e entrega contínua."
    }
  ]
};

const techStack = {
  viewSkillBars: true,
  experience: [
    { Stack: "Frontend/Design (Frontend)", progressPercentage: "70%" },
    { Stack: "Backend", progressPercentage: "90%" },
    { Stack: "Banco de Dados", progressPercentage: "80%" }
  ],
  displayCodersrank: false
};

const workExperiences = {
  display: true,
  experience: [
    {
      role: "Estagiário em Desenvolvimento de Software",
      company: "EMPREL",
      companylogo: require("./assets/images/emprelLogo.png"),
      date: "2024",
      desc: "Na Emprel atuei no desenvolvimento de aplicações utilizando Java, com atuação em back-end e front-end (React e JSF). Familiarizado com frameworks como Spring, realizando desenvolvimento de novas funcionalidades e correção de bugs. Experiência na integração e manipulação de bancos de dados, especialmente PostgreSQL, para garantir eficiência e robustez nas soluções entregues.",
      descBullets: [
        "Java (7, 8 e 11+), Spring Boot",
        "Desenvolvimento de APIs RESTful e aplicações JSF",
        "Manipulação e modelagem de dados com PostgreSQL"
      ]
    },
    {
      role: "Desenvolvedor de Software",
      company: "Prefeitura do Recife - SECTI",
      companylogo: require("./assets/images/recifeLogo.png"),
      date: "2025 – Presente",
      desc: "Desenvolvimento de sistemas voltados à gestão pública, com Python (Django) e Django REST Framework no backend, Celery para tarefas assíncronas e PostgreSQL como banco de dados. No frontend, utilização de Vue 3, com Vite, Vue Router, Pinia e Axios para integração com APIs e construção de interfaces modernas e responsivas."
    }
  ]
};

const openSource = {
  showGithubProfile: "true",
  display: false
};

const bigProjects = {
  title: "Projetos de Destaque",
  subtitle: "Soluções que criei e participei com impacto real",
  projects: [],
  display: false
};

const achievementSection = {
  title: emoji("Conquistas e Certificações 🏆"),
  subtitle: "Certificados, conquistas e experiências relevantes",
  achievementsCards: [],
  display: false
};

const blogSection = {
  title: "Blogs",
  subtitle: "Compartilho conhecimento sobre desenvolvimento e boas práticas",
  displayMediumBlogs: "false",
  blogs: [],
  display: false
};

const talkSection = {
  title: "PALESTRAS",
  subtitle: emoji("Compartilho o que aprendo com paixão pela tecnologia 💬"),
  talks: [],
  display: false
};

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Curto falar sobre tecnologia e desenvolvimento de software",
  podcast: [],
  display: false
};

const resumeSection = {
  title: "Currículo",
  subtitle: "Sinta-se à vontade para baixar meu currículo",
  display: false
};

const contactInfo = {
  title: emoji("Entre em contato ☎️"),
  subtitle: "Quer trocar uma ideia sobre projetos ou tecnologia? Minha caixa de entrada está aberta!",
  number: "",
  email_address: "joaoglimasales@gmail.com"
};

const twitterDetails = {
  userName: "",
  display: false
};

const isHireable = true;

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
