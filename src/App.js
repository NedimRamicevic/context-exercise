import './App.css';
import SampleContextProvider from './Contexts/sampleContext'
import ShowName from './Components/ShowName'

function App() {
  return (
    <div className="App">
      <SampleContextProvider>
        <ShowName />
      </SampleContextProvider>
    </div>
  );
}

export default App;
