import { useState, useEffect } from 'react'
import axios from 'axios'

const App = () => {
  const [countries, setCountries] = useState([]) 
  const [newFilter, setNewFilter] = useState('')

  const hook = () => {
    axios
      .get('https://restcountries.com/v3.1/all')
      .then(response => {
        setCountries(response.data)
        console.log('Countries:', response.data)
      })
  }

  useEffect(hook, [])

  const handleFilter = (event => {
    setNewFilter(event.target.value)
  })
  let results = countries.filter(country => (country.name.common.toLowerCase()).includes(newFilter.toLowerCase()))
  console.log('results: ', results)
  if (results.length === 1) {
    const result = results[0]
    const languages = Object.values(result.languages)
    console.log('languages:', languages)
    return (
      <div>
        <h1>countryfindr</h1>
        <h2>find a country</h2>
        <form>
          <div><input value={newFilter} onChange={handleFilter}/></div>
        </form>
        <p>Capital: {result.capital}</p>
        <p>Area: {result.area}</p>
        Languages:
        <ul>
          {languages.map( (lang, i) => 
            <li key={i}>{lang}</li>
          )}
        </ul>
        <img src={result.flags.png} alt="" />

      </div>
    )
  }
  else if (results.length <= 10) {
    return (
      <div>
        <h1>countryfindr</h1>
        <h2>find a country</h2>
        <form>
          <div><input value={newFilter} onChange={handleFilter}/></div>
        </form>
        <ul>
          {results.map((country, index) => 
            <li key={index}>{country.name.common}</li>
          )}
        </ul>
      </div>
    )
  } else {
    return (
      <div>
        <h1>countryfindr</h1>
        <h2>find a country</h2>
        <form>
          <div><input value={newFilter} onChange={handleFilter}/></div>
        </form>
        <p>Too many matches, specify the filter</p>
      </div>
    )
  }

    
  
}

export default App