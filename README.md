<h1>Passwd-Gen Module</h1>

**How to use the module :**

```js
const passwd=require("./index.js");
let levelSecurity=3,
    numberChar=10;
console.log(passwd.gen(levelSecurity,numberChar));
//output: ùYsg9j2Aju
```