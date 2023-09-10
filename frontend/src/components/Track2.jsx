// import { Container, Card, Button } from 'react-bootstrap';

// const Hero = () => {
//   return (
//     <div className=' py-5'>
//       <Container className='d-flex justify-content-center'>
//         <Card className='p-5 d-flex flex-column align-items-center hero-card bg-light w-75'>
//           <h1 className='text-center mb-4'>Courier track</h1>
//           <p className='text-center mb-4'>
//           Courier track
//           </p>
//           <div className='d-flex'>
//             <Button variant='primary' href='/login' className='me-3'>
//               Sign In
//             </Button>
//             <Button variant='secondary' href='/register'>
//               Register
//             </Button>
//           </div>
//         </Card>
//       </Container>
//     </div>
//   );
// };

// export default Hero;
// import React, { useState } from 'react';
// import { Form, Button } from 'react-bootstrap';
// import { useLoadScript } from '@react-google-maps/api';

// const libraries = ['places']; // Specify the libraries you need

// const CourierAddForm = () => {
//   const [pickupLocation, setPickupLocation] = useState('');
//   const [endLocation, setEndLocation] = useState('');

//   const { isLoaded, loadError } = useLoadScript({
//     googleMapsApiKey: 'AIzaSyDuLXWTJO1lFh4uiGX-F4JzVimBkNjByUc',
//     libraries,
//   });

//   if (loadError) return <div>Error loading Google Maps</div>;
//   if (!isLoaded) return <div>Loading Google Maps...</div>;

//   const handlePickupPlaceSelect = (address) => {
//     setPickupLocation(address);
//   };

//   const handleEndPlaceSelect = (address) => {
//     setEndLocation(address);
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Submit form data, including pickupLocation and endLocation, to your server
//     console.log('Form submitted', pickupLocation, endLocation);
//   };

//   return (
//     <Form onSubmit={handleSubmit}>
//       <Form.Group controlId="pickupLocation">
//         <Form.Label>Pickup Location</Form.Label>
//         <input
//           type="text"
//           className="form-control"
//           value={pickupLocation}
//           onChange={(e) => setPickupLocation(e.target.value)}
//           placeholder="Enter pickup location"
//           onFocus={(e) => e.target.select()}
//         />
//       </Form.Group>
//       <Form.Group controlId="endLocation">
//         <Form.Label>End Location</Form.Label>
//         <input
//           type="text"
//           className="form-control"
//           value={endLocation}
//           onChange={(e) => setEndLocation(e.target.value)}
//           placeholder="Enter end location"
//           onFocus={(e) => e.target.select()}
//         />
//       </Form.Group>
//       <Button type="submit" variant="primary">
//         Submit
//       </Button>
//     </Form>
//   );
// };

// export default CourierAddForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useCreateOrderMutation } from '../slices/orderSlice';

