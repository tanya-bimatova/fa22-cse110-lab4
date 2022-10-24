1) prints 3; the loop goes through i's 0 to 2; then i is incremented to 3 and we break out of the loop; i is a var -> is visible after loop, it's a global variable
2) prints 150; it's the last value of discountedPrice and it is visible after loop because it's a global variable
3) prints 150; it's the last value of finalPrice and it is visible after loop because it's a global variable
4) the function will return an array [50, 100, 150] because this is what is pushed insed the for loop into 'discounted' array and the array itself is a global variable
5) error; i is defined and is visible only inside the for loop
6) error; discountedPrice is defined and is visible only inside the for loop
7) prints 150; finalPrice is declared and is visible inside the whole function; so it gets updated and the last value is 150
8) the function will return an array [50, 100, 150]; 'discounted' array is declared and is visible inside the whole function
9) error; i is defined and is visible only inside the for loop
10) prints 3 because it's the length of the 'prices' array
11) the function will return an array [50, 100, 150]; although the array is defined using const, we're not reassigning the array itself to another array; we can modify the elements of the const array
12) A. student.name B. student['Grad Year'] C. student.greeting() D. student['Favorite Teacher'].name E. student.courseLoad[0])
13) A. "32" (numeric string used with + gives string type) B. 1 (numeric string used with - , / , * results number type) C. 3 (null is 0 when used with number)  D. "3null" (numeric string used with + gives string type) E. 4 (if boolean is used, true is 1, false is 0) F. 0 (false is 0, null is 0) G. "3undefined" (numeric string used with + gives string type) H. NaN (non-numeric string used with - , / , * results to NaN)
14) A. true, string '2' becomes a number 2 B. false, both strings become numbers.  C. true, string '2' becomes a number 2 D. false, variables are not of the same type E. false, true becomes 1 and is not equal to 2 F. true, Boolean function will return true for all the numeric values other than 0
15) == checks equality only, while === evaluates checks both equality and type
16) -
17) -
18) 1 4 3 2