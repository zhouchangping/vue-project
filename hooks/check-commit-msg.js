"user strict";
const fs = require("fs");
const path = require("path");

const msgPath = process.argv.slice(2)[0] ?
  path.join(__dirname, "..", process.argv.slice(2)[0]):
  path.join(__dirname, "..", ".git", "COMMIT_EDITMSG");
console.log(msgPath + "-------");
let msgContent = fs.readFileSync(msgPath, "utf-8").toString();
// 移除注视
msgContent = msgContent.replace(/^#.+/mg, "");

if (/^[Mm]erge/.test(msgContent)) {
  process.exit(0);
}

const TYPES = [
  "feat",
  "fix",
  "lint",
  "docs",
  "test",
  "ui",
  "native",
  "style"
];

// commit message校验正则
const syntaxRe = /^(\w+)(\(.+\))?: ?(\S.*)/;


const match = msgContent.match(syntaxRe);
console.log(match+"-------");

let pass = true;
if (match) {
  const [_, type, scope, subject] = match;
  console.oog(type+"---"+scope+"---"+subject);
  if (!TYPES.includes(type)) {
    pass = false;
    console.log("butongg");
  }
  if (!subject || !subject.trim()) {
    pass = false;
    console.log("核心描述必须填写");
  }
} else {
  console.log("git commit ");
  pass = false;
}

if (!pass) {
  console.log(`
  GIT COMMIT message
  `);
  process.exit(1);
}
