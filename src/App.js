import './App.css';
import SampleContextProvider from './Contexts/sampleContext'
import ShowName from './Components/ShowName'
import ChangeName from './Components/ChangeName';

function App() {
  return (
    <div className="App">
      <SampleContextProvider>
        <ShowName />
        <ChangeName />
      </SampleContextProvider>
    </div>
  );
}

export default App;
