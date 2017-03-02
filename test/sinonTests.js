'use strict';
var chai = require('chai'),
    sinon = require('sinon'),
    expect = chai.expect;

chai.should();

describe('sinon test',function(){
	var api;

	beforeEach(function(){
		api = {
			dropClass: function(classId, cb){
				cb();
			}
		}
	});

	describe('api.dropClass', function(){
		it('should call the callback', function(){
			/*var called = false
			function callback(){
				called = true
			}*/
			var spy = sinon.spy()
			api.dropClass(1, spy)
			//expect(called).to.be.true
			spy.called.should.be.true;
		})

		it('should call the callback and log to the console', function(){
			function onClassDropped(){
				console.log('onClassDropped was called')
			}


			var spy = sinon.spy(onClassDropped);
			api.dropClass(1,spy);
			spy.called.should.be.true;
		})

	})
})