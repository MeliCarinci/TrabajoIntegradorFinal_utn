import React from 'react'

function Input({onAddTask}) {
 const handleSubmit =(e) => {
  e.preventDefault();
  const todoForm = new FormData(e.target);
  const description = todoForm.get('description');
  onAddTask(description);
  e.target.reset();
 };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="description" >Ingrese la Nueva Tarea: </label>
      <input type="text" name="description" id="description" required ></input>
      <input type="submit" value="Añadir" ></input>
    </form>
  );
}

export default Input
