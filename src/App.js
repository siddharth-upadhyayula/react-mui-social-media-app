import Feed from './components/Feed';
import Rightbar from './components/Rightbar';
import Sidebar from './components/Sidebar';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Feed />
      <Rightbar />
    </div>
  );
}

export default App;
