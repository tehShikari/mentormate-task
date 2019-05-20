# mentormate-task


index.js
App is supposed to print the first row of the MM logo, by taking the x value, then taking either the hyphen or asterisk symbol and repeat(x).   //app works until here
While duplicating the previous row, the hyphens go x-1 on the new row, while the asterisks go x+2 on the new row, all until logo.hyphenMiddle is gone, then the next row gets flipped, logo.hyphenMiddle disperses into 2 new hyphens and logo.left and .right continue spreading to the sides, but spreading to the middle gets them in a new var logo.starMiddle, which decrements "*" by 2 (x-2). The 2 new hyphens increment by 2 (+1 on each side). 
Everything until logo.starLeft is the [0] index && until logo.hyphenLeft is gone completely.


index2.js - in test folder
App is supposed to take the value of x, then the array logo and use indexOf() to determine whether the string is "-" or "*".
If it is "-", repeat(x). If it is "*", repeat(x);   //app works until here
Then take x and repeat the same, with the formula "-" -> x-1 || x-2 for the middle. For "*" -> x+2 until the middle hyphens are gone and then it moves the asterisks to the beginning of the string by 1 index, until at index[0].
