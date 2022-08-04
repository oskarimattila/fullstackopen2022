import { useState } from 'react'
import Person from './Person'
const App = () => {
  const [persons, setPersons] = useState([
      { name: 'Arto Hellas', number: '040-123456', id: 1 },
      { name: 'Ada Lovelace', number: '39-44-5323523', id: 2 },
      { name: 'Dan Abramov', number: '12-43-234345', id: 3 },
      { name: 'Mary Poppendieck', number: '39-23-6423122', id: 4 }
  ]) 
  const [newName, setNewName] = useState('')
  const [newNumber, setNewNumber] = useState('')
  const [newFilter, setNewFilter] = useState('')

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
  // const filterPersons = (event) => {
  //   event.preventDefault()
  //   persons.filter( i => i.includes(newFilter))
  // }
  const addPerson = (event) => {
    event.preventDefault()
    if (!persons.map(person => person.name).includes(newName)) {
      const person = {
        name: newName,
        number: newNumber,
        id: persons.length + 1
      }
      setPersons(persons.concat(person))
      setNewName('')
      setNewNumber('')
    }
    else window.alert(`${newName} is already added to phonebook`)
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
        {persons.filter(person => (person.name.toLowerCase()).includes(newFilter)).map( person =>
          <Person key={person.id} name={person.name} number={person.number} />
          )}
      </ul>
      debug: name {newFilter}
    </div>
    
  )
}

export default App