# Raindrops Tech Test

## Task
Write a function that takes as its input a number (n) and converts it to a string, the contents of which depend on the numbers factors

- if the number has a factor of 3, output 'Pling'
- if the number has a factor of 5, output 'Plang'
- if the number has a factor of 7, output 'Plong'
- if the number does not have any of the above as a factor simply return the numbers digits

Examples:
- 28's factors are 1, 2, 4, 7, 14 and 28: this would be a simple 'Plong'
- 30's factors are 1, 2, 3, 5, 6, 10, 15, 30: this would be a 'PlingPlang'
- 34 has four factors: 1, 2, 17, and 34: this would be '34'

This test can be completed in a language of your choice and should be made available on your github account. You should write tests to cover your expected range of inputs and outputs. Commit often and document well.

## Approach
Using JavaScript alongside the Jasmine testing framework I'm going to use TDD to influence the design of the code.

This means I will write a failing test.
Then I will write just enough code to make the test past.
Then I will look for an opportunity to refactor

This process will then be repeated as necessary.

This will result in a robust and well tested randrops function.

An example of the intended out come is to have the following code return the correct output:

```
raindrops(number)
```

