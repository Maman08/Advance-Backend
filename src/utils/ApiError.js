class ApiError extends Error {
    constructor(message, statusCode,errors=[],stack="") {
      // this is the official error message rom the error it self, this message will be in the response.json for the client
      super(message);
  
      this.statusCode = statusCode;
      this.status = `${statusCode}`.startsWith('4') ? 'fail' : 'error';
      this.isOperational = true;
      this.message=message,
      this.errors=errors
      if(stack){
        this.stack=stack
      }
      else{
        Error.captureStackTrace(this, this.constructor);
      }
    }
  }
  
  module.exports = ApiError;