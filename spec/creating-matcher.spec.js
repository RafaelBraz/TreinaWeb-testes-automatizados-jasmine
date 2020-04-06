/**
 * 
 * Um Matcher deve retornar um objeto que possua uma função chamada “compare()”,
 * a qual recebe o valor atual (passado para a função “expect()”) e o esperado.
 * 
 * Esta função “compare()” deve retornar um objeto, o qual possui um atributo 
 * “pass”, que indica se o teste passou ou não.
 * 
 * Outro atributo que o objeto retornado da função “compare()” possui é o “message”.
 * É nesse atributo que colocamos uma mensagem caso algo ocorra.
 * 
 */
var myMatchers = {
    toBe2: function(util, customEqualityTesters){
        return {
            compare: function(actual, expected){
                var result = {}
                result.pass = actual === 2;

                if(!result.pass){
                    result.message = "Expected " + actual + " to be exactly 2";
                }

                return result;
            }
        }
    }
}

/**
 * Utilizando o Matcher
 */
describe('Exist', function(){
    /**
     * Registrando o Matcher no jasmine
     */
    beforeEach(function(){
        jasmine.addMatchers(myMatchers);
    })
    
    it('is 2', function(){
        expect(2).toBe2();
    });
});