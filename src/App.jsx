import './App.sass';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Error from './components/error/Error';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Provider } from 'react-redux'
import store from "./store"

function App() {
  return (
    <>
    <Provider store={store}>
    <Router>
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main className="main">
            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/" component={ Error } />
            </Switch>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
    </Provider>
    </>
  );
}

export default App;

