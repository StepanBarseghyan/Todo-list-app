import './App.css';
import { useReducer } from 'react';
import Homepage from './pages/Homepage/Homepage';
import { NumberContext } from './context/NumberContext';
import reducer from './reducer';

function App() {
 
  const [state,dispatch] = useReducer(reducer,[])
  return (
    <NumberContext.Provider value={{state:state,dispatch:dispatch}}>
      <Homepage/>
    </NumberContext.Provider>
  );
}

export default App;
