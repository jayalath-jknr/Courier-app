import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCreateOrderMutation } from '../features/orders/orderApiSlice';

const OrderForm = () => {
    const [shipmentData, setShipmentData] = useState({
        nameSender: '',
        // ... other fields ...
        addressSender:'',
        postalCodeSender:'',
        citySender:'',
        provinceSender:'',
        phoneSender:'',
        nameReceiver:'',
        addressReceiver:'',
        postalCodeReceiver:'',
        cityReceiver:'',
        provinceReceiver:'',
        phoneReceiver:'',
        price:'',
        weight:'',
        quantity:'',
        eta:'',
        status:"Shipment created",
    });

    const { nameSender,addressSender, postalCodeSender, citySender, provinceSender, phoneSender,
        nameReceiver, addressReceiver, postalCodeReceiver, cityReceiver, provinceReceiver, phoneReceiver,
        price, weight, quantity, eta, status /* ... other fields ... */ } = shipmentData;

    const dispatch = useDispatch();
    const [createOrder, { isLoading }] = useCreateOrderMutation(); // Hook provided by orderApiSlice

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createOrder(shipmentData).unwrap();
            // Handle successful response, if needed
            console.log('Order created:', response);

            // Clear form after successful creation
            setShipmentData({
                nameSender: '',
                // ... reset other fields ...
                addressSender:'',
                postalCodeSender:'',
                citySender:'',
                provinceSender:'',
                phoneSender:'',
                nameReceiver:'',
                addressReceiver:'',
                postalCodeReceiver:'',
                cityReceiver:'',
                provinceReceiver:'',
                phoneReceiver:'',
                price:'',
                weight:'',
                quantity:'',
                eta:'',
                status:"Shipment created"
            });
        } catch (error) {
            // Handle error, if needed
            console.error('Error creating order:', error);
        }
    };

    const onChange = (e) => {
        setShipmentData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    // ... Other functions (getPrice, getDate, getEstimation) ...

    return (
        <section className="create-shipment-container">
            <h2 className="tittle-create-ship">Creating Shipment</h2>
            <form className="form-container" onSubmit={onSubmit}>
                {/* Render your form fields similar to your existing code */}
                {/* Use shipmentData and onChange for input values and onChange handling */}
                {/* Replace createOrder button with isLoading check */}
                {/* < className='form-container' onSubmit={onSubmit}> */}
        <div>
            <h3 className='tittle-create-ship'>Sender Information</h3>
            <div className="form-individual">
            <label htmlFor='nameSender'>Name</label>
            <input 
            type='text'
            name='nameSender'
            id='nameSender'
            value={nameSender}
            onChange={onChange}
            className='input-shipment'
            />
            </div>

            <div className="form-individual">
            <label htmlFor='addressSender'>Address</label>
            <input 
            type='text'
            name='addressSender'
            id='addressSender'
            value={addressSender}
            onChange={onChange}
            className='input-shipment'
            />
            </div>

            <div className="form-group">
                <div className='form-individual'>
            <label htmlFor='postalCodeSender'>Postal Code</label>
            <input 
            type='text'
            name='postalCodeSender'
            id='postalCodeSender'
            value={postalCodeSender}
            onChange={onChange}
            className='input-shipment short-input'
            />
            </div>
             <div className='form-individual'>
            <label htmlFor='citySender'>City</label>
            <input 
            type='text'
            name='citySender'
            id='citySender'
            value={citySender}
            onChange={onChange}
            className='input-shipment medium-input'
            />
            </div>
            </div>

            <div className="form-group">
                <div className='form-individual'>
                <label htmlFor='provinceSender'>Province</label> 
                <input 
                type='text'
                name='provinceSender'
                id='provinceSender'
                value={provinceSender}
                onChange={onChange}
                className='input-shipment short-input'
                />
                </div>

                <div className='form-individual'>
                <label htmlFor='phoneSender'>Phone</label>
                <input 
                type='number'
                name='phoneSender'
                id='phoneSender'
                value={phoneSender}
                onChange={onChange}
                className='input-shipment medium-input'
                />
                </div> 
            </div>

            <div className="form-group">
                <div className='form-individual'>
                <label htmlFor='quantity'>Quantity of Packages</label> 
                <input 
                type='number'
                name='quantity'
                id='quantity'
                value={quantity}
                onChange={onChange}
                className='input-shipment mid-input'
                />
                </div>

                <div className='form-individual'>
                <label htmlFor='weight'>Total Weight (lb)</label> 
                <input 
                type='number'
                name='weight'
                id='weight'
                value={weight}
                onChange={onChange}
                className='input-shipment mid-input'
                />
                </div>
            </div>
          
            
            </div>
   
             <div>
                 <h3 className='tittle-create-ship'>Receiver Information</h3>
            <div className="form-individual">
            <label htmlFor='name'>Name</label>
            <input 
            type='text'
            name='nameReceiver'
            id='nameReceiver'
            value={nameReceiver}
            onChange={onChange}
            className='input-shipment'
            />
            </div>

            <div className="form-individual">
            <label htmlFor='addressReceiver'>Address</label>
            <input 
            type='text'
            name='addressReceiver'
            id='addressReceiver'
            value={addressReceiver}
            onChange={onChange}
            className='input-shipment'
            />
            </div>

            <div className="form-group">
                <div className='form-individual'>
            <label htmlFor='postalCodeReceiver'>Postal Code</label>
            <input 
            type='text'
            name='postalCodeReceiver'
            id='postalCodeReceiver'
            value={postalCodeReceiver}
            onChange={onChange}
            className='input-shipment short-input'
            />
            </div>
             <div className='form-individual'>
            <label htmlFor='cityReceiver'>City</label>
            <input 
            type='text'
            name='cityReceiver'
            id='cityReceiver'
            value={cityReceiver}
            onChange={onChange}
            className='input-shipment medium-input'
            />
            </div>
            </div>

            <div className="form-group">
                <div className='form-individual'>
                <label htmlFor='provinceReceiver'>Province</label> 
                <input 
                type='text'
                name='provinceReceiver'
                id='provinceReceiver'
                value={provinceReceiver}
                onChange={onChange}
                className='input-shipment short-input'
                />
                </div>

                <div className='form-individual'>
                <label htmlFor='phoneReceiver'>Phone</label>
                <input 
                type='number'
                name='phoneReceiver'
                id='phoneReceiver'
                value={phoneReceiver}
                onChange={onChange}
                className='input-shipment medium-input'
                />
                </div> 
            </div> 
            
            <div className="form-group">
                <div className='form-individual'>
                <label htmlFor='price'>Price</label> 
                <input 
                type='number'
                name='price'
                id='price'
                value={price}
                readOnly
                className='input-shipment mid-input'
                />
                </div>

                <div className='form-individual'>
                <label htmlFor='eta'>Estimated Time of Arrival</label> 
                <input 
                type='text'
                name='eta'
                id='eta'
                value={eta}
                readOnly
                className='input-shipment mid-input'
                />
                </div>
            </div> 
            {shipNow? (
                <div>
               <button className='btn btn-ship' type='submit'>Ship</button>    
            </div>
            ) : (
            <div>
               <p className='btn btn-ship' onClick={getEstimation}>Estimate</p>    
            </div>
            )}
             
        </div>
       
        
                {isLoading ? (
                    <p className="btn btn-ship">Creating...</p>
                ) : (
                    <button className="btn btn-ship" type="submit">
                        Create Order
                    </button>
                )}
            </form>
        </section>
    );
};

export default OrderForm;
