import type { SVGProps } from "react";

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
  JavaIcon,
  JestIcon,
  KotlinIcon,
  MUIIcon,
  MariaDBIcon,
  MicrosoftServerIcon,
  MongoIcon,
  MySQLIcon,
  NestIcon,
  NextIcon,
  NoSQLIcon,
  NodeIcon,
  ObjectiveCIcon,
  PostgresIcon,
  ReactExpoIcon,
  ReactIcon,
  RedisIcon,
  SASSIcon,
  SQLiteIcon,
  SwiftIcon,
  TailwindCSSIcon,
  Typescript,
  ViteIcon,
  VueIcon,
  WebSocketIcon,
} from "../../../assets/icons/technology-icons";
import type { INavigationData } from "../../ui/Navigation.tsx";

export interface SubDescription {
  id: number;
  title: string;
  description: string;
}

export interface ITabsConstant extends INavigationData {
  description?: string;
  subDescription?: SubDescription[];
}

export interface ITechnologyConstant {
  id: number;
  title: string;
  Icon: SVGProps<SVGSVGElement>;
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
    { id: 2, title: "Objective-C", Icon: ObjectiveCIcon },
    { id: 3, title: "Kotlin", Icon: KotlinIcon },
    { id: 4, title: "Java", Icon: JavaIcon },
    { id: 5, title: "React Native", Icon: ReactIcon },
    { id: 5, title: "React Expo", Icon: ReactExpoIcon },
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
