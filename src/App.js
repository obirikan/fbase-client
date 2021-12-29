import './App.css';
import { BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import {useState} from 'react'
import HeadSection from './components/HeadSection';
import Content from './components/Content';
import Admin from './components/Admin.jsx'
import Page from './components/Page';

function App() {
 const [name,setName]=useState('')
 const [url,seturl]=useState('')
 const [description,setdes]=useState('')
 const [status,setStatus]=useState([])
 
 
  return (
  <div className="App">
    <Router>
      <Switch>
       <Route
        path="/"
        exact
        render={(props)=>(
          <>
          <HeadSection/>
          <Content status={status} setStatus={setStatus}/>
          </>
        )}/>   
        <Route
        path="/admin"
        render={(props)=>(
          <Admin 
          name={name}
          url={url}
          setName={setName}
          seturl={seturl}
          description={description}
          setdes={setdes}
          status={status}
          setStatus={setStatus}
          />
        )}/>
      <Route path='/page/:id' component={Page}/>
      </Switch>
      </Router>
  </div>
  );
}
export default App;