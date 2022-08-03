import TodoApp from "./components/TodoApp"
import ThemeContext from './components/plasmic/copy_of_todo_mvc/PlasmicGlobalVariant__Theme';

function App() {
  return (
      <ThemeContext.Provider value={undefined}>
          <TodoApp />
      </ThemeContext.Provider>
  );
}

export default App;
