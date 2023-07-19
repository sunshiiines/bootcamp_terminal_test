import assert from "assert";
import isWeekday from "../isWeekday.js";

describe ('Testing the isWeekday function', function(){
    it('should return takes a string parameter - to find out if the parameter passed in is a day of the week' , 
    function(){
        assert.equal(isWeekday('Saturday'), false);
        assert.equal(isWeekday('Sunday'), false);
        assert.equal(isWeekday('Monday'), true);
        assert.equal(isWeekday('Tuesday'), true);
        assert.equal(isWeekday('Wednesday'), true);
        assert.equal(isWeekday('Thursday'), true);
        assert.equal(isWeekday('Friday'), true);
    });

});