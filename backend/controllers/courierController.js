import asyncHandler from 'express-async-handler';
import CourierModel from '../models/courierModel.js';

// @desc    Create a new courier
// @route   POST /api/couriers
// @access  Public
const createCourier = asyncHandler(async (req, res) => {
  const {
    customerId,
    pickupLocation,
    pickupAddress,
    endLocation,
    endAddress,
    courierType,
    courierContent,
  } = req.body;

  if (!endLocation || !courierType || !courierContent) {
    res.status(400);
    throw new Error('Content cannot be empty!');
  }

  const courier = new CourierModel({
    customerId,
    pickupLocation,
    pickupAddress,
    endLocation,
    endAddress,
    courierType,
    courierContent,
  });

  const data = await courier.save();

  res.status(201).json({
    message: 'Courier created successfully!!',
    courier: data,
  });
});

// @desc    Get all couriers
// @route   GET /api/couriers
// @access  Public
const getAllCouriers = asyncHandler(async (req, res) => {
  const couriers = await CourierModel.find();

  res.status(200).json(couriers);
});

// @desc    Get a single courier by ID
// @route   GET /api/couriers/:id
// @access  Public
const getCourierById = asyncHandler(async (req, res) => {
  // const courier = await CourierModel.findById(req.params.id);
  const courier = await CourierModel.findById(req.user._id);

  if (!courier) {
    res.status(404);
    throw new Error('Courier not found');
  }

  res.status(200).json(courier);
});

// @desc    Update a courier by ID
// @route   PUT /api/couriers/:id
// @access  Public
const updateCourier = asyncHandler(async (req, res) => {
  const id = req.params.id;
  const updatedData = req.body;

  if (!updatedData) {
    res.status(400);
    throw new Error('Data to update cannot be empty!');
  }

  const courier = await CourierModel.findByIdAndUpdate(id, updatedData, {
    new: true,
  });

  if (!courier) {
    res.status(404);
    throw new Error('Courier not found');
  }

  res.status(200).json({
    message: 'Courier updated successfully',
    courier,
  });
});

// @desc    Delete a courier by ID
// @route   DELETE /api/couriers/:id
// @access  Public
const deleteCourier = asyncHandler(async (req, res) => {
  const id = req.params.id;

  const courier = await CourierModel.findByIdAndRemove(id);

  if (!courier) {
    res.status(404);
    throw new Error('Courier not found');
  }

  res.status(200).json({
    message: 'Courier deleted successfully',
  });
});

export {
  createCourier,
  getAllCouriers,
  getCourierById,
  updateCourier,
  deleteCourier,
};
// import asyncHandler from 'express-async-handler';
// import CourierModel from '../models/courierModel.js';

// // @desc    Create a new courier
// // @route   POST /api/couriers
// // @access  Public
// const createCourier = asyncHandler(async (req, res) => {
//   const {
//     nameSender, addressSender, postalCodeSender, citySender, provinceSender, phoneSender,
//     nameReceiver, addressReceiver, postalCodeReceiver, cityReceiver, provinceReceiver, phoneReceiver,
//     quantity, weight, price, eta, status
//   } = req.body;

//   if (!nameSender || !addressSender || !postalCodeSender || !citySender || !provinceSender || !phoneSender ||
//     !nameReceiver || !addressReceiver || !postalCodeReceiver || !cityReceiver || !provinceReceiver|| !phoneReceiver ||
//     !weight || !quantity || !price || !eta || !status) {
//     res.status(400);
//     throw new Error('Content cannot be empty!');
//   }

//   const courier = new CourierModel({
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
//     weight,
//     price,
//     quantity,
//     eta,
//     status,
//     user: req.user.id
//   });

//   const data = await courier.save();

//   res.status(201).json({
//     message: 'Courier created successfully!!',
//     courier: data,
//   });
// });

// // @desc    Get all couriers
// // @route   GET /api/couriers
// // @access  Public
// const getAllCouriers = asyncHandler(async (req, res) => {
//   const couriers = await CourierModel.find();

//   res.status(200).json(couriers);
// });

// // @desc    Get a single courier by user ID
// // @route   GET /api/couriers/:id
// // @access  Public
// const getCourierById = asyncHandler(async (req, res) => {
//   const courier = await CourierModel.findOne({ customerId: req.user._id });

//   if (!courier) {
//     res.status(404);
//     throw new Error('Courier not found');
//   }

//   res.status(200).json(courier);
// });

// // @desc    Update a courier by ID
// // @route   PUT /api/couriers/:id
// // @access  Public
// const updateCourier = asyncHandler(async (req, res) => {
//   const id = req.params.id;
//   const updatedData = req.body;

//   if (!updatedData) {
//     res.status(400);
//     throw  new Error('Data to update cannot be empty!');
//   }

//   const courier = await CourierModel.findByIdAndUpdate(id, updatedData, {
//     new: true,
//   });

//   if (!courier) {
//     res.status(404);
//     throw new Error('Courier not found');
//   }

//   res.status(200).json({
//     message: 'Courier updated successfully',
//     courier,
//   });
// });

// // @desc    Delete a courier by ID
// // @route   DELETE /api/couriers/:id
// // @access  Public
// const deleteCourier = asyncHandler(async (req, res) => {
//   const id = req.params.id;

//   const courier = await CourierModel.findByIdAndRemove(id);

//   if(!order) {
//     res.status(400)
//     throw new Error('Order not Found')
// }

//   if (!courier) {
//     res.status(404);
//     throw new Error('Courier not found');
//   }

//   res.status(200).json({
//     message: 'Courier deleted successfully',
//   });
// });

// export {
//   createCourier,
//   getAllCouriers,
//   getCourierById,
//   updateCourier,
//   deleteCourier,
// };
