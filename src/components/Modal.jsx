import OutsideClickHandler from "react-outside-click-handler";
import FileActions from "./FileActions";
const Modal = ({ data, visibilityState, handleVisibility, closeModal }) => {
  console.log(data);
  return (
    <div
      className={`fixed flex  transition-all duration-200 justify-center items-center ${
        visibilityState ? "bg-opacity-90 z-10" : "bg-opacity-0 -z-10"
      }  bg-black  h-screen w-screen  top-0`}
    >
      <OutsideClickHandler onOutsideClick={closeModal}>
        <img
          className={`w-auto h-auto ${
            visibilityState ? "scale-up-center" : "scale-inner-center"
          }`}
          src={data !== undefined && data.source}
          alt="image"
        />
        {visibilityState && <FileActions file={data} />}
      </OutsideClickHandler>
    </div>
  );
};

export default Modal;
