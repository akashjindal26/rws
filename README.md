codingTest project step to run the codes.

Below is the function which requires two parameters String ARRAY and Output ArrayType value ('alphaArray', 'numericArray', 'alphaNumericArray' ,'specialArray')
splitArray(mixedArray, ValueType)

for example :-
const MIXED_ARRAY = [
    'ABC',
    '5&F',
    'QWE34',
    'fgh',
    123,
    '123',
    'TY$',
    'OOO',
    'sha256',
    '005',
    'XYZ5',
    '^^^',
];

1 For special character
input: splitArray(MIXED_ARRAY, "specialArray"); 
output: ["5&F", "TY$", "^^^"]

2 For alpha Array
input: splitArray(MIXED_ARRAY, "alphaArray");
output: ["ABC", "fgh", "OOO"]

3 For numeric Array
input: splitArray(MIXED_ARRAY, "numericArray");  
output: [123, "123", "005"]

4 For alphaNumeric Array
input: splitArray(MIXED_ARRAY, "alphaNumericArray"); 
output: ["QWE34", "sha256", "XYZ5"]

