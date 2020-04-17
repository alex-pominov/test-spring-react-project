import {Formik} from 'formik';
import {Button, Form} from 'react-bootstrap';
import {addNewStudent} from '../../client';

const AddStudentForm = (props) => (
  <Formik
    initialValues={{ firstName: '', lastName: '', email: '', gender: 'Choose...' }}
    validate={(values) => {
      const errors = {};
      if (!values.firstName) {
        errors.firstName = true;
      }
      if (!values.lastName) {
        errors.lastName = true;
      }
      if (values.gender === 'Choose...') {
        errors.gender = true;
      }

      if (!values.email) {
        errors.email = true;
      } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = 'Invalid email address';
      }
      return errors;
    }}
    onSubmit={(student, { setSubmitting }) => {
      addNewStudent({ ...student, gender: student.gender.toUpperCase() })
        .then(() => {
          props.onSuccess();
          setSubmitting(false);
        })
        .catch((errors) => console.log(errors));
    }}
  >
    {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
      <form onSubmit={handleSubmit}>
        <Form.Group controlId="formFirstName">
          <Form.Label>First Name</Form.Label>
          <Form.Control
            required
            style={errors.firstName && touched.firstName && { border: '1px solid red' }}
            type="text"
            name="firstName"
            placeholder="Enter student First Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.firstName}
          />
        </Form.Group>
        <Form.Group controlId="formLastName">
          <Form.Label>Last Name</Form.Label>
          <Form.Control
            required
            style={errors.lastName && touched.lastName && { border: '1px solid red' }}
            type="text"
            name="lastName"
            placeholder="Enter student Last Name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.lastName}
          />
        </Form.Group>
        <Form.Group controlId="formEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            style={errors.email && touched.email && { border: '1px solid red' }}
            type="email"
            name="email"
            placeholder="Enter student Email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email}
        </Form.Group>
        <Form.Group controlId="formGender">
          <Form.Label>Gender</Form.Label>
          <Form.Control
            style={errors.gender && touched.gender && { border: '1px solid red' }}
            as="select"
            name="gender"
            onChange={handleChange}
            value={values.gender}
            onBlur={handleBlur}
          >
            <option>Choose...</option>
            <option>Male</option>
            <option>Female</option>
          </Form.Control>
        </Form.Group>
        <hr style={{ background: '#535353' }} />
        <Form.Group controlId="formActions">
          <Button
            style={{ marginRight: '10px' }}
            variant="success"
            type="submit"
            disabled={isSubmitting}
          >
            Add new Student
          </Button>
          <Button variant="secondary" type="button" onClick={props.onClose}>
            Close
          </Button>
        </Form.Group>
      </form>
    )}
  </Formik>
);

export default AddStudentForm;
