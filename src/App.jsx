import './App.sass';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import Error from './components/error/Error';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { useCallback, useState, useMemo, React} from 'react'
import { Provider } from 'react-redux'
import ThemeContext , { THEMES } from './context/ThemeContext'
import store from "./store"

function App() {
  const [theme, setTheme] = useState('light')
  const toggleTheme = useCallback(() => {
    setTheme(t => t === "light" ? "dark" : "light");
  }, []);
  const themeValue = useMemo(() => {
    return {
      theme: theme === 'light' ? THEMES.light : THEMES.dark,
      toggleTheme
    }
  }, [toggleTheme, theme]);

  return (
    <>
      <ThemeContext.Provider value={themeValue}>
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
      </ThemeContext.Provider>
    </>
  );
}

export default App;

