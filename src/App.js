import logo from './logo.svg';
import './resources/styles/App.css';
import Comment from './components/Comment';

function App() {

  let data = {
    pic: "doge.png",
    user: "xX_MasterOfTheDark_Xx",
    background: "Meme page Owner",
    comment: "Pues la verdad que no se que hago aquí pero ya qe estoy por aquí voy a hacer spam de mi página web de memes. Nunca se pueden tener suficientes memes."
  }

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
