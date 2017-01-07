const should = require('chai').should();
const fizzBuzzer = require('../fizzBuzzer');

// unit tests for `fizzBuzzer` function
describe('fizzBuzzer', function() {

	// test normal cases that should return 'fizz-buzz'
	it('should return fizz-buzz for multiples of 15', function() {
		const multiplesOf15 = [15, 30, 45, 60];
		multiplesOf15.forEach(function(item) {
			const answer = fizzBuzzer(item);
			answer.should.equal('fizz-buzz');
		});
	});

	// test normal cases that should return 'buzz'
	it('should return buzz for numbers divisible by 5 but not 3', function() {
		const divisibleBy5Not3 = [5, 10, 20, 25, 35];
		divisibleBy5Not3.forEach(function(item) {
			const answer = fizzBuzzer(item);
			answer.should.equal('buzz');
		});
	});

	// test normal cases that should return 'fizz'
	it('should return fizz for numbers divisible by 3 but not 5', function() {
		const divisibleBy3Not5 = [3, 6, 9, 12, 18];
		divisibleBy3Not5.forEach(function(item) {
			const answer = fizzBuzzer(item);
			answer.should.equal('fizz');
		});
	});

	// test normal cases that should return the item
	it('should return numeric input if not divisible by 3 or 5', function() {
		const notDivisibleBy3Or5 = [1, 2, 4, 7];
		notDivisibleBy3Or5.forEach(function(item) {
			const answer = fizzBuzzer(item);
			answer.should.equal(item);
		});
	});

	// test range of non-numeric inputs that should throw Error
	it('should throw error for non-numeric inputs', function() {
		const notNumbers = ['5', false, 'fifteen'];
		notNumbers.forEach(function(item) {
      (function() {
          fizzBuzzer(item);
      }).should.Throw(Error);
		});
	});
});
