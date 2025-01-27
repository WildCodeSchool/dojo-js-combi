Create a function that returns all combinations of a given list of elements (without repetition).

Examples
```js
combi(['A', 'B', 'C']); // -> ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']

combi(['A', 'B', 'C', 'A']); // -> ['ABC', 'ACB', 'BAC', 'BCA', 'CAB', 'CBA']

combi([1, 2, 3]); // -> ['123', '132', '213', '231', '312', '321']

combi([1, 'Z', 3]); // -> ['1Z3', '13Z', 'Z13', 'Z31', '31Z', '3Z1']

combi([]); // -> []

combi(); // -> Throws an Error: Illegal argument
```