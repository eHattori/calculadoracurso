/***
 * @author Eduardo Hattori
 * @date 17/09/16.
 */

describe('Testes da calculador', function(){

    var app;
    var itemDomain;
    var should;

    before(function(){
        app = require('../server');
        should = require('should');
        itemDomain = app.app.modules.itemDomain;
    });


    it("Deveria calcular imposto", function(done){

        itemDomain.nome = "remedio";
        itemDomain.preco = 25;

        (itemDomain.calculo(10) == 292.5).should.be.true();
        done();
    });


    it("Deveria calcular imposto quando SP", function(done){

        itemDomain.nome    = "remedio";
        itemDomain.preco   = 25;
        itemDomain.estado  = { uf : "SP", imposto : 18 };

        (itemDomain.calculo(10) == 295).should.be.true();
        done();

    });

    it("Deveria calcular desconto acima de 10000", function(done){

        itemDomain.preco   = 25;
        itemDomain.estado  = { uf : "SP", imposto : 18 };

        (itemDomain.calculo(10) == 295).should.be.true();
        done();
    });

    it("Deveria retornar o valor sem desconto", function(done){

        (itemDomain.desconto(100) == 100).should.be.true();
        done();
    });

});
