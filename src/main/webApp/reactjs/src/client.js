import axios from 'axios';

const checkStatus = (response) => {
  if (response.status === 404 || response.status === 200) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  response.json().then((e) => {
    error.error = e;
  });
  return Promise.reject(error);
};

export const getAllstrudents = () =>
  axios.get('http://localhost:8080/rest/students').then(checkStatus);

export const addNewStudent = (student) =>
  axios.post('http://localhost:8080/rest/students', student).then(checkStatus);
