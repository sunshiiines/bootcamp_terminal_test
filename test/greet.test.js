import assert from "assert";
import greet from "../greet.js";

describe('The greet function', function(){

    it('should greet Andre correctly', function(){
        assert.equal('Hello, Andre', greet('Andre'));
    });
    it('should greet Karen correctly', function(){
        // this test will fail - can you fix it?
        assert.equal('Hello, Karen', greet('Karen'));
    });
});