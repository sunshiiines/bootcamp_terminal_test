import assert from "assert";
import fromWhere from "../fromWhere.js";

describe ('Testing the fromWhere function', function(){
    it('should take a car registration number as a parameter and return the town the car is from' , 
    function(){
        assert.equal(fromWhere('CY 567489'), 'Bellville'); 
        assert.equal(fromWhere('CJ 343502'), 'Paarl');
        assert.equal(fromWhere('CA 987504'), 'Cape Town');
        assert.equal(fromWhere('ZN 568593'), 'Some other place!');
    });

});