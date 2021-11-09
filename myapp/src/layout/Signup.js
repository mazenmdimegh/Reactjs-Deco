import React from 'react'
import tutorialServies from '../services/tutorial.servies';

export default class AddClient extends Comment {
 constructor(props){
   super(props);
   
   this.onChangenomHandler = this.onChangenomHandler.bind(this);
   this.onChangeprenomHandler = this.onChangeprenomHandler.bind(this);
   this.onChangeadresseHandler = this.onChangeadresseHandler.bind(this);
   this.onChangetelHandler = this.onChangetelHandler.bind(this);
   this.onChangemailHandler = this.onChangemailHandler.bind(this);
   this.onChangePasswordHandler = this.onChangePasswordHandler.bind(this);
   this.onChangencinHandler = this.onChangencinHandler.bind(this);
   this.state = {
    nom:'',
    prenom:'',
    adresse:'',
    tel:'',
    mail:'',
    password:'',
    ncin:''
  };
  }
   SaveClient = (e) =>{
     e.preventDefault();
     let client = {nom:this.state.nom,
       prenom:this.state.prenom,
     adresse:this.state.adresse,
     tel: this.state.tel,
     mail:this.state.mail,
     password:this.state.password,
     ncin:this.state.ncin}
     console.log('client=>' + JSON.stringify(client));
      tutorialServies.create(client).then(res=>{
        this.props.history.push('/clients');
      })
   }
   onChangenomHandler=(ee)=>{
     this.setState({nom:ee.target.value})
   }
   onChangeprenomHandler=(ee)=>{
    this.setState({prenom:ee.target.value})
   }
  onChangeadresseHandler=(ee)=>{
    this.setState({adresse:ee.target.value})
  }
  onChangetelnomHandler=(ee)=>{
    this.setState({tel:ee.target.value})
  }
  onChangemailHandler=(ee)=>{
    this.setState({mail:ee.target.value})
  }
  onChangepasswordHandler=(ee)=>{
    this.setState({password:ee.target.value})
  }
  onChangencinHandler=(ee)=>{
    this.setState({ncin:ee.target.value})
  }
  
   
 
  render(){  
  return (
        <div className="hhh">
            <form>
    <div >
  <div class="form-row">
    <div class="form-group col-md-6">
      <label >nom</label>
      <input type="text" name="firstName" className="form-control" value={this.state.nom} onChange={this.onChangenomHandler} placeholder="nom"></input>
    </div>
    <div class="form-group col-md-6">
      <label >Prénom</label>
      <input type="text" class="form-control" value={this.state.prenom} onChange={this.onChangeprenomHandler}  placeholder="prenom"></input>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label >adresse</label>
      <input type="text" class="form-control" value={this.state.adresse} onChange={this.onChangeadresseHandler}  placeholder="adresse"></input>
    </div>
    <div class="form-group col-md-6">
      <label >tel</label>
      <input type="text" class="form-control" value={this.state.tel} onChange={this.onChangetelHandler}  placeholder="tel"></input>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group col-md-6">
      <label for="inputEmail4">Email</label>
      <input type="email" class="form-control" value={this.state.mail} onChange={this.onChangemailHandler}  placeholder="Email"></input>
    </div>
    <div class="form-group col-md-6">
      <label >Mot de passe</label>
      <input type="password" class="form-control" value={this.state.password} onChange={this.onChangepasswordHandler} placeholder="Mot de passe"></input>
    </div>
  </div>
  <div class="form-row">
    <div class="form-group ">
      <label >N°CIN</label>
      <input type="text" class="form-control" value={this.state.ncin} onChange={this.onChangencinHandler}  placeholder="CIN"></input>
    </div>
  <div></div>
  </div>
 
   <div>
    <button onClick={this.SaveClient} class="btn btn-primary">S'inscrire</button>
   </div>
  </div>
 </form>

        </div>
    )
  }
}
