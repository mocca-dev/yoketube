import { NextResponse } from 'next/server';
import List from '../../../models/List';
import connect from '../../../utils/db';

export const GET = async (request) => {
  const req = await request;

  try {
    await connect();
    const lists = await List.find();

    return new NextResponse(JSON.stringify(lists), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
