import QueryInput from "./components/QueryHistory";
import QueryHistory from "./components/QueryInput";
import ResultsDisplay from "./components/ResultsDisplay";


function App() {
  return (
 <div>
    <h1>Data Query Dashboard</h1>
    <QueryInput />
    <QueryHistory />
    <ResultsDisplay />

 </div>   
  )
}
export default App;
