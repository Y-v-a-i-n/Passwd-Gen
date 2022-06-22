<h1>Passwd-Gen Module</h1>

**How to install the module :**

```sh
npm install passwd-gen
```

**How to use the module :**

```js
const passwd=require("passwd-gen");
let levelSecurity=3,
    numberChar=10;
console.log(passwd.gen(levelSecurity,numberChar));
//output: ùYsg9j2Aju
```