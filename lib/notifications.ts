const notificationUrl = process.env.NEXT_PUBLIC_PUSH_URL as string;

export const sendNotification = async (
  body: string,
  token: string,
  status: string
) => {
  const message = {
    to: token,
    sound: 'default',
    title: `Verification ${status}`,
    body,
  };

  await fetch(notificationUrl, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Accept-encoding': 'gzip, deflate',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
};
