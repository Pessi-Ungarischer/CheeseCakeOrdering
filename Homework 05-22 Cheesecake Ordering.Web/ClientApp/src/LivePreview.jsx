import react from 'react';
import dayjs from 'dayjs';


const LivePreview = ({ baseFlavor, toppings, specialRequest, quantity, deliveryDate, total }) => {

    return (<>
        < div className="col-md-6 position-sticky">
            <div className="card" style={{ width: 300 }}>
                <div className="card-body">
                    <h5 className="card-title">Your Custom Cheesecake</h5>
                    <p className="card-text">Base Flavor: {baseFlavor}</p>
                    <p className="card-text">Toppings: {toppings.join(`, `)} </p>
                    <p className="card-text">Special Requests: {specialRequest}</p>
                    <p className="card-text">Quantity: {quantity}</p>
                    <p className="card-text">Delivery Date: {deliveryDate && dayjs(deliveryDate).format('MM/DD/YYYY')}</p>
                    <p className="card-text fw-bold">Total: ${total}</p>
                </div>
            </div>
        </div >
    </>)
}
export default LivePreview;
