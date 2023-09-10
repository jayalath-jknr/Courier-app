import mongoose from 'mongoose';

const courierSchema = mongoose.Schema(
  {
    pickupLocation: {
      type: String,
      required: true,
    },
    pickupAddress: {
      type: String,
      required: true,
    },
    endLocation: {
      type: String,
      required: true,
    },
    endAddress: {
      type: String,
      required: true,
    },
    courierType: {
      type: String,
      required: true,
    },
    courierContent: {
      type: String,
      required: true,
    },
    status: {
      type: String,
      default: 'Booked',
    },
    customer: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    deliveryPerson: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
      default: null,
    },
  },
  {
    collection: 'couriers',
    timestamps: true,
  }
);

const Courier = mongoose.model('Courier', courierSchema);

export default Courier;

// import mongoose from 'mongoose';

// const orderSchema = mongoose.Schema(
//   {
//     user: {
//       type: mongoose.Schema.Types.ObjectId,
//       ref: 'User',
//       required: true,
//     },
//     nameSender: {
//       type: String,
//       required: [true, 'Please add a name'],
//     },
//     addressSender: {
//       type: String,
//       required: [true, 'Please provide an email'],
//     },
//     postalCodeSender: {
//       type: String,
//       required: [true, 'Please provide a postal code'],
//     },
//     citySender: {
//       type: String,
//       required: [true, 'Please provide a city'],
//     },
//     provinceSender: {
//       type: String,
//       required: [true, 'Please provide a province'],
//     },
//     phoneSender: {
//       type: Number,
//       required: [true, 'Please provide a phone'],
//     },
//     nameReceiver: {
//       type: String,
//       required: [true, 'Please add a name'],
//     },
//     addressReceiver: {
//       type: String,
//       required: [true, 'Please provide an email'],
//     },
//     postalCodeReceiver: {
//       type: String,
//       required: [true, 'Please provide a postal code'],
//     },
//     cityReceiver: {
//       type: String,
//       required: [true, 'Please provide a city'],
//     },
//     provinceReceiver: {
//       type: String,
//       required: [true, 'Please provide a province'],
//     },
//     phoneReceiver: {
//       type: Number,
//       required: [true, 'Please provide a phone'],
//     },
//     quantity: {
//       type: Number,
//       required: [true, 'Please provide a phone'],
//     },
//     weight: {
//       type: Number,
//       required: [true, 'Please provide a phone'],
//     },
//     price: {
//       type: Number,
//       required: [true, 'Please provide a phone'],
//     },
//     eta: {
//       type: String,
//       required: [true, 'Please provide an eta'],
//     },
//     status: {
//       type: String,
//       required: [true, 'Please provide a status'],
//     },
//   },
//   {
//     timestamps: true,
//   }
// );

// export default mongoose.model('Order', orderSchema);
