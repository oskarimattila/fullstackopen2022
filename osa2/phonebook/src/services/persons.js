import axios from 'axios'
const baseUrl = './api/persons'

// This file is supposed to take care of the communication happening between the server and database
/*
    1. get all persons from database
    2. upload new persons to db when they get added in the frontend
    3. eventually delete persons
*/

const getPersons = () => {
 const request = axios.get(baseUrl)
 return (
  request
    .then(response => response.data)
    .catch(error => {console.log('Could not retrieve the persons', error)})
 )
}
const postPerson = (person) => {
  const request = axios.post(baseUrl, person)
  return (
    request
      .then(response => response.data)
      .catch(error => {console.log('Could not add the person', error)})
   )
}
const deletePerson = id => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return (
    request
      .then(response => response)
      .catch(error => error)
  )
}
const putNumber = person => {
  const request = axios.put(`${baseUrl}/${person.id}`, person)
  return (
    request
      .then(response => response.data)
      .catch(error => {console.log(`Could not update the number of ${person.name}`, error)})
  )
}

const exportObj = {
  getPersons,
  postPerson,
  deletePerson,
  putNumber
}

export default exportObj