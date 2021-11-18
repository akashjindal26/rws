/* 
Split the below array into 4 different arrays.
1. Array with items that have only alphabets
2. Array with items that have only numbers
3. Array with items that have both alphabets and numbers
4. Array with items that have any characters other than alphabets or numbers
*/

/*
let alphaArray = [];
let numericArray = [];
let alphaNumericArray = [];
let specialArray = [];
*/

let filteredArray = [];
function splitArray(mixedArray, ValueType) {
    for (let i = 0; i < mixedArray.length; i++) {
        switch (ValueType) {
            case "numericArray":
                // FOR INTEGER
                var checkInt = /^[0-9]*\d$/;
                if (checkInt.test(mixedArray[i])) {
                    filteredArray.push(mixedArray[i])
                }
                break;
            case "alphaArray":
                //FOR ALPHABET
                var checkAlpha = /^[a-zA-Z ]*$/;
                if (checkAlpha.test(mixedArray[i])) {
                    filteredArray.push(mixedArray[i])
                }
                break;
            case "alphaNumericArray":
                //FOR ALPHA_NUMERIC
                var checkAlphaNumeric = /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d]+$/;
                if (checkAlphaNumeric.test(mixedArray[i])) {
                    filteredArray.push(mixedArray[i])
                }
                break;
            case "specialArray":
                //FOR SPECIAL CHARACTER
                var checkSpecialChar = /[!@#$%^&*(),.?":{}|<>]/;
                if (checkSpecialChar.test(mixedArray[i])) {
                    filteredArray.push(mixedArray[i])
                }
                break;

            default:
                filteredArray.push(mixedArray[i])
                break;
        }
    }
}

// test cases
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

/* 
you can pass valueType for filtering the array according to use like
'alphaArray', 'numericArray', 'alphaNumericArray' ,'specialArray'
*/
splitArray(MIXED_ARRAY, "specialArray");

console.log(filteredArray);

/*
console.log(alphaArray); // should print ["ABC", "fgh", "OOO"] Done
console.log(numericArray); // should print [123, "123", "005"] Done
console.log(alphaNumericArray); // should print ["QWE34", "sha256", "XYZ5"] Done
console.log(specialArray); // should print ["5&F", "TY$", "^^^"] Done
*/

