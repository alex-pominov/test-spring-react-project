import React from 'react';
import {Badge, Button, Card, Spinner, Table} from 'react-bootstrap';
import {getAllstrudents} from '../client';
import './Style.css';
import AddStudentModal from './AddStudentModal';

const StudentsList = () => {
  const [students, setStudents] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const [showAddStudentModal, setShowAddStudentModal] = React.useState(true);

  const handleCloseModal = () => setShowAddStudentModal(false);
  const handleShowModal = () => setShowAddStudentModal(true);

  const fetchData = () => {
    setLoading(true);
    getAllstrudents()
      .then((res) => res.data)
      .then((data) => {
        setStudents(data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  };

  React.useEffect(() => {
    fetchData();
  }, []);

  const studentRow = () => {
    if (students.length !== 0) {
      return students.map((student, i) => (
        <tr key={student.studentId}>
          <td>{i + 1}</td>
          <td align="center">
            <Badge variant="primary" pill>{`${student.firstName
              .charAt(0)
              .toUpperCase()}${student.lastName.charAt(0).toUpperCase()}`}</Badge>
          </td>
          <td>{student.firstName}</td>
          <td>{student.lastName}</td>
          <td>{student.email}</td>
        </tr>
      ));
    }
    return (
      <tr align="center">
        <td colSpan="5">No students found</td>
      </tr>
    );
  };

  return (
    <>
      <AddStudentModal show={showAddStudentModal} handleClose={() => handleCloseModal()} />
      <Card className="border border-dark bg-dark text-white card-margins">
        <Card.Header>
          <h1>List of the students</h1>
        </Card.Header>
        <Card.Body>
          <Table bordered hover striped variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th>Avatar</th>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {loading ? (
                <tr align="center">
                  <td colSpan="5">
                    <Spinner animation="grow" />
                  </td>
                </tr>
              ) : (
                studentRow()
              )}
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer className="flexSpaceBtw">
          {students.length !== 0 && `Amount of students - ${students.length}`}

          <Button size="sm" variant="success" type="submit" onClick={() => handleShowModal()}>
            Add new Student
          </Button>
        </Card.Footer>
      </Card>
    </>
  );
};

export default StudentsList;
