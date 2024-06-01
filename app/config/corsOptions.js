// Opciones de CORS
const corsOptions = {
    origin: function (origin, callback) {
     callback(null, true);
    },
    optionsSuccessStatus: 200, // Algunos navegadores más antiguos (IE11, varios SmartTVs) necesitan 200
    credentials: true, // Permitir configurar cookies de respuesta
    allowedHeaders: ['Content-Type', 'Authorization'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE'
  };
  
  export default corsOptions;
  