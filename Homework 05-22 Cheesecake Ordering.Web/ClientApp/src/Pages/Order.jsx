import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import LivePreview from '../Components/LivePreview';




const baseFlavors = ['Choose...', 'Classic', 'Chocolate', 'Red Velvet', 'Brownie'];

const toppings = ['Chocolate Chips',
    'Caramel Drizzle',
    'Whipped Cream',
    'Pecans',
    'Almonds',
    'Toasted Coconut',
    'Graham Cracker Crumble',
    'Cookie Dough',
    'Mint Chocolate Chips',
    'Caramelized Bananas',
    'Rainbow Sprinkles',
    'Powdered Sugar',
    'White Chocolate Shavings',
    'Peanut Butter Drizzle',
    'Dark Chocolate Drizzle'];

const HomePage = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [baseFlavor, setBaseFlavor] = useState(baseFlavors[0]);
    const [toppingsChosen, setToppingsChosen] = useState([]);
    const [specialRequest, setspecialRequest] = useState('');
    const [quantity, setQuantity] = useState(1);
    const [deliveryDate, setDeliveryDate] = useState('');

    const navigate = useNavigate();


    const onNameChange = (e) => {
        setName(e.target.value);
    }

    const onEmailChange = (e) => {
        setEmail(e.target.value);
    }


    const onBaseFlavorChange = (e) => {
        setBaseFlavor(e.target.value);
    }

    const onToppingChanged = (topping) => {
        if (toppingsChosen.includes(topping)) {
            setToppingsChosen(toppingsChosen.filter(t => topping !== t));
        } else {
            setToppingsChosen([...toppingsChosen, topping]);
        }
    }

    const onspecialRequestChange = (e) => {
        setspecialRequest(e.target.value);
    }

    const onQuantityChange = (e) => {
        setQuantity(e.target.value);
    }

    const onDeliveryDateChange = (e) => {
        setDeliveryDate(e.target.value);
    }

  
    const getTotal = () => {
        if (baseFlavor == baseFlavors[0]) {
            return 0;
        }
        return ((49.99 + (toppingsChosen.length) * (3.95)) * quantity);
    }


    const SubmitClick = async () => {
        const cheeseCake = {
            name,
            email,
            baseFlavor,
            toppings: toppingsChosen.toString(', '),
            specialRequest,
            quantity,
            deliveryDate,
            total: getTotal()
        };
        await axios.post('/api/CheeseCake/insertCheeseCake', cheeseCake);

        navigate('/Success');
    }


    return (<>
        <div className="container" style={{ marginTop: 80 }}>
            <h1 className="text-center my-4">Cheesecake Factory Order Form</h1>
            <div className="row">
                <div className="col-md-6">

                    <div className="mb-3">
                        <label className="form-label">Name</label>
                        <input value={name} onChange={onNameChange} type="text" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label className="form-label">Email</label>
                        <input value={email} onChange={onEmailChange} type="email" className="form-control" />
                    </div>

                    <div className="mb-3">
                        <label value={baseFlavor} className="form-label">Cheesecake Base Flavor ($49.99)</label>
                        <select onChange={onBaseFlavorChange} className="form-select">
                            {baseFlavors.map((bFlavor, i) =>
                                <option key={i}>
                                    {bFlavor}</option>)}
                        </select>
                    </div>


                    <div className="mb-3" >
                        <label className="form-label">Toppings (each topping adds an additional $3.95)</label>
                        {toppings.map((topping, i) => {
                            return (
                                <div className="form-check" key={i}>
                                    <input
                                        className="form-check-input"
                                        type="checkbox"
                                        checked={toppingsChosen.includes(topping)}
                                        onChange={() => onToppingChanged(topping)}
                                    />
                                    <label className="form-check-label">{topping}</label>
                                </div>
                            )
                        })}


                        <div className="mb-3">
                            <label className="form-label">Special Requests</label>
                            <textarea onChange={onspecialRequestChange} value={specialRequest} className="form-control" rows="3"></textarea>
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Quantity</label>
                            <input onChange={onQuantityChange} value={quantity} type="number" className="form-control" min="1" />
                        </div>

                        <div className="mb-3">
                            <label className="form-label">Delivery Date</label>
                            <input onChange={onDeliveryDateChange} value={deliveryDate}  type="date" className="form-control" />
                        </div>

                        <button
                            onClick={SubmitClick}
                            className="btn btn-primary"
                            type="submit"
                            disabled={!(name && email && baseFlavor !== baseFlavors[0] && +quantity !== 0 && deliveryDate)
                                && true}>
                            Submit Order
                        </button>

                    </div>
                </div>


                <LivePreview
                    baseFlavor={baseFlavor}
                    toppings={toppingsChosen}
                    specialRequest={specialRequest}
                    quantity={quantity}
                    deliveryDate={deliveryDate}
                    total={getTotal()}>
                </LivePreview>


               
            </div>
        </div>
    </>)
}
export default HomePage

