var express = require('express')
var app = express();
var bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));

var consign  = require('consign');

consign()
    .then('app/modules')
    .into(app);

app.get('/', function (req, res) {

    var html = "<!DOCTYPE html>"+
        "<html lang='en'>"+
        "<head>"+
        "<meta charset='UTF-8'>"+
        "<bodytitle></bodytitle>"+
        "</head>"+
        "<body>"+
        "<form method='post' action='/' >"+
        "preco : <input type='text' name='preco'  />"+
        "qtd : <input type='text' name='qtd'  /><br/>"+
        "<select name='estados'><option value='19'>RJ</option><option value='18'>SP</option><option value='12'>MG</option><option value='12'>PR</option><option value='17'>Demais</option>"+
        "<input type='submit'> Calcular </input>"+
        "</form>"+
        "</body>"+
        "</html>";


    res.send(html);
});


app.post('/', function(req,res){
    var itemDomain = app.app.modules.itemDomain;

    itemDomain.preco          = req.body.preco;
    itemDomain.estado.imposto = req.body.estados;
    var qtd                   = req.body.qtd;

    var valorfinal = itemDomain.desconto(itemDomain.calculo(qtd));
    res.send("Valor final: " + valorfinal.toString());
});


app.listen(3000, function(){
    console.log("API working in port 3000");
});

module.exports = app;