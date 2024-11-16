//it is used to avoid the unusal behaviour of some javascript sturcture

//this code will not work as we are using the strict mode and also not spcifiy anything for variable like let , const , or var
"use strict"
a = 12;
console.log(a)

//this will be different than the regular javascript
/*
Silent Errors Throw: Errors that are usually ignored or fail silently will throw errors in strict mode (e.g., assigning to a non-writable property).

Global Variable Declaration Prohibited: Variables must be declared using let, const, or var; assigning to an undeclared variable will throw an error.

No this Binding to window in Functions: In functions, this is undefined if not explicitly set, instead of defaulting to the global window object.

Duplicate Parameter Names Disallowed: Functions cannot have duplicate parameter names.

eval and arguments Restrictions: eval does not create variables in the enclosing scope, and modifying arguments directly is restricted.

Reserved Words as Variable Names Forbidden: Certain keywords (like implements, interface, private, etc.) cannot be used as identifiers.
*/


//UI/UX principles -- Images
/*
1. Images play a mojor role in desing your website either they will be image or icon choose the wisely

Some website for good images
1.Unsplash
2.Pintrest
3.Favicon
4.Flaticon
Also vidoe are also effect your website
1.Stock Videos
*/

//A amazing website for reference : https://simondaufresne.com/