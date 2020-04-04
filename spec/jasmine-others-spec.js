/**
 * beforeEach: executado antes de cada execução do spec
 * afterEach: executado depois de cada execução do spec
 */
describe('Sum of constants', function(){
    var result = 0;

    beforeEach(function(){
        result = 2;
    });

    afterEach(function(){
        result = 2;
    });

    it('has to result in 5', function(){
        result += 3;
        expect(result).toEqual(5);
    });

    it('has to result in 9', function(){
        result += 7;
        expect(result).toEqual(9);
    });

});


/**
 * Aninhamento de "suítes"
 */
var isAnagram = require('../anagram');
describe('Anagram', function(){
    
    describe('Letters', function(){
       
        it('is true when "abc" and "cba"', function(){
            expect(isAnagram('abc','cba')).toEqual(true);
        });

        it('is true when "Amor" and "Roma"', function(){
            expect(isAnagram('Amor','Roma')).toEqual(true);
        });

        it('is true when two empty strings', function(){
            expect(isAnagram('', '')).toEqual(true);
        });

    });

    describe('Numbers', function(){
        
        it('is true when "132" and 312', function(){
            expect(isAnagram('132', 312)).toEqual(true);
        });

        it('is true when "0.12" and "102"', function(){
            expect(isAnagram('0.12', '102')).toEqual(true);
        });

        it('is true when 0.12 and "102"', function(){
            expect(isAnagram(0.12, '102')).toEqual(true);
        });

        it('is false when 012 and 102', function(){
            expect(isAnagram(012, 102)).toEqual(false);
        });

    });

});

/**
 * Ignorar a suíte: ao invés de usar describe, utilize xdescribe
 */
xdescribe('letters', function(){
    
    // Ignorar a spec: ao invés de usar it, utilize xit
    xit('is true when "abc" and "cba"', function(){
        expect(isAnagram('abc','cba')).toEqual(true);
    });

    // Como a suíte é uma função, um simples return ignora tudo abaixo:
    return;

    it('is true when "abc" and "cba"', function(){
        expect(isAnagram('abc','cba')).toEqual(true);
    });

});

/**
 * Testes de tipo de retorno (ao invés do valor de retorno)
 * expect(isAnagram('abc','cba')).toEqual(jasmine.any(Boolean));
 * expect(new MyObject).toEqual(jasmine.any(MyObject));
 */
