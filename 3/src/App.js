import './App.css';
import LeftTab from './LeftTab';
import RightTab from './RightTab';
function App() {
  return (
    <span class="container">
      <LeftTab className="LeftTab"></LeftTab>
      <RightTab className="RightTab"></RightTab>
    </span>
  );
}

export default App;
