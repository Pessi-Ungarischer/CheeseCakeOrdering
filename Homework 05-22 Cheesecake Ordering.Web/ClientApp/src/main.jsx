import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Layout from './Layout';
import Home from './Pages/Home';
import Order from './Pages/Order';
import ViewOrders from './Pages/ViewOrders';
import OrderDetails from './Pages/OrderDetails';
import Success from './Pages/Success';



ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
        <Layout>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route exact path='/Order' element={<Order />} />
                <Route exact path='/ViewOrders' element={<ViewOrders />} />
                <Route exact path='/orderDetails/:id' element={<OrderDetails />} />
                <Route exact path='/Success' element={<Success />} />
            </Routes>
        </Layout>
    </BrowserRouter>
)
