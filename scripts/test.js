const path = require("path");
var fs = require("fs");
let str = "NativeBase/example/storybook/stories/theme/Responsive/FontSize.tsx";
console.log(str.slice(0, -1));
const data = fs.readFileSync(str.substring(0, str - 1), "utf8");
console.log(data);
// fs.writeFile(
//   "/NativeBase/example/storybook/stories/theme/Responsive/FontSize.tsx/",
//   "Hey there!",
//   "utf8",
//   (err) => {
//     console.log(err);
//   }
// );
