import Clock from "./components/widgets/clock/Clock";
import Notes from "./components/widgets/notes/Notes";
import Weather from "./components/widgets/weather/Weather";

function App() {
  return (
    <div className="container">
      <h1>Widget App</h1>
      <hr></hr>
      <div className="row">
        <div className="col-sm">
          <Clock />
        </div>
        <div className="col-sm">
          <Notes />
        </div>
        <div className="col-sm">
          <Weather />
        </div>
      </div>
    </div>
  );
}

export default App;
