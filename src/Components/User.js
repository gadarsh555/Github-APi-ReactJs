import React,{ Component } from 'react';

class User extends Component {
                  
render(){
return(
<div>
  <div id="card" style={{color:"purple",backgroundColor:"cyan",marginTop:"9%"}}>
<h1 style={{color:"red"}}>Welcome {this.props.profile.given_name}</h1>

                  <br />
                      <p><b>Name : </b>{this.props.profile.name}</p>
                      <p><b>Nickname : </b>{this.props.profile.nickname}</p>
                      <p><b>Email : </b>{this.props.profile.email}</p>
                  <br />
    </div>
</div>
);
}
}

export default User;