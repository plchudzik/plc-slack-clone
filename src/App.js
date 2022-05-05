import "./App.css";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import Chat from "./components/Chat.js";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Router>
        <Header />
        <div className="app__body">
          <Sidebar />
          <Routes>
            <Route exact path="/room/:roomId" element={<Chat />}></Route>
            {/* <Route path="/">
              <h1>Welcome</h1>
            </Route> */}
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
