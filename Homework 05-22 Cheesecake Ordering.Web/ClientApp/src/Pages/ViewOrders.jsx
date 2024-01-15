import react, { useState, useEffect } from 'react';
import axios from 'axios';
import dayjs from 'dayjs';
import OrderRow from '../OrderRow';


const ViewOrders = () => {

    const [orders, setOrders] = useState([]);

    useEffect(() => {
        const getOrders = async () => {
            const { data } = await axios.get('/api/CheeseCake/GetOrders');
            setOrders(data);
        }
        getOrders();

    }, []);

    

    return (<>
        <div className="container" style={{ marginTop: 80 }}>
            <div className="d-flex justify-content-center">

                <table className="table text-center shadow-lg" style={{ borderCollapse: "separate", borderSpacing: "0 15px", maxWidth: "80%" }}      >
                    <thead>
                        <tr style={{ backgroundColor: "#212529", color: "white", borderRadius: "15px" }}>
                            <th>Name/Email</th>
                            <th>Base Flavor</th>
                            <th>Toppings</th>
                            <th>Special Requests</th>
                            <th>Quantity</th>
                            <th>Delivery Date</th>
                            <th>Total</th>
                        </tr>
                    </thead>

                    <tbody>
                        {orders.map(order =>
                            <OrderRow
                                key={order.id}
                                id={order.id}
                                name={order.name}
                                email={order.email}
                                baseFlavor={order.baseFlavor}
                                toppings={order.toppings}
                                specialRequest={order.specialRequest}
                                quantity={order.quantity}
                                deliveryDate={order.deliveryDate}
                                total={order.total}
                            ></OrderRow>
                        )}
                    </tbody>
                </table>

            </div>
        </div>
    </>)
}


export default ViewOrders