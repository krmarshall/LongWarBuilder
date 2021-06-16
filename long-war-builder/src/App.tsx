import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import About from './pages/About';
import BasePlanner from './pages/BaseBuilder';
import Empty from './pages/Empty';
import MissionTracker from './pages/MissionTracker';
import MissionTrackerAbout from './pages/MissionTrackerAbout';
import SoldierBuilder from './pages/SoldierBuilder';
import BaseStateProvider from './context/baseContext';

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
              <Route exact path="/missions/about">
                <MissionTrackerAbout />
              </Route>
              <Route exact path="/base/:code?">
                <BaseStateProvider>
                  <BasePlanner />
                </BaseStateProvider>
              </Route>
              <Route exact path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
