import { useState, useEffect } from 'react'
import Filter from './components/Filter'
import Notification from './components/Notification'
import PersonForm from './components/PersonForm'
import personService from './services/persons.js'
import './index.css'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')
  const [message, setMessage] = useState(null)
  const [isError, setError] = useState(false)

  const clearMessage = () => {
    setTimeout(() => {
      setMessage(null)
      setError(false)
    }, 5000)
  }

  const showPersons = () => {
    personService
      .getPersons()
      .then(personsFromDb => {
        setPersons(personsFromDb)
      })
  }
  useEffect(showPersons, [])

  const addPerson = (event) => {
    event.preventDefault()
    if (!persons.map(person => person.name.toLowerCase()).includes(newName.toLowerCase())) {
      const person = {
        name: newName,
        number: newNumber,
      }
      personService
        .postPerson(person)
        .then(postedPerson => {
          setPersons(persons.concat(postedPerson))
          setNewName('')
          setNewNumber('')
          console.log('Operation successful, person added', postedPerson)
          setMessage(
            `${postedPerson.name} added succesfully`
          )
          clearMessage()
        })
    }
    else {
      if (window.confirm(`${newName} is already added to phonebook, replace the old number with a new one?`)) {
        const otherPerson = persons.find(person => person.name.toLowerCase() === newName.toLowerCase())
        const changedPerson = {...otherPerson, number: newNumber}
        personService
          .putNumber(changedPerson)
          .then(dbResponse => {
            setPersons(persons.map(person => person.name === otherPerson.name ? changedPerson : person))
            setNewName('')
            setNewNumber('')
            console.log('Operation successful, number changed', dbResponse)
            setMessage(
              `${dbResponse.name} added succesfully`
            )
            clearMessage()
          })
      }
      
    }
  }

  const handleNameChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }
  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleFilter = (event => {
    setNewFilter(event.target.value)
  })
  const removePerson = person => {
    const id = person.id
    if (window.confirm(`Delete ${person.name}?`)) {  
      personService
        .deletePerson(id)
        .then(dbResponse => {
          if (dbResponse.status === 200) {
            setPersons(persons.filter(person => person.id !== id))
            console.log('dBresponse:', dbResponse)
            setMessage(
              `${person.name} deleted successfully`
            )
            clearMessage()
          }
          else {
            console.log(`Could not delete ${person.name}`)
            setError(true)
            setMessage(
              `${person.name} has already been deleted`
            )
            clearMessage()
            setPersons(persons.filter(person => person.id !== id))
          }
        })
        // .catch(error => {
        //   setMessage(
        //     `${person.name} has already been deleted`
        //   )
        //   setError(true)
        //   clearMessage()
        // })
    }
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <Notification message={message} isError={isError}/>
      <h2>Add a person</h2>
      <PersonForm
        addPerson={addPerson}
        newName={newName}
        handleNameChange={handleNameChange}
        newNumber={newNumber}
        handleNumberChange={handleNumberChange}
      />
      <h2>Numbers</h2>
      <h3>Filter the results</h3>
      <Filter
        newFilter={newFilter}
        handleFilter={handleFilter}
        persons={persons}
        removePerson={removePerson}
      />
    </div>
    
  )
}

export default App