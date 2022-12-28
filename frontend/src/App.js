import  './style.css';
import Timer from './components/Timer';
import Sidebar from './components/Sidebar';
import {Helmet} from "react-helmet";
function App() {
  return (
    <div className="App">
      <Timer />
      <Sidebar />

    </div>
  );
}

export default App;
