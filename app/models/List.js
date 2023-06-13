import mongoose from 'mongoose';

const { Schema } = mongoose;

const listSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    list: {
      type: String,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('List', listSchema);
