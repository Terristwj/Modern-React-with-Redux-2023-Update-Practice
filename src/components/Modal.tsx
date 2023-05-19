import ReactDOM from "react-dom";
import Button from "../components/Button";
import WideButton from "./WideButton";

/**
 * Modal()
 * @summary - Modal content.
 * @return {JSX.Element} - JSX element of Modal.
 */
function Modal(props: {
  text: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  function setShowModal(): void {
    props.setShowModal(false);
  }

  // createPortal allows for parent element to have position:relative
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={setShowModal}
        className="fixed inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="fixed inset-y-1/4 inset-x-3.5 p-10 bg-white ">
        <div className="h-3/4 overflow-y-scroll">
          <p className="text-justify text-4xl">{props.text}</p>
        </div>

        <WideButton
          wideBtnClassNames="text-center w-full mx-auto"
          JSXButton={
            <Button
              btnClassNames="mx-auto "
              onClick={setShowModal}
              btnTextClassNames="text-xl py-2 px-4 font-semibold "
              btnText="Close"
            />
          }
        />
      </div>
    </div>,
    document.querySelector(".modal-overlay")!
  );
}

export default Modal;
