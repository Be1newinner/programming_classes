import mongoose, { model, Schema } from "mongoose";
import { UserModel } from "./users.model.js";

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
      type: mongoose.Schema.Types.ObjectId, ref: "users", validate: {
        validator: async function (value) {
          const data = await UserModel.exists({ _id: value });
          console.log("VALIDATION USER ", data)
          return data;
        },
        message: "User is invalid!"
      }
    },
  },
  {
    autoIndex: true,
    _id: false
  }
);

export const CartModel = model("Cart", CartSchema);
