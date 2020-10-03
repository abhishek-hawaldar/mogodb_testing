const mongoose= require('mongoose');

mongoose.Promise=global.Promise;

before(function(done){

 
    mongoose.connect('mongodb://localhost/testaroo');

    mongoose.connection.once('open', function(){
    
        console.log('Connection has been made, now make fireworks...');
         done();
    }).on('error', function(error){
    
        console.log(' Connection error:', error);
    }); 

});


beforeEach(function(done){

mongoose.connection.collections.mariochars.drop(function(){

done();
});
});
//C:\Program Files\MongoDB\Server\4.4\bin>mongod.exe