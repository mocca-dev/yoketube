import { NextResponse } from 'next/server';
import List from '../../models/List';
import connect from '../../utils/db';

export const GET = async (request) => {
  const { searchParams } = new URL(request.url);
  const email = searchParams.get('email');

  if (email === null) {
    const id = searchParams.get('id');
    try {
      await connect();
      const lists = await List.findOne({ _id: id });

      return new NextResponse(JSON.stringify(lists), { status: 200 });
    } catch (error) {
      return new NextResponse('Database Error', { status: 500 });
    }
  }

  try {
    await connect();
    const lists = await List.find({ email });

    return new NextResponse(JSON.stringify(lists), { status: 200 });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};

export const POST = async (request) => {
  try {
    const list = await request.json();

    await connect();

    const newList = new List(list);
    const res = await newList.save();

    return new NextResponse(JSON.stringify(res), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
