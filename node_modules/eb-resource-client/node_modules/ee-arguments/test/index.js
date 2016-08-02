


    var   Arguments     = require('../')
        , util          = require('util')
        , assert        = require('assert');


    var items = [1, new Number(3), {seNumber: 55}, [4, 'hi'], 'so precice', new String('such nice'), true, false, 69];


    describe('The parser', function() {
        it('should be able to retreive arguments by their type', function(){
            var testFunc = function(){
                var args = new Arguments(arguments);

                assert.equal(args.get('number'), items[0]);
                assert.equal(args.get('object'), items[2]);
                assert.equal(args.get('array'), items[3]);
                assert.equal(args.get('string'), items[4]);
                assert.equal(args.get('boolean'), items[6]);
            };
            
            testFunc.apply(null, items);
        });


        it('should be able to get arguments by their index', function(){
            var testFunc = function(){
                var args = new Arguments(arguments);

                assert.equal(args.getByIndex('number', 2), items[8]);
                assert.equal(args.getByIndex('object', 1));
                assert.equal(args.getByIndex('array', 1));
                assert.equal(args.getByIndex('string', 1), items[5]);
                assert.equal(args.getByIndex('boolean', 1), items[7]);
            };
            
            testFunc.apply(null, items);
        });


        it ('should be able to return defaut values', function(){
            var testFunc = function(){
                var args = new Arguments(arguments);

                assert.equal(args.getByIndex('number', 3, 'some default'), 'some default');
                assert.equal(args.getByIndex('object', 1, null), null);
            };
            
            testFunc.apply(null, items);
        });


        it ('should be able to work with type specific methods', function(){
            var testFunc = function(){
                var args = new Arguments(arguments);

                assert.equal(args.getStringByIndex(1), items[5]);
                assert.equal(args.getNumber(), items[0]);
            };
            
            testFunc.apply(null, items);
        });
    });     
