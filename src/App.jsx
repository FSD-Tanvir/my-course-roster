import "./App.css";
import Enrolled from "./components/Enrolled";
import Header from "./components/Header";
import Courses from "./components/courses";

function App() {
  return (
    <>
      <Header></Header>
      <div className="md:flex gap-3">
        <Courses></Courses>
        <Enrolled></Enrolled>
      </div>
    </>
  );
}

export default App;
