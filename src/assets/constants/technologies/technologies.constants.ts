import { type FunctionComponent, type LazyExoticComponent, type SVGProps, lazy } from "react";

import type { INavigationData } from "@/shared/ui/Navigation.tsx";

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
const SwiftIcon = lazy(() => import("@/assets/vectors/technology/Swift.svg?react"));
const TailwindCSSIcon = lazy(() => import("@/assets/vectors/technology/Tailwind.svg?react"));
const Typescript = lazy(() => import("@/assets/vectors/technology/Typescript.svg?react"));
const ViteIcon = lazy(() => import("@/assets/vectors/technology/Vite.svg?react"));
const VueIcon = lazy(() => import("@/assets/vectors/technology/Vue.svg?react"));
const WebSocketIcon = lazy(() => import("@/assets/vectors/technology/WebSocket.svg?react"));

export interface ITabsConstant extends INavigationData {
  description?: string;
}

export interface ITechnologyConstant {
  id: number;
  title: string;
  Icon: LazyExoticComponent<FunctionComponent<SVGProps<SVGSVGElement>>>;
}

export const technologyTabsConstants: ITabsConstant[] = [
  {
    id: 1,
    title: "Front-End Development",
  },
  {
    id: 2,
    title: "Mobile App Development",
  },
  {
    id: 3,
    title: "Back-End Development",
  },
  {
    id: 4,
    title: "Database Management",
  },
];

export const technologiesConstants = {
  1: [
    { id: 1, title: "React.js", Icon: ReactIcon },
    { id: 2, title: "Vue.js", Icon: VueIcon },
    { id: 3, title: "Vite.js", Icon: ViteIcon },
    { id: 4, title: "Next.js", Icon: NextIcon },
    { id: 5, title: "Typescript", Icon: Typescript },
    { id: 6, title: "Material UI", Icon: MUIIcon },
    { id: 7, title: "Tailwind CSS", Icon: TailwindCSSIcon },
    { id: 8, title: "Ant Design", Icon: AntIcon },
    { id: 9, title: "Cypress", Icon: CypressIcon },
    { id: 10, title: "HTML 5", Icon: HTMLIcon },
    { id: 11, title: "CSS3", Icon: CSSIcon },
    { id: 12, title: "SCSS(SASS)", Icon: SASSIcon },
  ],
  2: [
    { id: 1, title: "Swift", Icon: SwiftIcon },
    { id: 2, title: "React Native", Icon: ReactIcon },
  ],
  3: [
    { id: 1, title: "Node.js", Icon: NodeIcon },
    { id: 2, title: "Nest.js", Icon: NestIcon },
    { id: 3, title: "Express.js", Icon: ExpressIcon },
    { id: 4, title: "GraphQL", Icon: GraphQLIcon },
    { id: 5, title: "WebSocket", Icon: WebSocketIcon },
    { id: 6, title: "Jest", Icon: JestIcon },
  ],
  4: [
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
