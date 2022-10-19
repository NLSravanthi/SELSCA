import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import overview from './pages/overview';
import { academics,attendance,studentwise,subjectwise } from './pages/classreport';
import postattendance from './pages/postattendance';
import postmarks from './pages/postmarks';
import middaymeals from './pages/middaymeals';
import sports from './pages/sports';
import studentdetails from './pages/studentdetails';
import entry from './pages/entry';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={overview} />
          <Route path='/postattendance' component={postattendance} />
          <Route path='/postmarks' component={postmarks} />
          <Route path='/middaymeals' component={middaymeals} />
          <Route path='/sports' component={sports} />
          <Route path='/studentdetails' component={studentdetails} />
          <Route path='/classreport/academics' component={academics} />
          <Route path='/classreport/attendance' component={attendance} />
          <Route path='/classreport/subjectwise' component={subjectwise} />
          <Route path='/classreport/studentwise' component={studentwise} />
          <Route path='/entry' component={entry} />
          </Switch>
      </Router>
    </>
  );
}
 
export default App;
