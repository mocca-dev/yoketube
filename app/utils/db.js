import mongoose from 'mongoose';

const connect = async () => {
  try {
    await mongoose.connect(process.env.MONGO);
  } catch (error) {
    throw new Error('Connection error!');
  }
};

export default connect;

// const localUri = process.env.MONGO;
// const connection = {};
// export default async function connect() {
//   if (connection.isConnected) {
//     console.log('DB is already connected');
//     return;
//   }

//   if (mongoose.connections.length > 0) {
//     connection.isConnected = mongoose.connections[0].readyState;
//     if (connection.isConnected === 1) {
//       console.log('use previous connection');
//       return;
//     }
//     await mongoose.disconnect();
//   }

//   const db = await mongoose.connect(localUri);
//   console.log('? MongoDB Database Connected Successfully');
//   connection.isConnected = db.connections[0].readyState;
// }

// export async function disconnectDB() {
//   if (connection.isConnected) {
//     if (process.env.NODE_ENV === 'production') {
//       await mongoose.disconnect();
//       connection.isConnected = false;
//     } else {
//       console.log('not discounted');
//     }
//   }
// }
