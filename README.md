<video src='modal.mp4' width=500></video>


## Run

```bash
yarn dev
```

## Usage

To use the Modal component, follow these steps:

1. Import the Modal component and the `useModal` hook:

```javascript
import Modal from "@/components/Modal";
```

2. Create a functional component to render the modal:

```javascript
const DemoModal = () => {
  const { open, handleOpen, handleClose } = useModal();

  return (
    <>
      <Modal open={open} onClose={handleClose}>
        {/* Modal content goes here */}
      </Modal>
      <button onClick={handleOpen}>Open Modal</button>
    </>
  );
};
```

3. Inside the `Modal` component, you can add the following components:

- `Modal.Title`: Renders the title of the modal. It accepts the `onClose` prop, which is a function to be called when the close button is clicked.

- `Modal.Body`: Renders the body content of the modal.

- `Modal.Actions`: Renders the action buttons of the modal.

Here's an example of how to use these components:

```javascript
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
```

## Props

The Modal component accepts the following props:

| Prop     | Type     | Description                                      |
| -------- | -------- | ------------------------------------------------ |
| open     | boolean  | Determines whether the modal is open or closed.  |
| onClose  | function | Callback function to be called when modal closes. |
| children | ReactNode | The content to be rendered inside the modal.      |

## Example

Here's an example of how to use the Modal component:

```javascript
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
```
