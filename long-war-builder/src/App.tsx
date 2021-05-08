import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Empty from './pages/Empty';
import MissionTracker from './pages/MissionTracker';
import SoldierBuilder from './pages/SoldierBuilder';

const App = (): JSX.Element => {
  return (
    <Router>
      <div className="App">
        <div
          className="bg-background bg-no-repeat bg-cover bg-local h-screen w-screen flex flex-wrap content-center justify-center py-6"
          id="background-image"
        >
          <div className="bg-darkGray bg-opacity-80 h-full w-4/5 rounded-lg" id="grey-box">
            <Switch>
              <Route exact path="/">
                <Empty />
              </Route>
              <Route path="/build/:code?">
                <SoldierBuilder />
              </Route>
              <Route exact path="/missions">
                <MissionTracker />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
