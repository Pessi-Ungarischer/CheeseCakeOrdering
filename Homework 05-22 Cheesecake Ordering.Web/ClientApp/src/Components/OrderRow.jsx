import react from 'react';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';


const OrderRow = ({ id, name, email, baseFlavor, toppings, specialRequest, quantity, deliveryDate, total }) => {
  
    return (<>
        <tr style = {{ backgroundColor: "#f8f9fa", borderRadius: "15px" }}
            key = {id}>
            <td style={{ paddingTop: "15px", paddingBottom: "15px" }}>
                <Link to={`/orderDetails/${id}`} className="formControl">{name}-{email}</Link>

            </td>
            <td>{baseFlavor}</td>
            <td>{toppings}</td>
            <td>{specialRequest}</td>
            <td>{quantity}</td>
            <td>{dayjs(deliveryDate).format('MM/DD/YYYY')}</td>
            <td>{total}</td>

        </tr>
    </>)
}

export default OrderRow


