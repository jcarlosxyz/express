// Para iniciar el proyecto con npm init --yes 
//  cargar el servidor express
//  npm i express


const express = require("express");
const app  = express();


app.get("/",(req,res)=>{
    res.send("hola como estas ");
})

app.get("/error",(req,res)=>{
    res.send("pagina de error");
})

app.listen(3000, ()=> {
    console.log("Servidor corriendo",3000);

});

