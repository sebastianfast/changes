import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import tw from 'twin.macro';
import Menu from './components/menu/menu';
import HomePage from './pages/home';
import BeforeAfterPage from './pages/beforeAfter';

const Root = tw.div``;
const Container = tw.div`mx-auto max-w-7xl`;

function App() {
  return (
    <Router basename="/changes">
      <Root>
        <Container>
          <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/ba/:id" component={BeforeAfterPage} />
          </Switch>
        </Container>

        <Menu prefix="/ba" listUrl="/ba/list.json" />
      </Root>
    </Router>
  );
}

export default App;
