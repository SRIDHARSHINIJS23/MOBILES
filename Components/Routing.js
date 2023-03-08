import React from 'react';

import {BrowserRouter as Router,Link,Route,Routes} from 'react-router-dom';
import Deleteform from './delete';
import UpdateForm from './edit';
import Mobiles from './mobilesmp';
import DataBaseView from './view';
function Routing(){
    return(
        <>
        
        <Router>
    <ul class="nav nav-tabs" >
  <li class="nav-item" >
    <Link to="/mobilesmp" class="nav-link">Order Now</Link>
  </li>
  <li class="nav-item">
    <Link to="/view" class="nav-link">Your Orders</Link>
  </li>
  <li class="nav-item">
    <Link to="/delete" class="nav-link">Cancel your orders</Link>
  </li>
  <li class="nav-item">
    <Link to="/edit" class="nav-link">Change the Order</Link>
  </li>

  
</ul>
<Routes>
  <Route path="/mobilesmp" element={<Mobiles/>}/>
  <Route path="/view" element={<DataBaseView/>}/>
  <Route path="/delete" element={<Deleteform/>}/>
  <Route path="/edit" element={<UpdateForm/>}/>
  
</Routes>
    </Router>
        </>
    );
}
export default Routing;