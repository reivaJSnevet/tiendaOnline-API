// app/middlewares/errorHandler.js
const errorHandler = (err, req, res, next) => {
    console.error(err);  // Log del error para el servidor
    res.status(err.status || 500).json({
      error: {
        message: err.message || 'Ocurrió un error inesperado.'
      }
    });
  };
  
  export default errorHandler;
  