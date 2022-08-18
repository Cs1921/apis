const {Router} = require('express');
const router = Router();

const peliculas  = require('../ejemplo.json');
//console.log(peliculas);

//peticion get
router.get('/', (req, res)=>{
  
  res.json(peliculas);
});


//peticion post
router.post('/', (req, res)=>{
  // console.log(req.body);
  const {name, directory, año, rating} = req.body;

  if(name && directory && año && rating){
    res.json("Guardado")
  }else{

    res.send("Peticion errónea");
  }
  //res.json(peliculas);
});




module.exports = router;