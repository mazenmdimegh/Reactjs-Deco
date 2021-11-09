import React from 'react'
import logo from '../images/logo.png';
import { Link } from 'react-router-dom';
export const Navbar = () => {
    return (
        <header id="header" className="top-head">
           {/*----------------------------------------------------------------------------------------------*/}
         <nav className="navbar navbar-default">
            <div className="container-fluid">
               <div className="row">
                  <div className="col-md-4 col-sm-12 left-rs">
                     <div className="navbar-header">
                        <button type="button" id="top-menu" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false"> 
                        <span className="sr-only">Toggle navigation</span> 
                        <span className="icon-bar"></span> 
                        <span className="icon-bar"></span> 
                        <span className="icon-bar"></span> 
                        </button>
                        <Link to="/" className="navbar-brand"><img src={"/images/logo.png"} alt="" /></Link>
                     </div>
                     <form className="navbar-form navbar-left web-sh">
                        <div className="form">
                           <input type="text" className="form-control" placeholder="Search for products or companies"></input>
                        </div>
                     </form>
                  </div>
                  <div className="col-md-8 col-sm-12">
                     <div className="right-nav">
                        <div className="login-sr">
                           <div className="login-signup">
                              <ul>
                                 <li><Link to="/Login" class="fa fa-user-o fa-lg" aria-hidden="true">Se connecter</Link></li>
                                 <li><Link className="custom-b" to="/Signup">S'inscrire</Link></li>
                              </ul>
                           </div>
                        </div>
                        {/* <div className="help-r hidden-xs">
                           <div className="help-box">
                              <ul>
                                 <li> <a data-toggle="modal" data-target="#myModal" href="#"> <span>Change</span> <img src="./images/flag.png" alt="" /> </a> </li>
                                 <li> <a href="#"><img className="h-i" src="./images/help-icon.png" alt="" /> Help </a> </li>
                              </ul>
                           </div>
                        </div> */}
                        <div className="nav-b hidden-xs">
                           <div className="nav-box">
                              <ul>
                                 
                                 <li><Link to="/third">Linge de maison</Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="nav-b hidden-xs">
                           <div className="nav-box">
                              <ul>
                                 
                                 <li><Link to="/second">Decoration</Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="nav-b hidden-xs">
                           <div className="nav-box">
                              <ul>
                                 
                                 <li><Link to="/second">Electroménager</Link></li>
                              </ul>
                           </div>
                        </div>
                        <div className="nav-b hidden-xs">
                           <div className="">
                           <ul class="nav navbar-nav">
      
                              <li class="dropdown">
                                       <a class="dropdown-toggle" data-toggle="dropdown" href="#">Meubles
                                       <span class="caret"></span></a>
                                 <ul class="dropdown-menu">
                                    <li><Link to="/second">Salon </Link></li>
                                    <li><a href="#">Chambre</a></li>
                                     <li><a href="#">Cuisine</a></li>
                                 </ul>
                              </li>
      
                            </ul>
                           </div>
                        </div>
                        <div className="nav-b hidden-xs">
                           <div className="nav-box">
                              <ul>
                                 <li><Link to="/">Acceuil</Link></li>
                                 
                              </ul>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </nav>
      </header>
            
    )
}
export default Navbar
