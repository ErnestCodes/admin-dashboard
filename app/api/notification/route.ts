// pages/api/sendNotification.ts
import type { NextApiRequest, NextApiResponse } from 'next';

const notificationUrl = 'https://exp.host/--/api/v2/push/send';

export default async function POST(req: NextApiRequest, res: NextApiResponse) {
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
      return res.status(response.status).json({ message: error });
    }

    const data = await response.json();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
