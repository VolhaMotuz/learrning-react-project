import React, {Fragment} from 'react';
import Header from './components/common/header/header';
import Footer from './components/common/footer/footer';
import Preloader from './components/common/preloader/preloader';
//import ErrorBoundary from './components/common/errorBoundary/errorBoundary'
import './styles/style.scss';
import { BrowserRouter as Router, Route, Link, Switch  } from 'react-router-dom';
import { Suspense, lazy } from 'react';
//import MainPage from './containers/mainPage/mainPage';
//import AboutUs from './containers/aboutUs/aboutUs';

const MainPage = lazy(() => import('./containers/mainPage/mainPage'));
const AboutUs = lazy(() => import('./containers/aboutUs/aboutUs'));


class App extends React.Component {

  render() {
    return (
        <Fragment>
        <Header />
          <div className="wrapper">
            <div className="container grid--container content">
              <Router>
                <Suspense fallback={<div>Загрузка...</div>}>
                  <Switch>
                    <Route exact path="/" component={MainPage}/>
                    <Route path="/about" component={AboutUs}/>
                  </Switch>
                </Suspense>
              </Router>
             </div>
            </div>
          <Footer />
        </Fragment>
    );
  }
}

export default App;
