import './App.css';
import CalculateScore from './Components/CalculateScore';

function App() {

  return (
    <div>

      <CalculateScore
        name="Harshitha"
        school="Kalasalingam Academy"
        total={500}
        goal={450}
      />

    </div>
  );
}

export default App;
