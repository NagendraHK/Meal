import React from "react";
import './App.css';
import Nav from "./Nav"
import Shop from "./Shop";
import{BrowserRouter as Router,Switch, Route} from "react-router-dom"
import ItemDetail from "./ItemDetail";

function App() {
  return (
    <Router>
    <div className="App">
     <Nav/>
     <Switch> 
         <Route path="/shop" exact component={Shop}/>
     <Route path="/shop/:id" component={ItemDetail}/>
     </Switch>
        </div>
    </Router>
    
  );
}





export default App;
