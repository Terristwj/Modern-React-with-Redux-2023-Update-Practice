import { useState } from "react";
import Button from "../components/Button";
import Header from "../components/Header";
import Modal from "../components/Modal";
import WideButton from "../components/WideButton";
import { default as ModalClass } from "../models/Modal";

/**
 * ModalPage()
 * @summary - Open and close a modal.
 * @return {JSX.Element} - JSX element of ModalPage.
 */
function ModalPage(): JSX.Element {
  const [showModal, setShowModal] = useState(false);
  const [ModalInstance, setModal] = useState(new ModalClass());

  const Modals = new ModalClass().getModals();

  /**
   * Generate modal WideButton foreach modal
   */
  let renderModals: JSX.Element[] = [];
  for (let i = 0; i < Modals.length; i++) {
    renderModals.push(
      <WideButton
        key={i}
        wideBtnClassNames="text-center w-full mx-auto"
        JSXButton={
          <Button
            btnClassNames="w-3/4 my-5 mx-auto "
            onClick={() => {
              setModal(Modals[i]);
              setShowModal(true);
            }}
            btnTextClassNames="text-xl py-5 font-semibold "
            btnText={Modals[i].getTitle}
          />
        }
      />
    );
  }

  return (
    <div>
      <Header />
      {renderModals}
      {showModal && <Modal Modal={ModalInstance} setShowModal={setShowModal} />}
    </div>
  );
}

export default ModalPage;
