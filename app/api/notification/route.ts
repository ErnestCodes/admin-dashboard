import { NextResponse } from 'next/server';

const notificationUrl = 'https://exp.host/--/api/v2/push/send';

export async function POST(req: Request) {
  try {
    const response = await fetch(notificationUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Accept-Encoding': 'gzip, deflate',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(req.body),
    });

    if (!response.ok) {
      const error = await response.json();
      return new NextResponse('Something went wrong', { status: 400 });
    }

    const data = await response.json();
    return NextResponse.json(data);
  } catch (error) {
    console.error(error);
    return new NextResponse('Internal server error', { status: 500 });
  }
}
