import React from 'react';
import Collapsible from 'react-collapsible';
import { Link } from 'react-router-dom';
import aws_exports from '../aws-exports';
import 'bootstrap/dist/css/bootstrap.min.css';

class login extends React.Component{
   render(){
      return(

 <div class="container">
 <div class="col-md-6">
    <div id="logbox">
      <form id="signup" method="post" action="/signup">
        <h1>account login</h1>
        <input name="user[email]" type="email" placeholder="enter your email" class="input pass"/>
        <input name="user[password]" type="password" placeholder="enter your password" required="required" class="input pass"/>
        <input type="submit" value="Sign me in!" class="inputButton"/>
        <div class="text-center">
                            <Link to="/signup" >

                    <a href="#" id="">Create An Account</a> - <a href="#" id="">forgot password</a>
                    </Link>
                </div>
      </form>
    </div>
    </div>
  </div>
  
     
         )
   }
};

export default login;
