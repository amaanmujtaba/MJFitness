
import Header from "./Components/Header.jsx";
import Input from "./Components/Input.jsx";
import Output from "./Components/Output.jsx";
import { useState } from 'react';
import { useRef, useEffect  } from 'react';
function App() {

    const [displayModal, setDisplayModal] = useState(false);
    const modalRef = useRef()
    const [inputValues, setInputValues] = useState({
      age: "",
      gender: "male",
      height: "",
      weight: "",
      goal: "bulk",
      days: "",
      experience: "beginner"
  });

    function handleClick() {
      setDisplayModal(true);
      if (modalRef.current) {
        modalRef.current.showModal();
      }
    }

    function handleClose() {
      setDisplayModal(false);
      if (modalRef.current && modalRef.current.close) { // Ensure modalRef.current exists and has the close method
        
          modalRef.current.close();
        
      }
    }

    

    function handleInputValues(values) {
      setInputValues(values);
    }

    return (
      <div className="App">
        <Header />
        <Input handleClick={handleClick} handleInputValues={handleInputValues} />
        <Output ref = {modalRef} handleClose = {handleClose} inputValues = {inputValues} />
      </div>
    );
}

export default App;
