const Mathy = require('../../Mathy');
const assert = require('chai').assert;

describe('Math example', () => {
    it('should multiply tow numbers', done => {
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.multiply(100, 2)
            .then(res => {
                //Assert
                try {
                    assert.equal(res, 200);
                    done();
                } catch (err) {
                    done(err)
                }
            })
            .catch(done);
    });

    it ('should substract two numbers', done => {
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.substract(100,50)
            .then(res=>{
                //Assert
                try {
                    assert.equal(res, 50);
                    done();
                } catch (err) {
                    done(err);
                }
            })
            .catch(done);
    });
 
});