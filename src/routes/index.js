const {Router} = require('express');

const router = Router();

router.get('/test', (req, res)=>{
  const data = {
    "Nombre": "Cristian",
    "Apellido":"Silva FLorez"
  }
  res.json(data);
  // res.send('Hola Mundo');
});


module.exports = router;