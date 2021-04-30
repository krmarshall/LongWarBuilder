import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import SoldierBuilder from './pages/SoldierBuilder';

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <div
          className="bg-background bg-no-repeat bg-cover bg-local h-screen w-screen flex flex-wrap content-center justify-center py-6"
          id="background-image"
        >
          <div className="bg-darkGray bg-opacity-95 h-full w-3/4 rounded-lg" id="grey-box">
            <Switch>
              <Route exact path="/">
                <SoldierBuilder />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
