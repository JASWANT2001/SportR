import React from 'react'
import './App.css';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-light homebar">
                <div className="container-fluid">
                    <img src="/images/Pictures/Logo.png" alt="Bootstrap" width="150" height="80" /><span> </span>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0 icons1 menu1">
                            <li className="nav-item icons1 menu">
                                <Link className="nav-link active text-black " aria-current="page"
                                    to="/"><i class="fa-solid fa-house fa-xl"></i><br/>Home</Link>
                            </li>
                            <li className="nav-item icons1 menu">
                                <button className="nav-link active text-black menu" aria-current="page"
                                    href="https://www.hackerrank.com/dashboard"><i class="fa-solid fa-flag-checkered fa-fade fa-xl"></i><br/>Sports</button>
                            </li>
                            <li className="nav-item icons1 menu">
                                <button className="nav-link active text-black menu" aria-current="page"
                                    href="https://www.hackerrank.com/dashboard"><i class="fa-solid fa-person-skiing fa-spin fa-xl"></i><br/>Fun Activities</button>
                            </li>
                            <li className="nav-item icons1 menu">
                                <Link className="nav-link active text-black menu"  aria-current="page"
                                    to="/listyourspot"><i class="fa-solid fa-circle-chevron-down fa-xl" style={{marginLeft:"35px"}} ></i><br/>List your Spot</Link>
                            </li>
                            <li className="nav-item icons1 menu">
                                <button className="nav-link active text-black menu" aria-current="page"
                                    href="https://www.hackerrank.com/dashboard"><i class="fa-solid fa-phone fa-bounce fa-xl"></i><br/>Call Us to Book Now</button>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2 searchbar"
                                type="search" placeholder="Search" aria-label="Search" />
                            <li className="nav">
                                <a className="nav-link text-dark city"
                                    href="https://www.hackerrank.com/products/developer-skills-platform/">City</a>
                            </li>


                            <button type="button" className="btn btn-danger signin" data-bs-toggle="modal"
                                data-bs-target="#exampleModal">
                                Sign in
                            </button>


                            <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel"
                                aria-hidden="true">
                                <div className="modal-dialog">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Sign In </h1>
                                            <button type="button" className="btn-close" data-bs-dismiss="modal"
                                                aria-label="Close"></button>
                                        </div>
                                        <div className="modal-body">
                                            <div className="container-fluid">
                                                <div className="col">
                                                    <div>
                                                        <label >Name</label>
                                                        <input className="form-control" id="Name" />
                                                    </div>
                                                    <div>
                                                        <label>Mailid</label>
                                                        <input className="form-control" id="Mailid" />
                                                    </div>
                                                    <div>
                                                        <label>Mobile No.</label>
                                                        <input className="form-control" id="mobile" />
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                        <div className="modal-footer">
                                            <button type="button" className="btn btn-secondary"
                                                data-bs-dismiss="modal">Close</button>
                                            <button type="button" className="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default NavBar
