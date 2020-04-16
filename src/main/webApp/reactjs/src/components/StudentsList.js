import React from 'react';
import { Table, Badge, Spinner } from 'react-bootstrap';
import { getAllstrudents } from '../client';

const StudentsList = () => {
  const [students, setStudents] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

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
        <td colSpan="100">No students found</td>
      </tr>
    );
  };

  return (
    <Table striped bordered hover>
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
            <td colSpan="100">
              <Spinner animation="grow" />
            </td>
          </tr>
        ) : (
          studentRow()
        )}
      </tbody>
    </Table>
  );
};

export default StudentsList;
