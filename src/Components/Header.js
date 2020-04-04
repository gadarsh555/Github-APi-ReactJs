import React,{ Component } from 'react';
import {Navbar,Nav} from 'react-bootstrap';
import '../App.css';


class Header extends Component {

onLogin(){
    this.props.onLogin();
}   

onLogout(){
    this.props.onLogout();
}

render(){
    var button;
    if(this.props.accessToken){
        button = <Nav.Link style={{color:"red",fontWeight:"700",fontSize:"110%"}} onClick={this.onLogout.bind(this)} href="#">Logout</Nav.Link>;
    }
    else {
        button = <Nav.Link style={{color:"blue",fontWeight:"700",fontSize:"110%"}} onClick={this.onLogin.bind(this)} href="#">Login</Nav.Link>;
       
    }
return(
     <div style={{backgroundColor:"lightgreen"}}>
         <Navbar>
              <Navbar.Brand>
                  Github Searcher
              </Navbar.Brand>
          <Nav>
              {button}
          </Nav>
      </Navbar>
  <div style={{borderTop:"3px solid green"}}></div>
     </div>
     
);
}
}

export default Header;