import connect from './../../../utils/db';
import User from './../../../models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({ name, email, password: hashedPassword });

  try {
    await newUser.save();
    return new NextResponse('User has been created', {
      status: 201,
    });
  } catch (error) {
    return new NextResponse(error.message + 'HOLA', {
      status: 500,
    });
  }
};
