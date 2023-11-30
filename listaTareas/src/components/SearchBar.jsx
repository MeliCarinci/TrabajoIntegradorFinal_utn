import React from 'react'

function SearchBar({onSearch}) {
  return (
    <form>
        <input type="search" name="search" id="search"
        aria-label='escriba su búsqueda'
        placeholder='Busque la tarea a completar ...'
        onChange={(e) => onSearch(e.target.value)} />
    </form>
  )
}

export default SearchBar
