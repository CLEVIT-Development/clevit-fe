import Modal from "react-modal";

import CloseIcon from "@/assets/vectors/Close.svg?react";

interface Props extends Modal.Props {
  contentStyles?: React.CSSProperties;
  overlayStyles?: React.CSSProperties;
  withCloseButton?: boolean;
}

const StyledModal: React.FC<Props> = ({
  children,
  contentStyles,
  overlayStyles,
  withCloseButton,
  ...props
}) => {
  const customStyles: Modal.Styles = {
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
    <Modal style={customStyles} {...props}>
      <div className="relative h-full">
        {withCloseButton ? (
          <button
            className="absolute right-[22px] top-[22px] cursor-pointer z-10"
            onClick={props.onRequestClose}
          >
            <CloseIcon />
          </button>
        ) : null}
        {children}
      </div>
    </Modal>
  );
};

export default StyledModal;
