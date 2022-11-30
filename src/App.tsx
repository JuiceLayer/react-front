import { FC } from 'react';

//style
import './App.css';

//components
import Header from "./Components/Header/Header" //TODO change to nav bar
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
