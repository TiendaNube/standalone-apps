function sendApiResponse(response:any, statusCode: number, message: {}) {
  return response.status(statusCode).json(message);
}

export default sendApiResponse;
