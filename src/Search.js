import React,{ Component } from 'react';

class Search extends Component {

search(event){
    event.preventDefault();
    console.log("username input is : ",event.target.username.value);
    this.props.getProfile(event.target.username.value);
}

render(){
return(
<div className="search-box" style={{border:"2px solid blue",backgroundColor:"lightblue",height:"220px",marginTop:"62%",marginBottom:"6%"}}>
    <h2 style={{color:"red"}}>Search Your Git Profile:</h2><br/>
     <form onSubmit={this.search.bind(this)}>
     <div style={{fontSize:"110%",color:"darkgreen",fontWeight:"700"}}>Enter Your Username :<br/> <input type="search" name="username" />
     <button type="submit" style={{margin:"10px",backgroundColor:"blue",border:"none",width:"100px",height:"32px",color:"white"}}>Submit</button>
     </div>
     </form>
</div>
);
}
}

export default Search;