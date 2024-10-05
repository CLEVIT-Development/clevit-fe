import { lazy } from "react";

import type { ITabsConstant } from "@/assets/constants/technologies/technologies.constants.ts";

const AntIcon = lazy(() => import("@/assets/vectors/technology/Ant.svg?react"));
const CSSIcon = lazy(() => import("@/assets/vectors/technology/CSS.svg?react"));
const CypressIcon = lazy(() => import("@/assets/vectors/technology/Cypress.svg?react"));
const DynamoDBIcon = lazy(() => import("@/assets/vectors/technology/DynamoDB.svg?react"));
const ElasticSearchIcon = lazy(() => import("@/assets/vectors/technology/ElasticSearch.svg?react"));
const ExpressIcon = lazy(() => import("@/assets/vectors/technology/Express.svg?react"));
const FirebaseIcon = lazy(() => import("@/assets/vectors/technology/Firebase.svg?react"));
const GoogleCloudIcon = lazy(() => import("@/assets/vectors/technology/GoogleCloud.svg?react"));
const GraphQLIcon = lazy(() => import("@/assets/vectors/technology/GraphQL.svg?react"));
const HTMLIcon = lazy(() => import("@/assets/vectors/technology/HTML.svg?react"));
const JestIcon = lazy(() => import("@/assets/vectors/technology/Jest.svg?react"));
const MUIIcon = lazy(() => import("@/assets/vectors/technology/MUI.svg?react"));
const MariaDBIcon = lazy(() => import("@/assets/vectors/technology/MariaDB.svg?react"));
const MicrosoftServerIcon = lazy(
  () => import("@/assets/vectors/technology/MicrosoftServer.svg?react")
);
const MongoIcon = lazy(() => import("@/assets/vectors/technology/Mongo.svg?react"));
const MySQLIcon = lazy(() => import("@/assets/vectors/technology/MySQL.svg?react"));
const NestIcon = lazy(() => import("@/assets/vectors/technology/Nest.svg?react"));
const NextIcon = lazy(() => import("@/assets/vectors/technology/Next.svg?react"));
const NoSQLIcon = lazy(() => import("@/assets/vectors/technology/NoSQL.svg?react"));
const NodeIcon = lazy(() => import("@/assets/vectors/technology/Node.svg?react"));
const PostgresIcon = lazy(() => import("@/assets/vectors/technology/PostgreSQL.svg?react"));
const ReactIcon = lazy(() => import("@/assets/vectors/technology/React.svg?react"));
const RedisIcon = lazy(() => import("@/assets/vectors/technology/Redis.svg?react"));
const SASSIcon = lazy(() => import("@/assets/vectors/technology/SASS.svg?react"));
const SQLiteIcon = lazy(() => import("@/assets/vectors/technology/SQLite.svg?react"));
const TailwindCSSIcon = lazy(() => import("@/assets/vectors/technology/Tailwind.svg?react"));
const Typescript = lazy(() => import("@/assets/vectors/technology/Typescript.svg?react"));
const ViteIcon = lazy(() => import("@/assets/vectors/technology/Vite.svg?react"));
const VueIcon = lazy(() => import("@/assets/vectors/technology/Vue.svg?react"));
const WebSocketIcon = lazy(() => import("@/assets/vectors/technology/WebSocket.svg?react"));

export const mLTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Deep Learning Frameworks",
    description:
      "Our strengths include the possession of profound knowledge on deep learning frameworks including <strong>Tensorflow.js,</strong> <strong>Keras.js,</strong> and <strong>Brain.js.</strong> These frameworks are ideal for applications that need to run profound analytic requirements on prediction, image recognition and real time decision making using artificial neural networks to derive patterns from big data.",
  },
  {
    id: 2,
    title: "Containerization & Orchestration",
    description:
      "Our strengths include the possession of profound knowledge on deep learning frameworks including Tensorflow.js, Keras.js, and Brain.js. These frameworks are ideal for applications that need to run profound analytic requirements on prediction, image recognition and real time decision making using artificial neural networks to derive patterns from big data",
  },
  {
    id: 3,
    title: "Computer Vision Solutions",
    description:
      "Using <strong>OpenCV.js</strong>, we make intelligent systems software solutions for machine learning that focuses on computer vision to help the business world to derive an understanding of image and video data. Computer vision models offer features such as image classification, object detection, face recognition, etc., thus making your business more responsive to image information in real time.",
  },
  {
    id: 4,
    title: "Natural Language Processing",
    description:
      "We build Natural Language Processing (NLP) solutions using <strong>NLP.js</strong>, enabling apps to perform tasks including sentiment analysis, language identification, chatbot creation as well as text analysis. These NLP models are intended for enabling machines to read, evaluate, and produce human language, enhancing the user experience and automating the interactions.",
  },
  {
    id: 5,
    title: "Machine Learning for Creative AI",
    description:
      "We use <strong>ML5.js</strong> to build the models tailored specifically to the creation of creative AI applications, as it enables ML into the interactivity of web and art projects. No matter if it is used for interactive graphics and data visualization or for creating ML5. js is convenient for inventive and liberal use of ML activities.",
  },
];

export const mLTechnologiesConstants = {
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
};
