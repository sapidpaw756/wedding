
import Header from './template/Header';
import Image from './template/Image';
import './App.css';

const pages =[{id:0, page: Header}, {id:1, page: Image}]

function App() {
  return (
    [pages.map(p => <div key={p.id}>
      <p.page/>
    </div>)]
  );
}


export default App;
