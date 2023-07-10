import mongoose from 'mongoose';

const { Schema } = mongoose;

const linkListSchema = new Schema({
  url: {
    type: String,
    required: true,
  },
});

const listSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    list: {
      type: [linkListSchema],
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model('List', listSchema);
