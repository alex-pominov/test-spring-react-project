import {Modal} from 'react-bootstrap';
import Form from './Forms/AddStudentForm';

const AddStudentModal = (props) => {
  const { show, handleClose } = props;

  return (
    <Modal show={show} onHide={handleClose}>


      <Modal.Body className="border-secondary bg-dark text-white">
        <Modal.Title>Add new student</Modal.Title>
        <hr style={{background: "#535353 "}} />
        <Form />
      </Modal.Body>
    </Modal>
  );
};

export default AddStudentModal;
