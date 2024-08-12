import type { FunctionComponent, SVGProps } from "react";

export interface IProcess {
  id: number;
  Icon: FunctionComponent<SVGProps<SVGSVGElement>>;
  title: string;
}
