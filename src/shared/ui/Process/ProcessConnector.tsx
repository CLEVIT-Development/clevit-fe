import classNames from "classnames";

import { processesConstants } from "@/assets/constants/processes.constants";
import useResponsive from "@/common/hooks/useResponsive";
import { PositionVariant } from "@/types/position.types";
import { isEven } from "@/utils/parity.utils";

import Connector from "./Connector";

interface Props {
  order: number;
}

// I have added two connectors one for horizontal and 2nd for vertical, on desktop we omit the 2nd.
const ProcessConnector = ({ order }: Props) => {
  const { isTablet } = useResponsive();

  const connectorStyle = {
    "bottom-left": "translate-y-[100%] bottom-0 left-[30%] md:h-[348px] xs:h-[154px]",
    "bottom-right": "translate-y-[100%] bottom-0 right-[30%] md:h-[348px] xs:h-[154px]",
    left: "left-0 -translate-x-[100%] desktop:w-[100px] xs:w-[calc(100vw-300px)] md:w-[calc(100vw-365px)]",
    right: "right-0 translate-x-[100%] xs:w-[calc(100vw-300px)] md:w-[calc(100vw-365px)]",
  };

  return (
    <>
      {order !== processesConstants.length && (
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
