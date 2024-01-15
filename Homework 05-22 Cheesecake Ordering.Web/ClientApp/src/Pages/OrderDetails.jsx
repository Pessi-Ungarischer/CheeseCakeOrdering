﻿import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axios from 'axios';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';



const OrderDetails = () => {

    const [order, setOrder] = useState('');
    const { id } = useParams();

    useEffect(
        () => {
            const getOrderDetails = async () => {
                const { data } = await axios.get(`/api/CheeseCake/OrderDetails?id=${id}`);
                setOrder(data);
            }
            getOrderDetails();
        }, []);


    return (<>
        <div className="d-flex align-items-center justify-content-center" style={{ height: '80vh' }}>
            <div className="card text-center shadow p-3 mb-5 bg-body rounded" style={{ width: '30rem', backgroundColor: "#F8F9FA" }}>
                <div className="card-body">
                    <h3 className="card-title fw-bold">{order.name}</h3>
                    <p className="card-text fs-5">{order.email}</p>
                    <p className="card-text fs-5">{order.baseFlavor}</p>
                    <p className="card-text fs-5">{order.toppings}</p>
                    <p className="card-text fs-5">{order.specialRequest}</p>
                    <p className="card-text fs-5">{order.quantity}</p>
                    <p className="card-text fs-5">{dayjs(order.deliveryDate).format('MM/DD/YYYY')}</p>
                    <p className="card-text fs-5">{order.total}</p>
                </div>
                <Link to={`/ViewOrders`} className="formControl">
                    <button className="btn btn-primary w-100">Back to Orders</button>
                </Link>
            </div>
        </div>
    </>)
}

export default OrderDetails;

