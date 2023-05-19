import ReactDOM from "react-dom";

/**
 * Modal()
 * @summary - Modal content.
 * @return {JSX.Element} - JSX element of Modal.
 */
function Modal(props: {
  text: string;
  setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}): JSX.Element {
  // createPortal allows for parent element to have position:relative
  return ReactDOM.createPortal(
    <div>
      <div
        onClick={() => props.setShowModal(false)}
        className="absolute inset-0 bg-gray-300 opacity-80"
      ></div>
      <div className="absolute inset-40 p-10 bg-white">
        <div className="text-justify text-4xl">{props.text}</div>
      </div>
    </div>,
    document.querySelector(".modal-overlay")!
  );
}

export default Modal;
