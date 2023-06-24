import { NextResponse } from 'next/server';
import User from '../../models/User';
import connect from '../../utils/db';

export const POST = async (request) => {
  try {
    const req = await request.json();

    await connect();

    let user = await User.findOne({ _id: '648fc8acd57f0d2bb98b0382' });
    let { week } = user;

    week = week.map((day) => {
      if (day.number === req.dayNumber) {
        return { ...day, listId: req.listId };
      }
      return day;
    });

    user.week = week;
    const updatedUser = await user.save();

    const newDay = updatedUser.week[req.dayNumber - 1];
    return new NextResponse(JSON.stringify(newDay), {
      status: 200,
    });
  } catch (error) {
    return new NextResponse('Database Error', { status: 500 });
  }
};
