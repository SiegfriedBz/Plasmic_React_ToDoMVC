import { useState } from "react"
import TodoApp from "./components/TodoApp"
import ThemeContext from './components/plasmic/copy_of_todo_mvc/PlasmicGlobalVariant__Theme';
import { 
  // Entry, 
  createEntry } from './model.ts'

function App() {
  
  const [entries, setEntries] = useState([
    createEntry("Go Jogging"),
    createEntry("Meet Alex in Theater")
  ])

  const handleChange = ({id, ...rest}) => {
    let changedEntry = entries.find(entry => entry.id === id)
    changedEntry = {...changedEntry, ...rest }
    setEntries(entries.map(entry => {
      return entry.id !==id ? entry : changedEntry
    }))
  }

  const handleDelete = (id) => {
    setEntries(entries.filter(entry => {
      return entry.id !== id
    }))
  }

  console.log(entries)

  return (
      <ThemeContext.Provider value={undefined}>
          <TodoApp 
            entries={entries} 
            handleChange={handleChange}
            handleDelete={handleDelete}
            />
      </ThemeContext.Provider>
  );
}

export default App;
