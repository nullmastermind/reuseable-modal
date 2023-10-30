import React, { ReactNode, useMemo } from "react";

type ModalProps = {
  open: boolean;
  onClose: () => void;
  children: ReactNode;
};

type ModalTitleProps = {
  children: ReactNode;
  onClose?: () => void;
};

const Modal = ({ open, onClose, children }: ModalProps) => {
  const renderChildren = useMemo(() => {
    if (Array.isArray(children)) {
      return children.map((child) => {
        if (child.type === Modal.Title) {
          return React.cloneElement(child, { onClose });
        }
        return child;
      });
    }
    return children;
  }, [children, onClose]);

  return (
    <div className={`modal-overlay ${open ? "active" : ""}`} onClick={onClose}>
      <div className={`modal ${open ? "active" : ""}`}>
        <div className={`modal-content`}>{renderChildren}</div>
      </div>
    </div>
  );
};

Modal.Title = ({ children, onClose }: ModalTitleProps) => {
  return (
    <div className={`modal-title`}>
      <h1>{children}</h1>
      <div onClick={onClose}>❌</div>
    </div>
  );
};

Modal.Body = ({ children }: { children: ReactNode }) => {
  return <div>{children}</div>;
};

Modal.Actions = ({ children }: { children: ReactNode }) => {
  return <div className={`modal-actions`}>{children}</div>;
};

export default Modal;
