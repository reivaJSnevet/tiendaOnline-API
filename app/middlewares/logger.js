// app/middlewares/logger.js
const logger = (req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} request to ${req.originalUrl}`);
    next();
  };
  
  export default logger;
  