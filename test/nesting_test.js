const assert=require('assert');
const mongoose=require('mongoose');
const Author= require('../models/author');


describe('Nesting records', function(){


    beforeEach( function(done){

        mongoose.connection.collections.authors.drop(function(){
            done()
        });
    });

it('Creates an author with sub-documents', function(done){

var pat= new Author({
    name: 'Abhishek Hawaldar',
    books:[{title:'Kibhaesh journal', pages:400}]

});

 pat.save().then(function(){

        Author.findOne({name:'Abhishek Hawaldar'}).then(function(record){

            assert(record.books.length===1);
            done();
        });
 });

});

it('Adds book to author', function(done){

    var pat= new Author({
        name: 'Abhishek Hawaldar',
        books:[{title:'Kibhaesh journal', pages:400}]
    
    });
    
     pat.save().then(function(){
    
            Author.findOne({name:'Abhishek Hawaldar'}).then(function(record){
    
               
                record.books.push({title:"Green Light", pages:500});
                record.save().then(function(){

                        Author.findOne({name:'Abhishek Hawaldar'}).then(function(result){

                            assert(result.books.length===2);
                            done()
                        });
                });

                });
            });
     });
    
    });

