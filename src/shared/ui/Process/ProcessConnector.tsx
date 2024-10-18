import classNames from "classnames";

import useResponsive from "@/common/hooks/useResponsive";
import type { IProcess } from "@/types/constant.types.ts";
import { PositionVariant } from "@/types/position.types";
import { isEven } from "@/utils/parity.utils";

import Connector from "./Connector";

interface Props {
  order: number;
  processes: IProcess[];
  description?: string;
}

// I have added two connectors one for horizontal and 2nd for vertical, on desktop we omit the 2nd.
const ProcessConnector = ({ order, processes, description }: Props) => {
  const { isTablet } = useResponsive();

  const connectorStyle = {
    "bottom-left": `translate-y-[100%] bottom-0 left-[25%] ${description ? "h-[70%] md:h-[143%]" : "h-[77%] md:h-[173%]"}`,
    "bottom-right": `translate-y-[100%] bottom-0 right-[25%] ${description ? "h-[70%] md:h-[143%]" : "h-[77%] md:h-[173%]"}`,
    left: "left-0 -translate-x-[100%]  w-[calc(100vw-290px)] md:w-[calc(100vw-290px)] desktop:w-[200px]",
    right:
      "right-0 translate-x-[100%] w-[calc(100vw-290px)] md:w-[calc(100vw-290px)] desktop:w-[100px]",
  };

  return (
    <>
      {order !== processes.length && (
        <Connector
          className={classNames(
            "absolute desktop:hidden",
            isEven(order) ? connectorStyle["bottom-right"] : connectorStyle["bottom-left"]
          )}
          position={PositionVariant.Vertical}
        />
      )}

      {order !== 1 && (
        <Connector
          className={classNames("absolute", {
            [connectorStyle["left"]]: !isTablet || isEven(order),
            [connectorStyle["right"]]: isTablet && !isEven(order),
          })}
          position={PositionVariant.Horizontal}
        />
      )}
    </>
  );
};

export default ProcessConnector;
