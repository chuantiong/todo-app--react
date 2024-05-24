import './App.scss';
import Background from './components/Background';
import Header from './components/Header';
import TodoForm from './components/TodoForm';
import TodoList from './components/TodoList';
import { DataProvider } from './contexts/DataContext';

const App = () => {

  return (
    <div className='container'>
      <Background />
      <Header />
      <DataProvider>
        <div className="main">
          <TodoForm />
          <TodoList />
        </div>
      </DataProvider>
    </div>
  )
}

export default App;
