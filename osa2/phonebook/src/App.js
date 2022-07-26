import { useState } from 'react'
import Person from './Person'
const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', id: 1 }
  ]) 
  const [newName, setNewName] = useState('')

  const handleChange = (event) => {
    console.log(event.target.value)
    setNewName(event.target.value)
  }

  const addPerson = (event) => {
    event.preventDefault()
    const person = {
      name: newName,
      id: persons.length + 1
    }
    setPersons(persons.concat(person))
    setNewName("")
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <form onSubmit={addPerson}>
        name: <input value={newName} onChange={handleChange}/>
        <button type="submit">add</button>
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map( person =>
          <Person key={person.id} name={person.name} />
          )}
      </ul>


      <div>debug: {newName}</div>
    </div>
    
  )
}

export default App