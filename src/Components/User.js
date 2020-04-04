import React,{ Component } from 'react';

class User extends Component {
                  
render(){
return(
<div>
  <div id="card" style={{color:"purple",backgroundColor:"cyan",marginTop:"15%",border:"2px solid green"}}>
<h1 style={{color:"red"}}>Welcome {this.props.profile.given_name}</h1>

                  <br />
                     <img style={{width:"140px",height:"110px",marginBottom:"15px",border:"3px solid white"}} src={this.props.profile.picture} alt="profile_picture" />
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