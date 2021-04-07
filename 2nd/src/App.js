
import './App.css';
import Timer from './Component/3timer'
import Jsx from './Component/2Jsx'
import Parent from './Component/4ClassComponent'
import First from './Component/1'
import {Route, Switch,BrowserRouter} from 'react-router-dom';
import Home from './Component/Home';
import ApiCall from './Component/Api';


function App() {
  return (
  <>
  <BrowserRouter>
      
      <Switch>
      <Route exact path="/" component={Home}/>
         <Route exact path="/1" component={First}/>
         <Route exact path="/2" component={Jsx}/>
         <Route exact path="/3" component={Timer}/>
         <Route exact path="/4" component={Parent}/>
         <Route exact path="/5" component={ApiCall}/>


         

 
      </Switch>
      
       </BrowserRouter>
 
  </>
  );
}

export default App;
