import { useState, useEffect } from 'react'
import Person from './Person'
import personService from './services/persons.js'

const App = () => {
  const [persons, setPersons] = useState([]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
    if (!persons.map(person => person.name).includes(newName)) {
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
        })
    }
    else window.alert(`${newName} is already added to phonebook`)
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
    window.confirm(`Delete ${person.name}?`)
    personService
      .deletePerson(id)
      .then(deletedPerson => {
        console.log('Deleted person:', deletedPerson)
      })
    setPersons(persons.filter(person => person.id != id))
  }

  return (
    <div>
      <h1>Phonebook</h1>
      <h2>Add a person</h2>
      <form onSubmit={addPerson}>
        <div>name: <input value={newName} onChange={handleNameChange}/></div>
        <div>number: <input value={newNumber} onChange={handleNumberChange}/></div>
        <div><button type="submit">add</button></div>
      </form>
      <h2>Numbers</h2>
      <h3>Filter the results</h3>
      <form>
        <div><input value={newFilter} onChange={handleFilter}/></div>
      </form>
      <ul>
        {persons.filter(person => (person.name.toLowerCase()).includes(newFilter.toLowerCase())).map( person =>
          <Person 
            key={person.id} 
            name={person.name} 
            number={person.number} 
            remove={() => removePerson(person)}
          />
          )}
      </ul>
    </div>
    
  )
}

export default App