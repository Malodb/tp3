import React, { Component } from 'react';
import './App.css' ;

class Profils extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    }
  }
  boxClick = (e) => {
    this.setState({
      bgColor: "red"

    })
  }

  render(){{
    return(
      <div style={{backgroundColor: this.state.bgColor}} class="carte">
      <span><img class="profile" src="https://pbs.twimg.com/profile_images/558319647649316865/s7uyinrG_400x400.jpeg"></img></span>
      <h1>Nom</h1>
      <h1>Prenom</h1>
      <h2>Date de Naissance</h2>
      <button  class="button" onClick={this.boxClick}>Changer de style</button>
      </div>
    );

    }


  }
}
