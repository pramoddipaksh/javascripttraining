"use strict";
// after deleting/commenting  "use strict"; line, the code ran but balance shown as 15000 instead of 20000. In such domains mismatch calculations/logic can lead financial loss to banks and trust issues.

let accountHolder = "Meera Joshi";
let secondAccountId = "ACC-305";
let accountBalance = 15000;

accountBalance = 20000;

console.log("Holder:", accountHolder);
console.log("Second account:", secondAccountId);
console.log("Balance:", accountBalance);

/*
1. Run the file. Read the error, fix that line, and run it again. Repeat until it runs.
> Run the file. Read the error: SyntaxError: Unexpected token '-' at line 3

2. Rename any invalid variable names to valid camelCase names. Update every line that uses them
> fixed that line 3,9 - account-holder to accountHolder and ran again, output: SyntaxError: Unexpected strict mode reserved word at line 4
> fixed that line - 2ndAccountId to secondAccountId and ran again, output: ReferenceError: acountBalance is not defined at line 7

3. Fix the typo so the balance is really updated to 20000
>  fixed that line typo - acountBalance to accountBalance and ran again, output:
Holder: Meera Joshi
Second account: ACC-305
Balance: 20000

4. Once it works, put the typo back and delete the `"use strict";` line. Run it again. Write a comment at the top of the file explaining what changed and why that's dangerous
> kept typo back 'acountBalance' and commented "use strict" line, ran again, output: 
Holder: Meera Joshi
Second account: ACC-305
Balance: 15000

5. Put `"use strict";` back and fix the typo again before you submit
> puted "use strict"; back and fixed the typo again acountBalance to accountBalance, ran again, output:
Holder: Meera Joshi
Second account: ACC-305
Balance: 20000






*/
