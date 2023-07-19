import assert from "assert";
import countRegNumber from "../countRegNumber.js";

describe('The countRegNumber function', function(){


    it('It should return 3 when called with CA 182736,CY 523519,CJ 812328', function(){
        assert.equal(countRegNumber('CA 182736,CY 523519,CJ 812328'), 3);
    });
});
