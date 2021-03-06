import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './Home';
import Contact from './Contact';
import About from './About';

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App
