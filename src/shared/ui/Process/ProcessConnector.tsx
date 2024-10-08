import classNames from "classnames";

import useResponsive from "@/common/hooks/useResponsive";
import type { IProcess } from "@/types/constant.types.ts";
import { PositionVariant } from "@/types/position.types";
import { isEven } from "@/utils/parity.utils";

import Connector from "./Connector";

interface Props {
  order: number;
  processes: IProcess[];
}

// I have added two connectors one for horizontal and 2nd for vertical, on desktop we omit the 2nd.
const ProcessConnector = ({ order, processes }: Props) => {
  const { isTablet } = useResponsive();

  const connectorStyle = {
    "bottom-left": "translate-y-[100%] bottom-0 left-[25%] md:h-[50%] xs:h-[207px]",
    "bottom-right": "translate-y-[100%] bottom-0 right-[25%] md:h-[348px] xs:h-[207px]",
    left: "left-0 -translate-x-[100%] desktop:w-[100px] xs:w-[calc(100vw-290px)] md:w-[calc(100vw-365px)]",
    right: "right-0 translate-x-[100%] xs:w-[calc(100vw-290px)] md:w-[calc(100vw-365px)]",
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
      {/* On Tablet Event ordered items should have left horizontal and odd ones right horizontal connectors */}
      {/* On Desktop we need only left connectors */}
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
