import './App.scss';
import Background from './components/Background';
import Header from './components/Header';
import Todo from './components/Todo';

const App = () => {

  return (
    <div className='container'>
      <Background />
      <Header />
      <div className="main">
        <div className="todo-wrapper">
          <Todo />
        </div>
      </div>
    </div>
  )
}

export default App;
