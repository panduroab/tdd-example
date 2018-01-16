const Mathy = require('../../Mathy');
const assert = require('chai').assert;

describe('Math example', () => {
    let arg1 =27,arg2=93 ;
    it('Should multiply two numbers', done => {//Multiplica dos numeros
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.multiply(arg1, arg2)
            .then(res => {
                //Assert
                try {
                    assert.equal(res, arg1*arg2);
                    done();
                } catch (err) {
                    done(err);
                }
            })
            .catch(done);
    });
    it('Should add two numbers', done =>{
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
    it('Should substract one number from another',done=>{
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.substract(arg1,arg2)
            .then(res=>{
                //Assert
                try{
                    assert.equal(res,arg1-arg2);
                    done();
                }catch(err){
                    done(err);
                }
            })
            .catch(done);
    });
    it('Should divide one number between another',done=>{
        //Arrange
        let mathy = Mathy();
        //Action
        mathy.divide(arg1,arg2)
            .then(res=>{
                try{
                    assert.equal(res,arg1/arg2);
                    done();
                }catch(err){
                    done(err);
                }
            })
            .catch(done);
    });
});