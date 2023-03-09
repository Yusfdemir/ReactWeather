import Dropdown from './component/Dropdown';
import { WeatherProvider } from './context/Weather';
import Card from './component/Card';
function App() {
  return (
    <>
    <WeatherProvider>
      <Dropdown></Dropdown>
      <Card></Card>
      </WeatherProvider>
    </>
  );
}

export default App;
