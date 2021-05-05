import { useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Empty from './pages/Empty';
import SoldierBuilder from './pages/SoldierBuilder';
import { PerkImage } from './types/enums/PerkEnums';

const App = (): JSX.Element => {
  useEffect(() => {
    const imageKeys = Object.keys(PerkImage);
    console.log(imageKeys);
    imageKeys.map((key) => {
      const image = new Image();
      // @ts-expect-error 7053
      image.src = `${process.env.PUBLIC_URL}/${PerkImage[key]}`;
      console.log(image.src);
    });
  });

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
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
