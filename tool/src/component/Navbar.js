import React from 'react';
import { useAppSelector } from '../hooks/hooks';

export default function Navbar() {
    const count= useAppSelector((state) => state.counter)
  return (
    <div>
      <>
     
<nav class="navbar navbar-expand-lg bg-success navbar-dark">
    
    <div class="container-fluid">
       
        <a class="navbar-brand" href="#">Brand</a>

       
        <button data-mdb-button-init class="navbar-toggler" type="button" data-mdb-collapse-init  aria-label="Toggle navigation"
        aria-controls="navbarSupportedContent" aria-expanded="false" data-mdb-target="#navbarSupportedContent">
            <i class="fas fa-bars"></i>
        </button>

    
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              
                <li class="nav-item">
                    <a class="nav-link text-white" href="#">Link</a>
                </li>

              
                <li class="nav-item dropdown">
                    <a data-mdb-dropdown-init class="nav-link dropdown-toggle text-white" href="#" id="navbarDropdown" role="button"
                    data-mdb-toggle="dropdown" aria-expanded="false">
                        Dropdown
                    </a>
                   
                    <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                            <a class="dropdown-item" href="#">Action</a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Another action</a>
                        </li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </li>
                    </ul>
                </li>
            </ul>
            <h2>cart is {count}</h2>
        </div>
    </div>
   
</nav>

      </>
    </div>
  )
}
