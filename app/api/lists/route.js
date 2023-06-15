import { NextResponse } from 'next/server';
import List from '../../models/List';
import connect from '../../utils/db';

export const GET = async (request) => {
  try {
    await connect();
    const lists = await List.find();

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
