import assert from "assert";
import countAllPaarl from "../countAllPaarl.js";

describe ('Testing the countAllPaarl function', function(){
    it('should take a parameter string with registration numbers separated with commas and return all the registration numbers in the string for Paarl' , 
    function(){
        assert.equal(3, countAllPaarl('CJ 345 123, CJ 2345, CL 123-546, CK 345, CJ 123'));

        assert.equal(2, countAllPaarl('CJ 345 123, CK 345, CJ 123'));
    });

});