const OrderForm = () => {
    const [shipmentData, setShipmentData] = useState({
        nameSender: '',
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
        price, weight, quantity, eta, status } = shipmentData;

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

// import React, { useState } from 'react';

// const OrderForm = () => {
//   const [shipNow, setShipNow] = useState(false);

//   const [shipmentData, setShipmentData] = useState({
//     nameSender: '',
//     addressSender: '',
//     postalCodeSender: '',
//     citySender: '',
//     provinceSender: '',
//     phoneSender: '',
//     nameReceiver: '',
//     addressReceiver: '',
//     postalCodeReceiver: '',
//     cityReceiver: '',
//     provinceReceiver: '',
//     phoneReceiver: '',
//     price: '',
//     weight: '',
//     quantity: '',
//     eta: '',
//     status: 'Shipment created',
//   });

//   const {
//     nameSender,
//     addressSender,
//     postalCodeSender,
//     citySender,
//     provinceSender,
//     phoneSender,
//     nameReceiver,
//     addressReceiver,
//     postalCodeReceiver,
//     cityReceiver,
//     provinceReceiver,
//     phoneReceiver,
//     price,
//     weight,
//     quantity,
//     eta,
//     status,
//   } = shipmentData;

//   const onSubmit = (e) => {
//     e.preventDefault();

//     // Simulate sending data to the server (replace with your actual API call)
//     // Dispatching actions to Redux can be done here if needed
//     console.log('Form submitted', shipmentData);

//     // Reset the form
//     setShipmentData({
//       nameSender: '',
//       addressSender: '',
//       postalCodeSender: '',
//       citySender: '',
//       provinceSender: '',
//       phoneSender: '',
//       nameReceiver: '',
//       addressReceiver: '',
//       postalCodeReceiver: '',
//       cityReceiver: '',
//       provinceReceiver: '',
//       phoneReceiver: '',
//       price: '',
//       weight: '',
//       quantity: '',
//       eta: '',
//       status: 'Shipment created',
//     });

//     setShipNow(false);
//   };

//   const onChange = (e) => {
//     setShipmentData((prevState) => ({
//       ...prevState,
//       [e.target.name]: e.target.value,
//     }));
//   };

//   const getPrice = () => {
//     let totalPrice;
//     if (weight < 1) {
//       totalPrice = 5.87 * quantity;
//     } else {
//       totalPrice = weight * 2.367 * quantity;
//     }

//     setShipmentData((prevState) => ({
//       ...prevState,
//       price: totalPrice,
//     }));
//   };

//   const getDate = () => {
//     let result = new Date();
//     result.setDate(result.getDate() + 5);
//     let date =
//       result.getFullYear() + '-' + (result.getMonth() + 1) + '-' + result.getDate();

//     setShipmentData((prevState) => ({
//       ...prevState,
//       eta: date,
//     }));
//   };

//   const getEstimation = () => {
//     getPrice();
//     getDate();
//     setShipNow(true);
//   };

//   return (
//     <section className="create-shipment-container">
//       <h2 className="tittle-create-ship">Creating Shipment</h2>
//       <form className="form-container" onSubmit={onSubmit}>
//         <div>
//           <h3 className="tittle-create-ship">Sender Information</h3>
//           <div className="form-individual">
//             <label htmlFor="nameSender">Name</label>
//             <input
//               type="text"
//               name="nameSender"
//               id="nameSender"
//               value={nameSender}
//               onChange={onChange}
//               className="input-shipment"
//             />
//           </div>

//           <div className="form-individual">
//             <label htmlFor="addressSender">Address</label>
//             <input
//               type="text"
//               name="addressSender"
//               id="addressSender"
//               value={addressSender}
//               onChange={onChange}
//               className="input-shipment"
//             />
//           </div>

//           <div className="form-group">
//             <div className="form-individual">
//               <label htmlFor="postalCodeSender">Postal Code</label>
//               <input
//                 type="text"
//                 name="postalCodeSender"
//                 id="postalCodeSender"
//                 value={postalCodeSender}
//                 onChange={onChange}
//                 className="input-shipment short-input"
//               />
//             </div>
//             <div className="form-individual">
//               <label htmlFor="citySender">City</label>
//               <input
//                 type="text"
//                 name="citySender"
//                 id="citySender"
//                 value={citySender}
//                 onChange={onChange}
//                 className="input-shipment medium-input"
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <div className="form-individual">
//               <label htmlFor="provinceSender">Province</label>
//               <input
//                 type="text"
//                 name="provinceSender"
//                 id="provinceSender"
//                 value={provinceSender}
//                 onChange={onChange}
//                 className="input-shipment short-input"
//               />
//             </div>

//             <div className="form-individual">
//               <label htmlFor="phoneSender">Phone</label>
//               <input
//                 type="number"
//                 name="phoneSender"
//                 id="phoneSender"
//                 value={phoneSender}
//                 onChange={onChange}
//                 className="input-shipment medium-input"
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <div className="form-individual">
//               <label htmlFor="quantity">Quantity of Packages</label>
//               <input
//                 type="number"
//                 name="quantity"
//                 id="quantity"
//                 value={quantity}
//                 onChange={onChange}
//                 className="input-shipment mid-input"
//               />
//             </div>

//             <div className="form-individual">
//               <label htmlFor="weight">Total Weight (lb)</label>
//               <input
//                 type="number"
//                 name="weight"
//                 id="weight"
//                 value={weight}
//                 onChange={onChange}
//                 className="input-shipment mid-input"
//               />
//             </div>
//           </div>
//         </div>

//         <div>
//           <h3 className="tittle-create-ship">Receiver Information</h3>
//           <div className="form-individual">
//             <label htmlFor="nameReceiver">Name</label>
//             <input
//               type="text"
//               name="nameReceiver"
//               id="nameReceiver"
//               value={nameReceiver}
//               onChange={onChange}
//               className="input-shipment"
//             />
//           </div>

//           <div className="form-individual">
//             <label htmlFor="addressReceiver">Address</label>
//             <input
//               type="text"
//               name="addressReceiver"
//               id="addressReceiver"
//               value={addressReceiver}
//               onChange={onChange}
//               className="input-shipment"
//             />
//           </div>

//           <div className="form-group">
//             <div className="form-individual">
//               <label htmlFor="postalCodeReceiver">Postal Code</label>
//               <input
//                 type="text"
//                 name="postalCodeReceiver"
//                 id="postalCodeReceiver"
//                 value={postalCodeReceiver}
//                 onChange={onChange}
//                 className="input-shipment short-input"
//               />
//             </div>
//             <div className="form-individual">
//               <label htmlFor="cityReceiver">City</label>
//               <input
//                 type="text"
//                 name="cityReceiver"
//                 id="cityReceiver"
//                 value={cityReceiver}
//                 onChange={onChange}
//                 className="input-shipment medium-input"
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <div className="form-individual">
//               <label htmlFor="provinceReceiver">Province</label>
//               <input
//                 type="text"
//                 name="provinceReceiver"
//                 id="provinceReceiver"
//                 value={provinceReceiver}
//                 onChange={onChange}
//                 className="input-shipment short-input"
//               />
//             </div>

//             <div className="form-individual">
//               <label htmlFor="phoneReceiver">Phone</label>
//               <input
//                 type="number"
//                 name="phoneReceiver"
//                 id="phoneReceiver"
//                 value={phoneReceiver}
//                 onChange={onChange}
//                 className="input-shipment medium-input"
//               />
//             </div>
//           </div>

//           <div className="form-group">
//             <div className="form-individual">
//               <label htmlFor="price">Price</label>
//               <input
//                 type="number"
//                 name="price"
//                 id="price"
//                 value={price}
//                 readOnly
//                 className="input-shipment mid-input"
//               />
//             </div>

//             <div className="form-individual">
//               <label htmlFor="eta">Estimated Time of Arrival</label>
//               <input
//                 type="text"
//                 name="eta"
//                 id="eta"
//                 value={eta}
//                 readOnly
//                 className="input-shipment mid-input"
//               />
//             </div>
//           </div>
//           {shipNow ? (
//             <div>
//               <button className="btn btn-ship" type="submit">
//                 Ship
//               </button>
//             </div>
//           ) : (
//             <div>
//               <p className="btn btn-ship" onClick={getEstimation}>
//                 Estimate
//               </p>
//             </div>
//           )}
//         </div>
//       </form>
//     </section>
//   );
// };

// export default OrderForm;
