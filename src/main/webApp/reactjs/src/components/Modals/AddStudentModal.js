import React from 'react';
import {Modal} from 'react-bootstrap';
import Form from '../Forms/AddStudentForm';
import Notification from '../Notifications';

const AddStudentModal = (props) => {
  const { show, handleClose, onFormSubmit } = props;
  const [showPopup, setShowPopup] = React.useState(false);

  const showPopupAndClose = () => {
    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
    }, 5000);
    onFormSubmit();
  };

  return (
    <>
      {showPopup && <Notification type="success" message="Student added successfully!" />}
      <Modal show={show} onHide={handleClose}>
        <Modal.Body className="border-secondary bg-dark text-white">
          <Modal.Title>Add new student</Modal.Title>
          <hr style={{ background: '#535353 ' }} />
          <Form onSuccess={() => showPopupAndClose()} onClose={handleClose} />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddStudentModal;
