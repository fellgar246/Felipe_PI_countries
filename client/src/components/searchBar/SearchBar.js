import { useState } from "react"

const SearchBar = (props) => {
  const [country, setCountry] = useState('')

  const handleInput = (event) => {
    setCountry(event.target.value)
  }
  return (
    <div>
      <input
        type="text"
        placeholder="search by country"
        onChange={(event) => handleInput(event)}
        value={country}
      ></input>
      <button
        onClick={()=>props.onSearch(country)}
      >Search</button>
    </div>
  )
}

export default SearchBar