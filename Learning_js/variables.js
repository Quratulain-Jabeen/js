const accountId = 9780
let accountName = "Quratulain"
var accountPassword = "abc1234"
// not to use var because of block & functional scope issue. (what is scope? "{}") 
accountEmail = "xyz@gmail.com"


// accountId = 4567
// console.log(accountId); constant value didn't changed as mentioned in the name it's constant.

accountName = "QJ"
accountPassword = "efg8520"
accountEmail = "mno@gmail.com"


// Instead of printing every single line by writing console.log(), we are using; 

console.table([accountName, accountPassword, accountEmail]);