import assert from "assert";
import isFromBellville from "../isFromBellville.js";

describe ('Testing the isFromBellville function', function(){
    it('should return true when the registration starts with CY', 
    function(){
        assert.equal(isFromBellville('CY 123'), true);
        assert.equal(isFromBellville('CJ 123'), false);
    });

});