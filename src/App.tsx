import { FC } from 'react';

//style
import './App.css';

//components
import Header from "./Components/Header/Header"
import Destinations from "./Components/Destinations/Destinations"


const App: FC = () => {
  return (
    <>
      <Header/>
      <Destinations/>
    </>
  );
}

export default App;
