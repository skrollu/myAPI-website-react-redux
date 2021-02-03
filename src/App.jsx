import './App.sass';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Error from './components/error/Error';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function App() {
  return (
    <>
    <Router>
      <div className="App">
        <header className="header">
          <Header />
        </header>
        <main className="main">
            <Switch>
              <Route path="/" exact component={ Home } />
              <Route path="/" component={Error} />
            </Switch>
        </main>
        <footer className="footer">
          <Footer />
        </footer>
      </div>
    </Router>
    </>
  );
}

export default App;

