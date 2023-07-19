import assert from "assert";
import yearsAgo from "../yearsAgo.js";

describe ('Testing the yearsAgo function', function(){
    it('should take in a year and return how many years ago that year is from the current year', 
    function(){
        assert.equal((new Date().getFullYear() - 1976), yearsAgo(1976))
        assert .equal((new Date().getFullYear() - 2000), yearsAgo(2000));
    });

});