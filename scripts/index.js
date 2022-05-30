let ejs = require("ejs");
let ButtonTemplate = require("../templates/Button.ts");
let colors = ["red", "blue", "green", "purple"];
let people = ["geddy", "neil", "alex"];
const shell = require("../shellHelper");
const prompts = require("prompts");
const shelljs = require("shelljs");
const exec = shelljs.exec;
const path = require("path");
var fs = require("fs");
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const directoryPath = path.join(__dirname, "/../templates");
let currentDirPath = process.cwd();
const { updateExpressionWithTypeArguments } = require("typescript");
let componentPath =
  "storybook-react/src/storybook/stories/components/primitives/";
generateStorybook();

async function generateStorybook() {
  return new Promise((resolve, reject) => {
    (async () => {
      shell.series(
        [
          "git clone git@github.com:vidhi499/storybook-react.git",
          "cd storybook-react && git checkout end-storybook && yarn  && rm -rf .git",
        ],
        function (err) {
          if (err) {
            console.log("Build Failed", err);
            reject(err);
          } else {
            //passsing directoryPath and callback function
            fs.readdir(directoryPath, function (err, files) {
              //handling error
              if (err) {
                return console.log("Unable to scan directory: " + err);
              }
              //listing all files using forEach
              // updateTheme();
              files.forEach(function (file) {
                // Do whatever you want to do with the file
                // updateTheme();
                if (file == "Wrapper.ts") {
                  updateTheme();
                } else {
                  let html = ejs.render(
                    require("../templates/" + file).template,
                    {
                      color: colors[getRandomInt(colors.length)],
                    }
                  );

                  fs.appendFileSync(
                    componentPath +
                      file.split(".")[0] +
                      "/" +
                      file.split(".")[0] +
                      ".stories.tsx",
                    html
                  );
                }
              });
            });

            resolve("Setup successful");
          }
        }
      );
    })();
  });
}

function updateTheme() {
  const wrapperPath =
    "storybook-react/src/storybook/stories/components/Wrapper.tsx";
  let finalTheme = themeTransformer();

  // Object.assign(test, );
  // // console.log(test);
  const wrapper = ejs.render(require("../templates/Wrapper.ts").template, {
    theme: finalTheme,
  });
  console.log(wrapper);
  fs.writeFileSync(wrapperPath, wrapper);
}

function themeTransformer() {
  let theme = require("../theme/theme.ts").theme;
  let foundationThemeKeys = Object.keys(theme.foundation);
  let transformedTheme = {};
  let components = Object.keys(theme.components);
  let componentKeys = Object.keys(theme.components);
  const map = new Map();
  for (let i = 0; i < foundationThemeKeys.length; i++) {
    transformedTheme[foundationThemeKeys[i]] =
      theme["foundation"][foundationThemeKeys[i]];
  }
  transformedTheme["components"] = {};
  for (let i = 0; i < componentKeys.length; i++) {
    // transformedTheme["components"][componentKeys[i]] = {};
    // console.log(
    //   typeof JSON.parse(JSON.stringify(theme["components"][componentKeys[i]]))
    // );
    // transformedTheme["components"][componentKeys[i]] = JSON.parse(
    //   JSON.stringify(theme["components"][componentKeys[i]])
    // );
    // console.log(transformedTheme);
    map.set(componentKeys[i], theme["components"][componentKeys[i]]);
    transformedTheme["components"][componentKeys[i]] = "***" + componentKeys[i];
  }
  let finalObj = JSON.stringify(transformedTheme);
  // console.log(typeof finalObj, finalObj);

  for (let i = 0; i < componentKeys.length; i++) {
    console.log('"***' + componentKeys[i] + '"');
    finalObj = finalObj.replace(
      '"***' + componentKeys[i] + '"',
      map.get(componentKeys[i])
    );
    // console.log(finalObj.replace("Button", "Button1"));
  }
  // console.log(finalObj);
  return finalObj;
}

function runNodeScript(path) {
  let comm = require(path).commands;
  comm.forEach((command) => {
    // console.log(command);
    terminalTab.open("cd " + process.cwd() + " && " + command);
  });
}
