import axios from 'axios'
const baseUrl = 'http://localhost:3001/persons'

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
      .then(response => response.data)
      .catch(error => {console.log('Person could not be removed', error)})
  )
}

export default {getPersons, postPerson, deletePerson}