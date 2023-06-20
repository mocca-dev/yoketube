import { NextResponse } from 'next/server';
// import List from '../../../models/List';
import connect from '../../utils/db';
import User from '../../models/User';

export const GET = async (request: Request) => {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  try {
    await connect();
    const userData = await User.findOne({ email });

    return new NextResponse(JSON.stringify(userData), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
