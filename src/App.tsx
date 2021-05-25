import SauceIndex from "./pages/SauceIndex";
import SauceShow from "./pages/SauceShow";
import { Route, BrowserRouter } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Route exact path="/" component={SauceIndex} />
        <Route exact path="/:id" component={SauceShow} />
      </BrowserRouter>
    </div>
  );
};

export default App;
