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

export const uIuXTechnologiesTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Prototyping & Wireframing",
    description:
      "We make wireframes and prototypes using <strong>Figma</strong> and <strong>Adobe XD</strong> that represent the app flow, navigation, and interface in order to get to the final design.",
  },
  {
    id: 2,
    title: "Graphic & Visual Design",
    description:
      "Our specialists employ all the available techniques in <strong>Adobe Illustrator</strong> and <strong>Adobe Photoshop</strong> to develop unique visuals, icons, and graphics to enhance your product.",
  },
  {
    id: 3,
    title: "User Research & Testing",
    description:
      "Through <strong>Figma</strong> and <strong>Adobe XD</strong>, we employ research and testing to enhance the design to be shaping with users’ expectations and business needs.",
  },
  {
    id: 4,
    title: "Responsive Design & Consistency",
    description:
      "Utilizing <strong>Figma</strong> and <strong>Adobe XD</strong>, we make it our effort to maintain the responsive design on any devices and platforms for consistent and delightful interactions.",
  },
];

export const uIuXTechnologiesConstants = {
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
