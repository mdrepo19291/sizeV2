import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

import NavBar from './components/NavBar';
import SideBar from './components/SideBar';
// import HomeContainer from './components/HomeContainer';
import './App.scss';

// import { MDBBtn } from 'mdbreact';
// import Carousal from './components/Carousal';
import Main from './sections/Main';
import SectionalHome from './sections/SectionalHome';
import Comparision from './sections/compare/Comparision';
import Footer from './components/Footer';
import Top10 from './sections/top10/Top10';

function App() {
  return (
    <>
      <Router>
        {/* Header */}
        <NavBar />
        <div className="nav-spacing" />
        <main className="">
          
          {/* <Main/>
          <HomeContainer title="Videos" >
          </HomeContainer> */}


        {/* Routing the main-section to be rendered */}
            <Switch>
              <Route path="/" component={Main} exact/>
              <Route path="/top10/:topicId" component={Top10} exact/>
              <Route path="/compare/:topicId" component={Comparision} exact/>
              <Route path="/videos/:topicId" component={Dummy} exact/>
              <Route path="/add-document" component={Dummy} exact/>
              <Route path="/videos" exact>
                <SectionalHome />
                {/* <Videos noComment={true}/> */}
              </Route>
              <Route path="/:sec"component={SectionalHome}/>
            </Switch>

          {/* <SideBar /> */}
        </main>

      </Router>

        {/* Footer */}
        <Footer />

    </>
  );
}

export default App;

const Dummy = () => <strong style={{color: 'grey'}}></strong>

