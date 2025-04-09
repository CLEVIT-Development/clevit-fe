import React from "react";
import ReactModalDefault from "react-modal";

import CloseIcon from "../../assets/vectors/Close.svg";

const Modal = ReactModalDefault as unknown as React.ComponentType<ReactModalDefault.Props>;

if (typeof window !== "undefined") {
  ReactModalDefault.setAppElement("#root");
}

interface Props {
  isOpen?: boolean;
  onRequestClose?: () => void;
  contentStyles?: React.CSSProperties;
  overlayStyles?: React.CSSProperties;
  withCloseButton?: boolean;
  children: React.ReactNode;
}

const StyledModal = ({
  isOpen = false,
  onRequestClose,
  contentStyles,
  overlayStyles,
  withCloseButton,
  children,
  ...props
}: Props & Partial<ReactModalDefault.Props>) => {
  const customStyles: ReactModalDefault.Styles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
      border: "none",
      backgroundColor: "white",
      padding: "0",
      ...contentStyles,
    },
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.3)",
      ...overlayStyles,
      zIndex: 90,
    },
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onRequestClose} style={customStyles} {...props}>
      <div className="relative h-full">
        {withCloseButton && (
          <button
            className="absolute right-[22px] top-[22px] cursor-pointer z-10"
            onClick={onRequestClose}
          >
            <CloseIcon />
          </button>
        )}
        {children}
      </div>
    </Modal>
  );
};

export default StyledModal;
