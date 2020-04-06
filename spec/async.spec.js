/**
 * Teste falha pois o expect verifica com undefined, por
 * não aguardar o retorno da função assincrona
 */
// var myValue = 0;
// function myAsyncFunc(){
//     setTimeout(function(){
//         myValue = 10;
//     }, 2000);
// }

// describe('Async Function', function(){
//     it('should be 10', function(){
//         expect(myValue).toEqual(10);
//     });
// });

/**
 * Executando testes em funções assincronas:
 * Para isso é necessário executar a função
 * fora do spec (no beforeEach)
 * Além disso, é necessário executar a função
 * "done()" do describe, para indicar que a função
 * assíncrona foi finalizada
 */
// var myValue = 0;
// function myAsyncFunc(done){
//     setTimeout(function(){
//         myValue = 10;
//         done();
//     }, 2000);
// }

// describe('Async Function', function(){
//     beforeEach(function(done){
//         myAsyncFunc(done);
//     });

//     it('should be 10', function(){
//         expect(myValue).toEqual(10);
//     });
// });

/**
 * Executando testes em funções assíncronas:
 * Não é o ideal executar o done() na função
 * testada, por isso, podemos utilizar promises
 * para executar a função "done()" dentro do
 * describe
 */
var myValue = 0;
function myAsyncFunc(){
    var promise = new Promise(function(resolve, reject){
        setTimeout(function(){
            myValue = 10;
            resolve(myValue);
        }, 2000);
    })
    return promise;
}

describe('Async Function', function(){
    beforeEach(function(done){
        myAsyncFunc().then(done);
    });

    it('should be 10', function(){
        expect(myValue).toEqual(10);
    });
});

// OBS.: Specs também executam a função
// "done()":
// it('should be 10', function(done){
//     myAsyncFunc().then(function(){
//         expect(myValue).toEqual(10);
//         done();
//     });
// })

// OBS.2: Como existem dois casos com teste
// assíncrono, as duas funções não são executadas
// a tempo e geram uma falha por timeout em uma delas