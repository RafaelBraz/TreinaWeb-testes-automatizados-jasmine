class Calculator{
    sum(n1, n2){
        return n1 + n2;
    }
}

class Person{
    randomCalc(calculator){
        var n1 = parseInt(Math.random()*10),
            n2 = parseInt(Math.random()*10);
        return `${n1} + ${n2} = ${calculator.sum(n1,n2)}`;
    }
}

/* Testa se a função "sum" está sendo executada */
describe('Person', function(){
    it('uses the Calculator to sum', function(){
        // Instancia os objetos
        var calculator = new Calculator();
        var person = new Person();

        // Substitui a função "sum" de "calculator" por um spy
        spyOn(calculator, 'sum');

        // Executa o spy (que se encontra no lugar da função) 
        person.randomCalc(calculator);

        // Testa se a função foi chamada
        expect(calculator.sum).toHaveBeenCalled();
    });
});

/** 
 * Testa se na chamada da função "sum"
 * foi passado o parâmetro "calculator" 
 */
describe('Person', function(){
    it('uses the Calculator to sum', function(){
        // Instancia os objetos
        var calculator = new Calculator();
        var person = new Person();

        // Substitui a função "randomCalc" de "person" por um spy
        spyOn(person, 'randomCalc');

        // Executa o spy
        person.randomCalc(calculator);

        // Verifica se foi passado o paramêtro "calculator" para a função
        expect(person.randomCalc).toHaveBeenCalledWith(calculator);
    });
});

/* Executa o spy mantendo o fluxo e retorno da função */
describe('Person', function(){
    it('uses the Calculator to sum', function(){
        // Instancia os objetos
        var calculator = new Calculator();
        var person = new Person();

        // Substitui a função "randomCalc" de "person" por um spy
        // mas mantém o fluxo da mesma funcionando
        spyOn(person, 'randomCalc').and.callThrough();

        // Executa o spy e a função, e guarda o resultado
        var result = person.randomCalc(calculator);
        console.log(result);

        // Verifica se o parametro "calculator" foi passado para função
        expect(person.randomCalc).toHaveBeenCalledWith(calculator);
    });
});

/**
 * Executa o spy e retorna um valor pre-definido
 * como resultado da função
 */
describe('Person', function(){
    it('uses the Calculator to sum', function(){
        // Instancia os objetos
        var calculator = new Calculator();
        var person = new Person();

        // Substitui a função "randomCalc" de "person" por um spy
        // e seta um retorno padrão para a mesma
        spyOn(person, 'randomCalc').and.returnValue(53184);
        
        // Executa o spy e adquire o retorno constante
        var result = person.randomCalc(calculator);
        console.log(result);
        
        // Verifica se o parametro "calculator" foi passado para função
        expect(person.randomCalc).toHaveBeenCalledWith(calculator);
    });
});

/**
 * Executa o spy em uma função fake ao invés da
 * função original
 */
describe('Person', function(){
    it('uses the Calculator to sum', function(){
        // Instancia os objetos
        var calculator = new Calculator();
        var person = new Person();

        // Cria a função fake que substituirá a
        // função original
        var fakeFunction = function(){
            return 'my fake function!';
        }

        // Substitui a função "randomCalc" de "person" por um spy
        // e seta uma função fake para ser executada no lugar
        // da função original
        spyOn(person, 'randomCalc').and.callFake(fakeFunction);
        
        // Executa a função fake e guarda o resultado
        var result = person.randomCalc(calculator);
        console.log(result);
        
        // Verifica se o objeto "calculator" foi passado
        // como parametro da função
        expect(person.randomCalc).toHaveBeenCalledWith(calculator);
    });
});

/**
 * Criando e executando um spy para uma função
 * que ainda não foi implementada
 */
describe('Person', function(){
    it('uses the Calculator to divide', function(){
        // Instancia os objetos
        var calculator = new Calculator();
        var person = new Person();

        // Cria um spy representando a função
        // a ser implementada
        person.randomDiv = jasmine.createSpy('div spy');
        person.randomDiv();

        // Verifica se a função "randomDiv" foi
        // chamada
        expect(person.randomDiv).toHaveBeenCalled();
    });
});

/**
 * Criando e executando um spy para uma função
 * que ainda não foi implementada e adicionando
 * retorno para ele
 */
describe('Person', function(){
    it('uses the Calculator to divide', function(){
        // Instancia os objetos
        var calculator = new Calculator();
        var person = new Person();

        // Cria um spy representando a função
        // a ser implementada e adiciona um retorno
        // fixo para ela
        person.randomDiv = jasmine.createSpy('div spy').and.returnValue(5);

        // Verifica se o valor em "randomDiv" é
        // igual a "5"
        expect(person.randomDiv()).toEqual(5);
    });
});

/**
 * Exemplo de criação de um objeto spy:
 * O Primeiro paramêtro é o nome do objeto
 * O Segundo paramêtro é uma lista contendo
 * os nomes das funções do objeto (que também são spies)
 */
describe('Tape', function(){
    var tape;

    beforeEach(function() {
        tape = jasmine.createSpyObj('tape', ['play', 'pause', 'stop', 'rewind']);

        tape.play();
        tape.pause();
        tape.rewind(0);
    });
});

/**
 * Ao criar um Spy, ele contém uma propriedade chamada "calls"
 * que nos da outras informações sobre a função:
 * 
 * .calls.any(): retorna “false” se o Spy não foi chamado 
 * e “true” se alguma chamada já foi realizada
 * 
 * .calls.count(): retorna o número de vezes que o Spy foi chamado
 * 
 * .calls.argsFor(index): retorna os parâmetros passados para a função
 * de acordo com o índice indicado. Ex: 
 * setValues(5, 37);
 * setValues.calls.argsFor(1) // retorna 37
 * 
 * .calls.allArgs(): retorna todos os parâmetros passados para a função
 * 
 * .calls.all(): retorna o contexto (this) e parâmetros passados pelas chamadas
 * 
 * .calls.mostRecent(): retorna o contexto (this) e parâmetros passados pela chamada mais recente
 * 
 * .calls.first(): retorna o contexto (this) e parâmetros passados pela primeira chamada
 * 
 * .calls.reset(): limpa todos os dados armazenados pelo Spy
 * 
 */
