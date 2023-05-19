import Button from "../components/Button";
import Header from "../components/Header";
import Modal from "../components/Modal";
import WideButton from "../components/WideButton";
import { useState } from "react";

function ModalPage(): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  return (
    <div>
      <Header />
      <WideButton
        wideBtnClassNames="text-center w-full mx-auto"
        JSXButton={
          <Button
            btnClassNames="w-3/4 my-5 mx-auto "
            onClick={() => setShowModal(!showModal)}
            btnTextClassNames="text-xl py-5 font-semibold "
            btnText="Open Modal"
          />
        }
      />
      {showModal && <Modal />}
    </div>
  );
}

export default ModalPage;
