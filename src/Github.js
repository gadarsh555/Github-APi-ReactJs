import React,{ Component } from 'react';
import Search from './Search';
import Profile from './Profile';

const GITAPI = 'https://api.github.com/users';

class Github extends Component {

constructor(props){
super(props);
this.state = {
    username : '',
    name : '',
    avatar : '',
    repos : '',
    followers : '',
    following : '',
    homeURL : '',
    notFound : '',
    gitjson : ''
};
this.getProfile =this.getProfile.bind(this);
this.resetState = this.resetState.bind(this);
}

async getProfile(username){
    var gitUrl = "";
     gitUrl = GITAPI+'/'+username;
    await fetch(gitUrl, {mode: "cors"})
    .then((res)=>res.json())
    .then((data)=>{
       this.setState({
        username : data.login,
        name : data.name,
        avatar : data.avatar_url,
        repos : data.public_repos,
        followers : data.followers,
        following : data.following,
        homeURL : data.html_url,
        notFound : data.message,
        gitjson : data
       },()=>{
           console.log("state is :",this.state);
       });
    })
    .catch((error)=>{
        console.log("An error ocurred while getting the Git profile.");
    });
    
}

resetState(){
    this.setState({
        username : "",
        name : "",
        avatar : "",
        repos : "",
        followers : "",
        following : "",
        homeURL : "",
        notFound : "",
        gitjson : ""
       });
}
/* componentDidMount(){
  this.getProfile(this.state.username);
}
 */
render(){

var show = "";
if(this.state.username){
  show = <Profile gitprofile={this.state} resetState={this.resetState} />;
}
else{
  show = <Search getProfile={this.getProfile}  />;
}

return(
<div style={{marginTop:"16%"}}>
  <section id="card">
      <br />
    {show}
  </section>
</div>
);
}
}

export default Github;