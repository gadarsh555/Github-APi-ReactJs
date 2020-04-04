import React,{ Component } from 'react';

class Profile extends Component {
render(){
    console.log("the props is:",this.props.gitprofile);
return(
<div>
    <div  style={{marginTop:"100%",marginBottom:"5%",border:"4px solid violet",backgroundColor:"yellow"}}>
        <h2 style={{color:"darkgreen"}}>Git Profile</h2><br />
        <div>
        <img style={{width:"160px",height:"130px",border:"3px solid white"}} src={this.props.gitprofile.avatar} alt="Avatar" /><br/><br/>
        <label>Name: <b>{this.props.gitprofile.name}</b></label><br/>
        <label>Username: <b>{this.props.gitprofile.username}</b></label><br/>
       {/*  <label>Avatar: <b>{this.props.gitprofile.avatar}</b></label><br/> */}
        <label>Repos: <b>{this.props.gitprofile.repos}</b></label><br/>
        <label>Followers: <b>{this.props.gitprofile.followers}</b></label><br/>
        <label>Following: <b>{this.props.gitprofile.following}</b></label><br/>
        <label>Home Url: <b>{this.props.gitprofile.homeURL}</b></label><br/>
        </div>
    </div>
     <button style={{backgroundColor:"blue",width:"250px",height:"50px",color:"white",fontWeight:"700"}} onClick={()=>{this.props.resetState();}}>Check Another Profile</button>
     <br/><br/> 
</div>
);
}
}

export default Profile;