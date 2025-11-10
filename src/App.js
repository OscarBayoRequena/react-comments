import logo from './logo.svg';
import './resources/styles/App.css';
import Comment from './components/Comment';

function App() {
  return (
    <div className="App">
      <h1>Estos son algunos comentarios de nuestros usuarios:</h1>
      <div className='content-container'>
        <Comment />
      </div>
    </div>
  );
}

export default App;
