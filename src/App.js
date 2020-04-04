import React,{ Component } from 'react'
import logo from './logo.svg';
import './App.css';
import Github from './Github'
import Header from './Components/Header';
import User from './Components/User';
import 'bootstrap/dist/css/bootstrap.min.css';
import Auth0Lock from 'auth0-lock';


class App extends Component {

  constructor(props){
  super(props);
  this.state = {
    accessToken:'',
    profile : {}
  };
  this.showLock = this.showLock.bind(this);
  this.logout = this.logout.bind(this);
  }

  static defaultProps = {
    clientId : 'NY5ZdTQ0x9gDl6vm7m0TnAKP0N2PUwIX',
    domain : 'gaadrsh555.auth0.com'
  }

   componentWillMount(){
    this.lock = new Auth0Lock(this.props.clientId,this.props.domain);

    this.lock.on('authenticated', (authResult)=>{
        //console.log(authResult);
       //this.setState({accessToken : authResult.accessToken});

       this.lock.getProfile(authResult.accessToken,(error,profile)=>{
            if(error){
              console.log("eroror in getting profile",error);
              return;
            }
             // console.log(profile);
             this.setProfile(authResult.accessToken,profile);
       });
    });
     this.getProfile();
   }

   setProfile(accessToken,profile){
     localStorage.setItem('accessToken',accessToken);
     localStorage.setItem('profile',JSON.stringify(profile));

     this.setState({
       accessToken : localStorage.getItem('accessToken'),
       profile : JSON.parse(localStorage.getItem('profile'))
     });
     console.log("state is set now:",this.state.accessToken,this.state.profile);
   }
   
   getProfile(){
     if(localStorage.getItem('accessToken')!= null){
      this.setState({
        accessToken : localStorage.getItem('accessToken'),
        profile : JSON.parse(localStorage.getItem('profile'))
      },()=>{
        console.log("getProfile state is :",this.state);
      });
     }
   }

   showLock(){
     this.lock.show();
   }

   logout(){
     this.setState({
       accessToken : "",
       profile : ""
     },()=>{
       localStorage.removeItem('accessToken');
       localStorage.removeItem('profile');
     })
   }

render(){
  var profile = "";
  if(this.state.accessToken){
    profile = <User  profile = {this.state.profile} />;
  }
  else{
    profile = "Please Login";
  }
return(
  <div className="App" >
  <header >
  <Header 
  lock = {this.lock}
  accessToken = {this.state.accessToken}
  onLogout={this.logout}
  onLogin={this.showLock} />
  </header>
  {profile}
  <br />
  <Github />
</div>
);
}
}

export default App;
