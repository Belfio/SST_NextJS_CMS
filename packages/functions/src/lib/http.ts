// ToDO: it should enforce error messages to come with a specific format, I should typescript the message into somehing a little bit more elaborate for errors that just a string

export const httpResponse = (
  code: number,
  message: string,
  headers: string = JSON.stringify({
    headers: { "Content-type": "application/json" },
  })
) => {
  const headerObj = JSON.parse(headers);
  return {
    statusCode: code,
    headers: headerObj,
    body: message,
  };
};
