// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
// import { BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [mode, setMode] = useState("light");
  const toggleMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.background = "#1b2456";
      showAlert("Dark Mode has been Enabled", "success");
      document.title = "I am dark";
    } else {
      setMode("light");
      document.body.style.background = "white";
      showAlert("Light Mode has been Enabled", "success");
    }
  };

  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });

    setTimeout(() => {
      setAlert(null);
    }, 1500);
  };

  return (
    <>
      {/* <Router> */}
        <Navbar
          title="TextUtils"
          abouttext="About Us"
          mode={mode}
          toggleMode={toggleMode}
        ></Navbar>
        <Alert alert={alert}></Alert>
        <div className="container">
          {/* <Routes>
            <Route */}
              {/* exact
              path="/"
              element={ */}
                <TextForm
                  heading="Enter the text to analyze"
                  mode={mode}
                  showAlert={showAlert}
                  toggleMode={toggleMode}
                ></TextForm>
              {/* } */}
            {/* /> */}
            {/* <Route exact path="/about" element={<About />} />
          </Routes> */}
        </div>
      {/* </Router> */}
    </>
  );
}

export default App;
