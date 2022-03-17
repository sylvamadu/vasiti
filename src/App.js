
import './App.scss';
import React from 'react'
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from '../src/Hoc/Home';
import Header from '../src/Hoc/Header';
import Footer from '../src/Hoc/Footer';
import DetailsForm from './Hoc/DetailsForm';








function App(){

  return(
    <BrowserRouter>
      <div className="app">
        <Header />
        <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/form'} component={DetailsForm} />
        </Switch>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App;
