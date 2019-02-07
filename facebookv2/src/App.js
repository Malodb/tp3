import React, { Component } from 'react';
import './App.css';

class Profils extends Component {
  getInitialState(){
    return{
      profile :[
        ['Karamazov','Serge','24 Novembre 1958','https://pbs.twimg.com/profile_images/857611793945985024/m3o3AFxz_400x400.jpg'],
        ['Deray','Odile','23 Mars 1948','https://pbs.twimg.com/profile_images/857611793945985024/m3o3AFxz_400x400.jpg'],
        ['Jérémi','Simon','2 Septembre 1962','https://www.francetvinfo.fr/image/75eckfang-2fd9/580/391/13148903.jpg'],
      ],   }
  }

  constructor(props){
     super(props);
     this.state =
      {
          profile:'0'  ,
           backstyle: ""
      }
  }

 boxClick = (e) => {
     this.setState({
       backstyle: "red"
     })
   }



render(){

    return(

      <div style={{backgroundColor: this.state.backstyle}} class="carte">
      <h1></h1>
      <span><img class="profile" src="https://pbs.twimg.com/profile_images/558319647649316865/s7uyinrG_400x400.jpeg"></img></span>
      <br></br>
            <h1>Karamazov</h1>
      <h1>Serge</h1>
      <h2>24 Novembre 1958</h2>
      <button  class="button" onClick={this.boxClick}>Changer de style</button>
      </div>
    );

    }
  }



class App extends Component {

  render() {{
    return (
      <div display="inline-block" className="App">
      <header>
        <button class="button">Serge Karamazov</button>
        <button class="button">Odile Deray</button>
        <button class="button">Simon Jérémi</button>
         </header>
     <body>
     <Profils/>
   </body>
      </div>
    );
  }
}
}


export default App;
