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

  await fetch('/api/notification', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(message),
  });
};
