const express = require('express');
const app = express();

app.use(express.json())

const rotas = () =>{
    
    app.get('/cadastroAluno',function(req,res){
        res.render('')
    });

    app.get('/cadastroProfessor',function(req,res){
        res.render('./')
    });
}

export default rotas