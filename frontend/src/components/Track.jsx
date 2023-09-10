import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCreateOrderMutation } from '../slices/orderSlice';

const OrderForm = () => {
    const [shipmentData, setShipmentData] = useState({
        pickupLocation: '',
        pickupAddress: '',
        endLocation: '',
        endAddress: '',
        courierType: '',
        courierContent: '',
        customerId: '',
        deliveryPersonId: '',
        status: 'Booked',
    });

    const {
        pickupLocation,
        pickupAddress,
        endLocation,
        endAddress,
        courierType,
        courierContent,
        customerId,
        deliveryPersonId,
        status,
    } = shipmentData;

    const dispatch = useDispatch();
    const [createOrder, { isLoading }] = useCreateOrderMutation();

    const onSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await createOrder(shipmentData).unwrap();
            console.log('Order created:', response);

            setShipmentData({
                pickupLocation: '',
                pickupAddress: '',
                endLocation: '',
                endAddress: '',
                courierType: '',
                courierContent: '',
                customerId: '',
                deliveryPersonId: '',
                status: 'Booked',
            });
        } catch (error) {
            console.error('Error creating order:', error);
        }
    };

    const onChange = (e) => {
        setShipmentData((prevState) => ({
            ...prevState,
            [e.target.name]: e.target.value,
        }));
    };

    return (
        <section className="create-shipment-container">
            <h2 className="tittle-create-ship">Creating Shipment</h2>
            <form className="form-container" onSubmit={onSubmit}>
                <div>
                    <h3 className='tittle-create-ship'>Pickup Information</h3>
                    <div className="form-individual">
                        <label htmlFor='pickupLocation'>Location</label>
                        <input
                            type='text'
                            name='pickupLocation'
                            id='pickupLocation'
                            value={pickupLocation}
                            onChange={onChange}
                            className='input-shipment'
                        />
                    </div>

                    <div className="form-individual">
                        <label htmlFor='pickupAddress'>Address</label>
                        <input
                            type='text'
                            name='pickupAddress'
                            id='pickupAddress'
                            value={pickupAddress}
                            onChange={onChange}
                            className='input-shipment'
                        />
                    </div>

                    {/* Map other pickup fields similarly */}
                </div>

                <div>
                    <h3 className='tittle-create-ship'>Delivery Information</h3>
                    <div className="form-individual">
                        <label htmlFor='endLocation'>Location</label>
                        <input
                            type='text'
                            name='endLocation'
                            id='endLocation'
                            value={endLocation}
                            onChange={onChange}
                            className='input-shipment'
                        />
                    </div>

                    <div className="form-individual">
                        <label htmlFor='endAddress'>Address</label>
                        <input
                            type='text'
                            name='endAddress'
                            id='endAddress'
                            value={endAddress}
                            onChange={onChange}
                            className='input-shipment'
                        />
                    </div>

                    {/* Map other delivery fields similarly */}
                </div>

                <div className="form-group">
                    <div className='form-individual'>
                        <label htmlFor='courierType'>Courier Type</label>
                        <input
                            type='text'
                            name='courierType'
                            id='courierType'
                            value={courierType}
                            onChange={onChange}
                            className='input-shipment short-input'
                        />
                        <label htmlFor='courierContent'>Courier Content</label>
                        <input
                            type='text'
                            name='courierContent'
                            id='courierContent'
                            value={courierContent}
                            onChange={onChange}
                            className='input-shipment short-input'
                        />
                         <label htmlFor='customerId'>customer Id</label>
                        
                         <input
                            type='text'
                            name='customerId'
                            id='customerId'
                            value={customerId}
                            onChange={onChange}
                            className='input-shipment short-input'
                        />
                         <label htmlFor='deliveryPersonId'>Delivery PersonId</label>
                        <input
                            type='text'
                            name='deliveryPersonId'
                            id='deliveryPersonId'
                            value={deliveryPersonId}
                            onChange={onChange}
                            className='input-shipment short-input'
                        />
                        <label htmlFor='status'>Status</label>
                        <select id="status" name="status">
                            <option value="assigned">Assigned</option>
                            <option value="cancelled">Cancelled</option>
                            <option value="intransit">In Transit</option>
                            <option value="Delivered">Delivered</option>
    
                        </select>
                        
                    </div>
                    {/* Map other fields similarly */}
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
