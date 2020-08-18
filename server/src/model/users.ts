import { model, Schema } from "mongoose";

const userSchema: Schema = new Schema({
  full_name: {
    required: true,
    type: String,
    lowercase: true,
  },
  phone_number: {
    type: String,
    required: true,
    unique: true,
  },
  key: {
    type: String,
    required: true,
  },
  date_of_creation: {
    type: Date,
    required: true,
    default: Date.now(),
  },
});

export default model("user_account", userSchema);
