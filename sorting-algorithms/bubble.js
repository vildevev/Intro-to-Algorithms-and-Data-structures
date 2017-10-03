/*
Bubble SORT

*** Description

Iterate over array, comparing adjacent items and swap if in incorrect order. Largest elements bubble to the end of the array

*** Exercises

- Implement bubble sort
- Identify time complexity

Optimizations:
- Make algorithm adaptive (if at any point array is already sorted, exit function early). After doing this, what is time complexity for nearly sorted arrays?
- For each pass through the array, are you doing any unnecessary checking of elements? Minimize checking and consider the effect on time complexity.

Variants:
- Implement cocktail sort (for each pass find both min and max values and sort in both directions). How does this impact performance?
(https://en.wikipedia.org/wiki/Cocktail_sort)

*/

var bubbleSort = function(array) {
	var wall = array.length;
	while (wall >= 0) {
		for (var i = 0; i < wall; i++) {
			if (array[i] > array[i + 1]) {
				array = swap(array, i, i + 1);
			}
		}
		wall--;
	}
	return array;
};

var swap = function(arr, i1, 12) {
	var int1 = arr[i1];
	var int2 = arr[i2];
	arr[i] = int2;
	arr[i2] = int1;
	return arr;
};


// runtime: O(n2)