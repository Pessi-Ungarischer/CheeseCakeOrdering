import React from 'react';
import { Link } from 'react-router-dom';



export default function Layout({ children }) {
    return (<>
        <header>
            <nav className="navbar navbar-expand-sm navbar-toggleable-sm navbar-light bg-white border-bottom box-shadow mb-3">
                <div className="container-fluid">
                    <a className="navbar-brand" asp-area="" asp-controller="Home" asp-action="Index">Cheese Cake Orders</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target=".navbar-collapse" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="navbar-collapse collapse d-sm-inline-flex justify-content-between">
                        <ul className="navbar-nav flex-grow-1">
                            <li className="nav-item">
                                <Link to='/' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/Order' className="nav-link">Order</Link>
                            </li>
                            <li className="nav-item">
                                <Link to='/ViewOrders' className="nav-link">View Orders</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </header>

        <div className="container" style={{ marginTop: 80 }}>
            {children}
        </div>
    </>)
}