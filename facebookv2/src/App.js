import React, { Component } from 'react';
import './App.css';

class Profile extends React.Component{
    render()
    {        return(
      <div>
            <img class="profile" src={this.props.profile} />
            <br/>
            <h1>{this.props.nom} </h1>
            <h1>{this.props.prenom} </h1>
            <h3>{this.props.date}</h3>
        </div>
        )
    }

}

class Pensée extends React.Component{

    render()
    {
        return(
            <div>
            <p>{this.props.contenu}</p>
            </div>
        )
    }
}


class App extends Component {
  constructor(props) {
  super(props);
  this.state = {
  nom : 'Karamazov',
  prenom : 'Serge',
  date : '24 Novembre 1958',
  profile : 'https://pbs.twimg.com/profile_images/558319647649316865/s7uyinrG_400x400.jpeg',
  contenu : 'Aucun lien, je suis fils unique',
  backstyle : '#eae8e5',


  };
}
boxClick = (e) => {
  switch (this.state.backstyle) {
    case 'red': this.setState({backstyle: 'blue'});
      break;
    case 'blue' :this.setState({backstyle: 'green'});
      break;
    default: this.setState({backstyle: 'red'});
        break;
  }

  }

  render() {
    return (
    <div display="inline-block" className="App">
      <header>
        <button class="button" onClick={() => this.setState({nom: 'Karamazov', prenom :'Serge' , date : '24 Novembre 1958', profile : "https://pbs.twimg.com/profile_images/558319647649316865/s7uyinrG_400x400.jpeg", contenu :'Aucun lien, je suis fils unique'})}>{'Serge Karamazov'}</button>
        <button class="button" onClick={() => this.setState({nom: 'Deray', prenom :'Odile' , date : '23 Mars 1948', profile : "https://pbs.twimg.com/profile_images/857611793945985024/m3o3AFxz_400x400.jpg", contenu :"On s'est connu au festivale moutarde et cinema... de Dijon"})}>{'Odile Deray'}</button>
        <button class="button" onClick={() => this.setState({nom: 'Jérémi', prenom :'Simon' , date : '2 Septembre 1962', profile : "https://www.francetvinfo.fr/image/75eckfang-2fd9/580/391/13148903.jpg", contenu :'Moi à la base je voulais être projectionniste'})}>{'Simon Jérémi'}</button>
      </header>
      <body>
      <div class= "carte" style={{background:this.state.backstyle}}>
          <Profile  nom ={this.state.nom} prenom ={this.state.prenom} date ={this.state.date} profile= {this.state.profile}/>
          <button class="button" onClick={this.boxClick}>{"Prend un chewing-gum Emile"}</button>
      </div>
        <br/>
         <div class="carte">
          <Pensée contenu={this.state.contenu}/>
          <button class="button">{"G nial"}</button>
        </div>
        </body>
      </div>
    );
}
}



export default App;
