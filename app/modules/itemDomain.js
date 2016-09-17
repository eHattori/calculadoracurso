module.exports = function(){

    var itemDomain = {

        nome : "",
        preco : 0,
        imposto : 0,
        estado : { uf : "Demais", imposto : 17 },
        calculo : function(qtdItem){
            return ((this.preco * qtdItem) * (1+(this.estado.imposto/100)));
        },

        desconto : function(precoFinal){
            var desconto = 0;

            if(precoFinal >= 1000 &&  precoFinal < 5000){
                desconto = 3;
            } else if(precoFinal >= 5000 &&  precoFinal < 7000){
                desconto = 5;
            } else if(precoFinal >= 7000 &&  precoFinal < 10000){
                desconto = 7;
            } else if(precoFinal >= 10000 &&  precoFinal < 50000){
                desconto = 10;
            } else if(precoFinal > 50000){
                desconto = 15;
            }

            return precoFinal - (precoFinal * ((desconto/100)));
        }
    };

    return itemDomain;
};