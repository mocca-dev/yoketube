import connect from './../../../utils/db';
import User from './../../../models/User';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';

export const POST = async (request) => {
  const { name, email, password } = await request.json();

  await connect();

  const hashedPassword = await bcrypt.hash(password, 5);

  const newUser = new User({
    name,
    email,
    password: hashedPassword,
    week: [
      { name: 'Monday', number: 1, listId: '648c7cf1d36c8dee9eefae2b' },
      { name: 'Tuesday', number: 2, listId: '' },
      { name: 'Wednesday', number: 3, listId: '' },
      { name: 'Thursday', number: 4, listId: '' },
      { name: 'Friday', number: 5, listId: '' },
      { name: 'Saturday', number: 6, listId: '648c7cf1d36c8dee9eefae2b' },
      { name: 'Sunday', number: 7, listId: '648c7cf1d36c8dee9eefae2b' },
    ],
  });

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
