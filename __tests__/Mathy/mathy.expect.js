const Mathy = require('../../Mathy');
const assert = require('chai').assert;

describe('Math example', () => {
    let arg1=10,arg2=12;
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
    it('Should add two numbers',done=>{
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.add(arg1,arg2)
            .then(res=>{
                //Assert
                try{
                    assert.equal(res,arg1+arg2);
                    done();
                }catch(err){
                    done(err);
                }
            })
            .catch(done);
    });
});