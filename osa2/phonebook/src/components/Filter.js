import Person from "./Person"

const Filter = ({newFilter, handleFilter, persons, removePerson}) => {
  return (
    <div>
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

export default Filter