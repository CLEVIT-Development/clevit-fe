import {
  AntIcon,
  CSSIcon,
  CypressIcon,
  DynamoDBIcon,
  ElasticSearchIcon,
  ExpressIcon,
  FirebaseIcon,
  GoogleCloudIcon,
  GraphQLIcon,
  HTMLIcon,
  JestIcon,
  MUIIcon,
  MariaDBIcon,
  MicrosoftServerIcon,
  MongoIcon,
  MySQLIcon,
  NestIcon,
  NextIcon,
  NoSQLIcon,
  NodeIcon,
  PostgresIcon,
  ReactIcon,
  RedisIcon,
  SASSIcon,
  SQLiteIcon,
  TailwindCSSIcon,
  Typescript,
  ViteIcon,
  VueIcon,
  WebSocketIcon,
} from "@/assets/icons/technology-icons";

import type { ITabsConstant } from "./technicalAssesmentTechnologies.constants";

export const webDevelopmentTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Front-End Development",
    description:
      "Front-End developers at our company create  intuitive, dynamic, and aesthetically-pleasing and user interfaces. Using technologies like  <strong>React.js , Vue.js, Next.js, TypeScript ,</strong>  and many others we develop websites that are adaptable to various screen sizes.The goal is to bring an additional focus on the user experience that will allow not to lose a visitor.",
  },
  {
    id: 2,
    title: "Back-End Development",
    description:
      "Every website has its back-end, which serves as a foundation for web development. With Node, we make certain that every aspect of your website’s server, databases, and applications are well-coordinated. <strong> Node.js, Nest.js, Express.js,</strong>  and other modern frameworks which we are going to build in this project. We integrate back-end services with the keen sense of security and performance as our basis for the reliable solutions.",
  },
  {
    id: 3,
    title: "Database Management",
    description:
      "It is therefore important to have a well formulated database so that it can deliver on its performance and also to enhance the level of security. We use tools such as <strong>MySQL, MongoDB, PostgreSQL,</strong>  Redis, and among others in developing effective storage systems. Whether you need relational databases or NoSQL, rest assured that our services will handle your data with utmost attention so you have the fastest secure data access for your application.",
  },
  {
    id: 4,
    title: "Custom Solutions",
    description:
      "Therefore, we appreciate that each business organization has a specific and special requirement and thus, we offer the web development services that can suit your business needs. No matter whether it is about incorporating third party APIs or developing applications for web security that is top-notch, we have features and solutions that could help your business to gain leverage.",
  },
];

export const webDevelopmentTechnologiesConstants = {
  1: [
    { id: 1, title: "React.js", Icon: ReactIcon },
    { id: 2, title: "Vue.js", Icon: VueIcon },
    { id: 3, title: "Vite.js", Icon: ViteIcon },
    { id: 4, title: "Next.js", Icon: NextIcon },
    { id: 6, title: "Material UI", Icon: MUIIcon },
    { id: 7, title: "Tailwind CSS", Icon: TailwindCSSIcon },
    { id: 8, title: "Ant Design", Icon: AntIcon },
    { id: 9, title: "Cypress", Icon: CypressIcon },
    { id: 10, title: "HTML 5", Icon: HTMLIcon },
    { id: 11, title: "CSS3", Icon: CSSIcon },
    { id: 12, title: "SCSS(SASS)", Icon: SASSIcon },
    { id: 5, title: "Typescript", Icon: Typescript },
  ],
  2: [
    { id: 1, title: "Node.js", Icon: NodeIcon },
    { id: 2, title: "Nest.js", Icon: NestIcon },
    { id: 3, title: "Express.js", Icon: ExpressIcon },
    { id: 4, title: "GraphQL", Icon: GraphQLIcon },
    { id: 5, title: "WebSocket", Icon: WebSocketIcon },
    { id: 6, title: "Jest", Icon: JestIcon },
  ],
  3: [
    { id: 1, title: "MySQL", Icon: MySQLIcon },
    { id: 2, title: "NoSQL", Icon: NoSQLIcon },
    { id: 3, title: "MongoDB", Icon: MongoIcon },
    { id: 4, title: "PostgreSQL", Icon: PostgresIcon },
    { id: 5, title: "Firebase", Icon: FirebaseIcon },
    { id: 6, title: "Google Cloud", Icon: GoogleCloudIcon },
    { id: 7, title: "SQL Server", Icon: MicrosoftServerIcon },
    { id: 8, title: "SQLite", Icon: SQLiteIcon },
    { id: 9, title: "Redis", Icon: RedisIcon },
    { id: 10, title: "Maria DB", Icon: MariaDBIcon },
    { id: 11, title: "Elasticsearch", Icon: ElasticSearchIcon },
    { id: 12, title: "DynamoDB", Icon: DynamoDBIcon },
  ],
  4: [],
};
