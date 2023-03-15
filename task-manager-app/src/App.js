import "./App.scss";
import Header from "./components/Header/Header"
import NavBar from "./components/NavBar/NavBar"
import Content from "./components/Content/Content"

function App() {
  return (
    <div id="container">
      <Header />
      <NavBar />
      <Content />
    </div>
  );
}

export default App;
