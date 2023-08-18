import "./App.css";
import Header from "./Components/Header/Header";
import PageContent from "./Components/Layout/PageContent";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header />
        <PageContent />
      </div>
    </BrowserRouter>
  );
}

export default App;
