import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import React from "react";
import Header from "./components/Header";
import Sidebar from "./components/Sidebar.js";
import Chat from "./components/Chat.js";
import Login from "./components/Login";
import { useStateValue } from "./StateProvider";

function App() {
  const [{ user }, dispatch] = useStateValue();

  return (
    <div className="app">
      <Router>
        {!user ? (
          <Login />
        ) : (
          <>
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
          </>
        )}
      </Router>
    </div>
  );
}

export default App;
