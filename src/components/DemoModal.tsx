import Modal from "@/components/Modal";
import useModal from "@/components/Modal/useModal";

const DemoModal = () => {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        <Modal.Title>Modal Title</Modal.Title>
        <Modal.Body>
          <div>This is the content of the modal.</div>
        </Modal.Body>
        <Modal.Actions>
          <button onClick={handleClose}>Act 1</button>
          <button onClick={handleClose}>Act 2</button>
        </Modal.Actions>
      </Modal>
      <button onClick={handleOpen}>Open Modal</button>
    </>
  );
};

export default DemoModal;
