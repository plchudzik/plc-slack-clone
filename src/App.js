import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";

function App() {
  return (
    <div className="app">
      <Header />
      <div className="app__body">
        <Sidebar />
        {/* REACT-ROUTER -> chat screen*/}
      </div>
    </div>
  );
}

export default App;
