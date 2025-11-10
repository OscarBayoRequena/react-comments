import logo from './logo.svg';
import './resources/styles/App.css';
import Comment from './components/Comment';

function App() {

  let comments = require('./resources/data/comments.json');
  let data = comments.comments[0]
  return (
    <div className="App">
      <h1>Estos son algunos comentarios de nuestros usuarios:</h1>
      <div className='content-container'>
        <Comment data={data} />
      </div>
    </div>
  );
}

export default App;
