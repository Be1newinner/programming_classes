import mongoose, { model, Schema } from "mongoose";

const CartSchema = new Schema(
  {
    items: [
      {
        pid: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "products",
          required: true,
        },
        qty: { type: Number, min: 1, required: true }
      }
    ],
    total: { type: Number, required: true, min: 0, default: 0 },
    subtotal: { type: Number, required: true, min: 0, default: 0 },
    tax: { type: Number, required: true, min: 0, default: 0 },
    discount: { type: Number, required: true, min: 0, default: 0 },
    _id: {
      type: mongoose.Schema.Types.ObjectId, ref: "users"
    }
  },
  {
    autoIndex: true,
    _id: false,
    timestamps: true
  }
);

export const CartModel = model("Cart", CartSchema);
