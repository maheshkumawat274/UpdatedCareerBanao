import { ButtonProps, Modal, ModalProps } from "antd";
import React, { useState } from "react";
import "./Modal.css";


interface childreProps {
  children?: React.ReactNode;
  open: ModalProps["open"];
  loading?: ModalProps["confirmLoading"];
  title?: ModalProps["title"];
  okIcon?: ButtonProps["icon"];
  okText?: ModalProps["okText"];
  cancelText?: ModalProps["cancelText"];
  cancelIcon?: ButtonProps["icon"];
  submitHandler: ModalProps["onOk"];
  cancelHandler: () => void;
}

const MyModal = ({
  children, 
  open,
  loading,
  title,
  okIcon,
  cancelIcon,
  okText = "Submit",
  cancelText = "Cancel",
  submitHandler,
  cancelHandler,
}: childreProps) => {
  const [isHovered, setIsHovered] = useState(false);
  return (
    
    <Modal
    
      open={open}
      onCancel={cancelHandler}
      onOk={submitHandler}
      confirmLoading={loading}
      okButtonProps={{
        icon: okIcon,
        style: {
          backgroundColor: isHovered ? "#D461BA" : "#983fd4", // Change color on hover
          transition: "background-color 0.3s ease", // Smooth transition
        },
        onMouseEnter: () => setIsHovered(true), // Set hover state to true
        onMouseLeave: () => setIsHovered(false), // Reset hover state to false
      }}
      cancelButtonProps={{ icon: cancelIcon }}
      okText={okText}
      cancelText={cancelText}
      title={title}
      width={750}
      className="custom-modal"
    >
      {children}
    </Modal>
  );
};

export default MyModal;
