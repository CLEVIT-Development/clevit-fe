import Button from "@/shared/ui/Button";
import StyledModal from "@/shared/ui/StyledModal";

interface Props {
  isOpen: boolean;
  onExit: () => void;
  onSaveAndExit: () => void;
  onReset?: () => void;
}

const SaveReminder: React.FC<Props> = ({ isOpen, onExit, onSaveAndExit, onReset }) => {
  return (
    <StyledModal
      contentStyles={{
        width: "50%",
        height: "50%",
      }}
      withCloseButton
      isOpen={isOpen}
      onRequestClose={onReset}
    >
      <div className="flex flex-col items-center justify-center gap-6 p-6 h-full rounded-lg shadow-lg">
        <p className="text-lg font-semibold text-gray-800">You have unsaved changes</p>
        <div className="flex items-center justify-center gap-6 w-full">
          <Button onClick={onExit} className="bg-red-500 hover:bg-red-600 text-white">
            Exit anyway
          </Button>
          <Button onClick={onSaveAndExit} className="bg-blue-500 hover:bg-blue-600 text-white">
            Save and Exit
          </Button>
        </div>
      </div>
    </StyledModal>
  );
};

export default SaveReminder;
