describe('Object comparison', function(){
    
    var a = {nome: 'TreinaWeb'};
    var b = {nome: 'TreinaWeb'};

    it('is true using toEqual', function(){
        expect(a).toEqual(b);
    });
    
    // it('throw a error using toBe, couz the objects are not the same', function(){
    //     expect(a).toBe(b);
    // });
    
    it('is true using toBe to comparison the same object', function(){
        expect(a).toBe(a);
    });

});

describe('Boolean', function(){
    
    it('is true, couz this use ==', function(){
        expect("TreinaWeb").toBeTruthy();
    });

    it('is true, couz this use ==', function(){
        expect(0).toBeFalsy();
    });

    it('is true, when doing a negation', function(){
        expect(false).not.toBeTruthy();
    });

});

describe('Exist', function(){

    it('is true when test list elements', function(){
        expect([1,2,3]).toContain(2);
    });


    it('is true when test substrings', function(){
        expect("TreinaWeb").toContain("Web");
    });

});

describe('Defined', function(){
    var obj = {};

    it('is true, couz attribute "name" is not defined', function(){
        expect(obj.name).toBeUndefined();
    });
    
    // obj.name = "TreinaWeb";

    // it('is true, couz now, "name" is defined', function(){
    //     expect(obj.name).toBeDefined();
    // });
});

describe('Null', function(){
    it('is null', function(){
        expect(null).toBeNull();
    });
});

describe('NaN', function(){

    it('is not a NaN value', function(){
        expect(10).not.toBeNaN();
    });

    it('is a NaN value', function(){
        expect(0 / 0).toBeNaN();
    });

});

/**
 * Outros matchers:
 * expect(10).toBeGreaterThan(1);
 * expect(‘a’).toBeLessThan(‘z’); 
 * expect(20.3).toBeCloseTo(20.32, 1);
 * expect("TreinaWeb").toMatch(/Web/); // expressão regular
 * expect(myFunction).toThrow(); // Espera uma excessão
 */

 