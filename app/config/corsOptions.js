// Opciones de CORS
const corsOptions = {
    origin: function (origin, callback) {
      const whitelist = ['http://localhost:3000', 'http://localhost:5173'];
      if (whitelist.indexOf(origin) !== -1 || !origin) {
        callback(null, true);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
    optionsSuccessStatus: 200, // Algunos navegadores más antiguos (IE11, varios SmartTVs) necesitan 200
    credentials: true, // Permitir configurar cookies de respuesta
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  };
  
  export default corsOptions;
  