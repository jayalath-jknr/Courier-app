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
