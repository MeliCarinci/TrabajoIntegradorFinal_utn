import { useState, useEffect} from 'react'
import './App.css'
import Input from './components/Input'
import TaskList from './components/TaskList';
import SearchBar from './components/SearchBar';



function getTaskFromStorage(){
  const storedTasks = window.localStorage.getItem("tasks");
  const tasks = JSON.parse(storedTasks);
  return tasks ? tasks : [];

};

function App() {
  const [tasks, setTasks] = useState(getTaskFromStorage());
  const [filterTasks, setFilterTasks]= useState(tasks);
  const [searchQuery, setSearchQuery]= useState("");
  
  
    const handleAddTask = (description) => {
      const newTask ={
      id:self.crypto.randomUUID(),
      description: description,
      isCompleted: false
    };
    setTasks([...tasks,newTask]);
    setFilterTasks([...filterTasks,newTask])
   
  };

  const handleDelete = (id) =>{
    const remainingTasks = tasks.filter(t => t.id !== id);
    setTasks([...remainingTasks]);
    setFilterTasks([...remainingTasks])

  };

  const handleChangeTasks = (id) =>{
    const modifiedTasks = tasks.map(t =>
     t.id === id ?
     {...t,isCompleted: !t.isCompleted}
     :
     t
   );
   setTasks([...modifiedTasks]);
   setFilterTasks([...modifiedTasks]);

  };

  const handleSearchQuery = (query) =>{
    setSearchQuery(query);
    const queryResult = tasks.filter(t => t.description.toLocaleLowerCase().includes(query.toLocaleLowerCase()));
    setFilterTasks(queryResult);


  };

  useEffect(() => {
     if(tasks.length)
    window.localStorage.setItem("tasks", JSON.stringify(tasks));
  },[tasks]);

  return (
    <>

      <div className="titulo"><h1>Lista de Tareas</h1></div>
      <SearchBar onSearch={query => handleSearchQuery(query)}></SearchBar>

      <Input onAddTask={(description) => handleAddTask(description)}></Input>
      <TaskList onDeleteTask={(id)=> handleDelete(id)} tasks={filterTasks} onChangeTasks ={handleChangeTasks}>
      
      </TaskList>
    </>
  );
}

export default App
