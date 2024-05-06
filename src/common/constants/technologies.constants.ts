import AntIcon from "@/assets/vectors/technology/Ant.svg?react";
import CSSIcon from "@/assets/vectors/technology/CSS.svg?react";
import CypressIcon from "@/assets/vectors/technology/Cypress.svg?react";
import ExpressIcon from "@/assets/vectors/technology/Express.svg?react";
import FirebaseIcon from "@/assets/vectors/technology/Firebase.svg?react";
import GoogleCloudIcon from "@/assets/vectors/technology/GoogleCloud.svg?react";
import GraphQLIcon from "@/assets/vectors/technology/GraphQL.svg?react";
import HTMLIcon from "@/assets/vectors/technology/HTML.svg?react";
import JestIcon from "@/assets/vectors/technology/Jest.svg?react";
import MUIIcon from "@/assets/vectors/technology/MUI.svg?react";
import MicrosoftServerIcon from "@/assets/vectors/technology/MicrosoftServer.svg?react";
import MongoIcon from "@/assets/vectors/technology/Mongo.svg?react";
import MySQLIcon from "@/assets/vectors/technology/MySQL.svg?react";
import NestIcon from "@/assets/vectors/technology/Nest.svg?react";
import NextIcon from "@/assets/vectors/technology/Next.svg?react";
import NoSQLIcon from "@/assets/vectors/technology/NoSQL.svg?react";
import NodeIcon from "@/assets/vectors/technology/Node.svg?react";
import PostgresIcon from "@/assets/vectors/technology/PostgreSQL.svg?react";
import ReactIcon from "@/assets/vectors/technology/React.svg?react";
import SASSIcon from "@/assets/vectors/technology/SASS.svg?react";
import SwiftIcon from "@/assets/vectors/technology/Swift.svg?react";
import TailwindCSSIcon from "@/assets/vectors/technology/Tailwind.svg?react";
import Typescript from "@/assets/vectors/technology/Typescript.svg?react";
import ViteIcon from "@/assets/vectors/technology/Vite.svg?react";
import VueIcon from "@/assets/vectors/technology/Vue.svg?react";
import WebSocketIcon from "@/assets/vectors/technology/WebSocket.svg?react";
import type { INavigationData } from "@/shared/ui/Navigation.tsx";

export const technologyTabsConstants: INavigationData[] = [
  { id: 1, title: "Front-End Development" },
  { id: 2, title: "Mobile App Development" },
  { id: 3, title: "Back-End Development" },
  { id: 4, title: "Database Management" },
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
    { id: 7, title: "Microsoft SQL Server", Icon: MicrosoftServerIcon },
  ],
};
