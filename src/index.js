const express = require("express");
const app = express();
const morgan = require("morgan");

//Confirguraciones      Valida confirguracin del puerto
app.set('port', process.env.PORT || 3000);


//middleware
app.use(morgan('dev'));
//Soportar formatos json
app.use(express.urlencoded({ extended:false}));
app.use(express.json());

//Rutas
app.use(require('./routes/index'));
app.use('/api/peliculas', require('./routes/peliculas'));

// app.use(require('./routes/peliculas));

//Iniciando servidor
app.listen(app.get('port'), () => {
  console.log(`Server on port ${app.get('port')})`);
});

//npm i nodemon -D = Reiniciar el servidor

//npm run dev = para correr el servidor
