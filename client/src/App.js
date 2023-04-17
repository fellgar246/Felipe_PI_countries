import { Landing, Home, FormPage, Detail } from "./pages";
import { BrowserRouter, Switch, Route } from "react-router-dom";

function App() {
 
  return (
    <>
     <BrowserRouter>
        <Switch>
          <Route path='/' exact >
            <Landing/>
          </Route>
          <Route path='/home'>
            <Home />
          </Route>
          <Route path='/form'>
            <FormPage />
          </Route>
          <Route path="/detail/:idPais">
            <Detail />
          </Route>
        </Switch>
     </BrowserRouter> 
    </>
  );
}

export default App;
