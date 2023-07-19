import assert from "assert";
import totalPhoneBill from "../totalPhoneBill.js";

describe ('Testing the totalPhoneBill function', function(){
    it('should take in a string calls made and smses sent, then calculate the total bill for the data provided' , 
    function(){
        assert.equal('R7.45', totalPhoneBill('call, sms, call, sms, sms'));
        assert.equal('R3.40', totalPhoneBill('call, sms'));
        assert.equal('R1.30', totalPhoneBill('sms, sms'));
    });

});