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

  const onAdd = (text) => {
    const newEntry = createEntry(text)
    setEntries([...entries, newEntry])
  }

  const onChange = ({id, ...rest}) => {
    let changedEntry = entries.find(entry => entry.id === id)
    changedEntry = {...changedEntry, ...rest }
    setEntries(entries.map(entry => {
      return entry.id !==id ? entry : changedEntry
    }))
  }

  const onDelete = (id) => {
    setEntries(entries.filter(entry => {
      return entry.id !== id
    }))
  }

  console.log(entries)

  return (
      <ThemeContext.Provider value={undefined}>
          <TodoApp 
            entries={entries} 
            handleAdd={onAdd}
            handleChange={onChange}
            handleDelete={onDelete}
            />
      </ThemeContext.Provider>
  );
}

export default App;
