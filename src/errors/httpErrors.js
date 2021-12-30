class HttpError extends Error {
  constructor(msg, statusCode = 500) {
    super(msg);
    this.statusCode = statusCode;
    Object.setPrototypeOf(this, HttpError.prototype);
  }
}

module.exports = HttpError;
