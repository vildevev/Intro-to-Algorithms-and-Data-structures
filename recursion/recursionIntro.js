//1. Write a function that loops through the numbers n down to 0. If you haven't done so try using a while loop to do this.
function downToZero(n) {
	while (n !== 0) {
		n--;
	}
	return;
}

//2. Next, try looping just like above except using recursion
function recursiveDownToZero(n) {
	while (n !== 0) {
		recursiveDownToZero(--n);
	}
	return;
}
//3.Write a function 'exponent' that takes two arguments base, and expo, uses a while loop to return the exponenet value of the base.
function exponent(base, expo) {
	while (expo > 1) {
		base = base * base;
		expo--;
	}
	return base;
}
//4. Write a function 'RecursiveExponent' that takes two arguments base, and expo, recursively returns exponent value of the base.
function recursiveExponent(base, expo) {
	base = base * base;
	expo--;
	while (expo > 1) {
		recursiveExponent(base, expo);
	}
	return base;
}
//5. Write a function 'recursiveMultiplier' that takes two arguments, 'arr and num', and multiplies each arr value into by num and returns an array of the values.
function recursiveMultiplier(arr, num) {
	var resArr = [];
	function multiplier(numArr, numValue) {
		resArr.push(numArr.shift() * numValue);
	}
	while (arr.length > 0) {
		multiplier(arr, num);
	}
	return resArr;
}
//6. Write a function 'recursiveReverse' that takes an array and uses recursion to return its contents in reverse
function recursiveReverse(nums) {
	var newArr = [];
	function reverser(numArr) {
		newArr.push(numArr.pop());
	}
	while (nums.length > 0) {
		reverser(nums);
	}
	return newArr;
}
