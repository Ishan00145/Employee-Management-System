import React from "react";
import { Link } from "react-router-dom";
function Header (){

    return (
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#"style={{color :"red"}}>ESPro</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNav">
    <ul class="navbar-nav">
      
      <li class="nav-item">
        <a class="nav-link" href="/">Home</a>
      </li>
      <li class="nav-item">
        <a class="nav-link" href="/view">View progress of EMP</a>
      </li>
      <li class="nav-item">
        <a class="nav-link anabled" href="/add">Add Employee progress</a>
      </li>
     
    </ul>
  </div>
</nav>
    )
}
export default Header;