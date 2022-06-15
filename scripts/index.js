let ejs = require("ejs");
const shell = require("../shellHelper");
const prompts = require("prompts");
const shelljs = require("shelljs");
const { readdirSync } = require("fs");
const exec = shelljs.exec;
const path = require("path");
var fs = require("fs");
const prettier = require("prettier");

let reactNativeVectorIconsArray = [
  "AntDesign",
  "Entypo",
  "EvilIcons",
  "Feather",
  "FontAwesome",
  "MaterialCommunityIcons",
  "Fontisto",
  "Foundation",
  "Ionicons",
  "MaterialIcons",
  "Octicons",
  "Zocial",
  "SimpleLineIcons",
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}
const directoryPath = path.join(__dirname, "/../templates");
const { Console } = require("console");
let storybookPath = "storybook-react/src/storybook/stories";
generateStorybook();
// getAllStories();
let finalPath = "/storybook/";
let promisesArr = [];
let exportedComp;
function getAllStories() {
  let regex = "/{([^}]*)}/";
  shell.series(
    [
      // "git clone git@github.com:GeekyAnts/NativeBase.git"
      "ls -a",
    ],
    async function (err) {
      if (err) {
        console.log("Build Failed", err);
        reject(err);
      } else {
        let storiesPath = "NativeBase/example/storybook/stories/";
        let dir = getDirectories(storiesPath);
        exportedComp = getExportedStories(
          "NativeBase/example/storybook/stories/index.tsx"
        );
        await createFiles(dir, 0);
        updateTemplate(directoryPath);
      }
    }
  );
}
var getDirName = require("path").dirname;

const removeCommentsFromTSXFile = (file) => {
  return file.replace(/\/\*[\s\S]*?\*\/|([^\\:]|^)\/\/.*$/gm, "");
};

async function createFiles(dir, flag) {
  return new Promise(async (resolve, reject) => {
    let path;
    for (let i = 0; i < dir.length; i++) {
      if (Array.isArray(dir[i])) {
        await createFiles(dir[i], 1);
      } else {
        if (checkIfPathIsExported(exportedComp, dir[i])) {
          await createFileSync(dir[i]);
        }
      }
    }
    resolve("All files created!");
  });
}

function checkIfPathIsExported(exportedComp, currentPath) {
  for (let i = 0; i < exportedComp.length; i++) {
    if (currentPath.includes(exportedComp[i])) {
      return true;
    }
  }
  return false;
}

function getExportedStories(path) {
  let finalArray = [];
  try {
    const data = fs.readFileSync(path.slice(0, -1), "utf8");
    let finalData = removeCommentsFromTSXFile(data);
    let exportedData = finalData.split("\n");
    for (let i = 0; i < exportedData.length; i++) {
      if (exportedData[i] !== "") {
        finalArray.push(exportedData[i].split("'")[1].substring(1));
      }
    }
    return finalArray;
  } catch (err) {
    console.error(err);
  }
}

async function createFileSync(dir) {
  return new Promise((resolve, reject) => {
    let path = dir.replace(
      "NativeBase/example/storybook/stories",
      storybookPath
    );

    try {
      const data = fs.readFileSync(dir.slice(0, -1), "utf8");
      if (dir.includes("index.tsx")) {
        let fileName = dir.split("/");
        fileName.pop();
        writeFile(
          path.replace(
            "index.tsx",
            fileName[fileName.length - 2] + ".stories.tsx"
          ),
          getModifiedData(data, dir)
        );
      } else {
        writeFile(path, getData(data), () => {});
      }
      resolve("Files created");
    } catch (err) {
      console.error(err);
      resolve("Files not created");
      reject(err);
    }
  });
}

function getData(data) {
  if (!data.includes("@expo/vector-icons")) {
    return data;
  }
  let regex = /import \{((.|\n)*)icons\'\;/gm;
  let matches = data.match(regex);
  let otherImports = getOtherImports(matches);

  if (matches != null) {
    for (let i = 0; i < matches.length; i++) {
      let res = checkIcons(matches[i]);
      let icon = getIcon(res, otherImports);
      data = data.replace(matches[i], icon);
    }
  }
  return data;
}

function getOtherImports(matches) {
  let regex = /import \{((.|\n)*)base\'\;/gm;
  for (let i = 0; i < matches.length; i++) {
    return matches[i].match(regex);
  }
  // console.log(matches);
}

function checkIcons(match) {
  let arr = [];
  for (let i = 0; i < reactNativeVectorIconsArray.length; i++) {
    if (match.includes(reactNativeVectorIconsArray[i])) {
      arr.push(reactNativeVectorIconsArray[i]);
    }
  }
  return arr;
}

function getIcon(iconsArr, otherImports) {
  // var icons = matches.substring(
  //   matches.indexOf("{") + 1,
  //   matches.lastIndexOf("}")
  // );
  let finalImport = "";
  for (let i = 0; i < iconsArr.length; i++) {
    finalImport =
      finalImport +
      "import " +
      iconsArr[i] +
      " from 'react-native-vector-icons/dist/" +
      iconsArr[i].trim() +
      "';\n";
  }
  for (let i = 0; i < otherImports.length; i++) {
    finalImport = finalImport + otherImports[i];
  }

  // if (icons.includes(",")) {
  //   let iconsArr = icons.split(",");

  //   for (let i = 0; i < iconsArr.length; i++) {
  //     finalImport =
  //       finalImport +
  //       "import " +
  //       iconsArr[i] +
  //       " from 'react-native-vector-icons/dist/" +
  //       iconsArr[i].trim() +
  //       "';\n";
  //   }
  //   console.log(finalImport, iconsArr);
  // } else {
  //   finalImport =
  //     finalImport +
  //     "import " +
  //     icons +
  //     " from 'react-native-vector-icons/dist/" +
  //     icons.trim() +
  //     "';\n";
  // }
  return finalImport;
}

function getModifiedData(data, path) {
  data = removeCommentsFromTSXFile(data);
  data = data.replace(
    "import { storiesOf } from '@storybook/react-native';",
    ""
  );
  data = data.replace(
    "import { withKnobs } from '@storybook/addon-knobs';",
    "import { Meta } from '@storybook/react';"
  );

  let regex = /add\((.*)/g;
  let componentsArr = data.match(regex);

  let componentsList = "";
  for (let i = 0; i < componentsArr.length; i++) {
    let arr = componentsArr[i].split(",");

    componentsList =
      componentsList +
      arr[1].substring(arr[1].indexOf("<") + 1, arr[1].lastIndexOf("/>")) +
      ",";
  }

  return replaceTemplate(data, componentsList, path);
}

function replaceTemplate(data, componentsList, path) {
  let storybookPath = "";
  let paths = path.split("/");
  paths.shift();
  paths.shift();
  paths.shift();
  paths.shift();
  paths.pop();
  paths.pop();

  for (let i = 0; i < paths.length; i++) {
    storybookPath =
      storybookPath + paths[i].charAt(0).toUpperCase() + paths[i].slice(1);
    if (i !== paths.length - 1) storybookPath = storybookPath + "/";
  }
  componentsList = componentsList.replaceAll("'", "");
  let template;
  if (path.includes("theme")) {
    template = `export default {
      title: "${storybookPath}",
      decorators: [
        (Story: any) => (
          <Story />
        ),
      ],
    } as Meta;
  
    export { ${componentsList} };
    `;
    if (path.includes("Responsive")) {
      template = `export default {
        title: "${storybookPath}",
        decorators: [
          (Story: any) => (
            <Wrapper>
              <Story />
            </Wrapper>
          ),
        ],
      } as Meta;
    
      export { ${componentsList} };
      `;
    }
  } else if (
    path.includes("useColorMode") ||
    path.includes("useColorModeValue") ||
    path.includes("useSafeArea")
  ) {
    template = `
    export default {
      title: "${storybookPath}",
      decorators: [
        (Story: any) => (
          <View style={{ flex: 1 }}>
            <Story />
          </View>
        ),
      ],
    } as Meta;
  
    export { ${componentsList} };
    `;
  } else {
    template = `export default {
      title: "${storybookPath}",
      decorators: [
        (Story: any) => (
          <Wrapper>
            <Story />
          </Wrapper>
        ),
      ],
    } as Meta;
  
    export { ${componentsList} };
    `;
  }
  let regex = /storiesOf\(((.|\n)*)/g;
  // data = data.match(regex)[0].replace("hiii");
  let replaceableData = data.match(regex)[0];
  data = data.replace(replaceableData, template);
  return data;
}

async function writeFile(path, contents) {
  try {
    fs.mkdirSync(getDirName(path), { recursive: true });
    fs.writeFileSync(path.substring(0, path.length - 1), contents);
  } catch (err) {
    throw "Parameter is not a number!";
  }
}

const getDirectories = (source) =>
  readdirSync(source, { withFileTypes: true }).map((dirent) => {
    if (dirent.isDirectory()) {
      return getDirectories(source + dirent.name + "/");
    } else {
      return source + dirent.name + "/";
    }
  });

async function generateStorybook() {
  return new Promise((resolve, reject) => {
    (async () => {
      shell.series(
        [
          "git clone git@github.com:vidhi499/storybook-react.git",
          "cd storybook-react && git checkout end-storybook  && rm -rf .git",
        ],
        function (err) {
          if (err) {
            console.log("Build Failed", err);
            reject(err);
          } else {
            getAllStories();
            resolve("Setup successful");
          }
        }
      );
    })();
  });
}

function updateTemplate(directoryPath) {
  fs.readdir(directoryPath, function (err, files) {
    if (err) {
      return console.log("Unable to scan directory: " + err);
    }
    files.forEach(function (file) {
      // console.log(directoryPath + "/" + file);
      if (fs.statSync(directoryPath + "/" + file).isDirectory()) {
        updateTemplate(directoryPath + "/" + file);
      } else {
        if (file == "Wrapper.ts") {
          updateTheme(directoryPath + "/" + file);
        } else {
          let str = directoryPath + "/" + file;
          // console.log(
          //   path.join(__dirname, "/../templates"),
          //   "CONNNSOLLLEEE",
          //   str.replace(path.join(__dirname, "/../templates"), storybookPath)
          // );
          let html = ejs.render(
            require(directoryPath + "/" + file).template,
            require(directoryPath + "/" + file).params
          );
          fs.writeFileSync(
            str.replace(path.join(__dirname, "/../templates"), storybookPath),
            html
          );
          // fs.appendFileSync(
          //  +
          //     file.split(".")[0] +
          //     "/" +
          //     file.split(".")[0] +
          //     ".stories.tsx",
          //   html
          // );
        }
      }
    });
  });
}

function updateTheme(path) {
  const wrapperPath = storybookPath + "/components/Wrapper.tsx";
  let finalTheme = themeTransformer();
  const wrapper = ejs.render(require(path).template, {
    theme: finalTheme,
  });
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
    map.set(componentKeys[i], theme["components"][componentKeys[i]]);
    transformedTheme["components"][componentKeys[i]] = "***" + componentKeys[i];
  }
  let finalObj = JSON.stringify(transformedTheme);

  for (let i = 0; i < componentKeys.length; i++) {
    finalObj = finalObj.replace(
      '"***' + componentKeys[i] + '"',
      map.get(componentKeys[i])
    );
  }
  return finalObj;
}

function runNodeScript(path) {
  let comm = require(path).commands;
  comm.forEach((command) => {
    terminalTab.open("cd " + process.cwd() + " && " + command);
  });
}

function makeDirectory(dir) {
  // console.log(dir);
  let command = "";
  let paths = dir.split("/");
  for (let i = 0; i < paths.length; i++) {
    if (!fs.existsSync(process.cwd() + "/" + paths[i])) {
      command = command + "mkdir " + paths[i] + " && cd " + paths[i];
    } else {
      command = "cd " + paths[i];
    }
    if (i !== paths.length - 1) {
      command = command + " && ";
    }
  }
  return new Promise((resolve, reject) => {
    (async () => {
      shell.series([command], function (err) {
        if (err) {
          console.log("Build Failed", err);
          reject(err);
        } else {
          resolve("Setup successful");
        }
      });
    })();
  });
}

function mkDirByPathSync(targetDir, { isRelativeToScript = false } = {}) {
  const sep = path.sep;
  const initDir = path.isAbsolute(targetDir) ? sep : "";
  const baseDir = isRelativeToScript ? __dirname : ".";

  return targetDir.split(sep).reduce((parentDir, childDir) => {
    const curDir = path.resolve(baseDir, parentDir, childDir);
    try {
      fs.mkdirSync(curDir);
    } catch (err) {
      if (err.code === "EEXIST") {
        // curDir already exists!
        return curDir;
      }

      // To avoid `EISDIR` error on Mac and `EACCES`-->`ENOENT` and `EPERM` on Windows.
      if (err.code === "ENOENT") {
        // Throw the original parentDir error on curDir `ENOENT` failure.
        throw new Error(`EACCES: permission denied, mkdir '${parentDir}'`);
      }

      const caughtErr = ["EACCES", "EPERM", "EISDIR"].indexOf(err.code) > -1;
      if (!caughtErr || (caughtErr && curDir === path.resolve(targetDir))) {
        throw err; // Throw if it's just the last created dir.
      }
    }

    return curDir;
  }, initDir);
}

function getChildDirectories(dirArr) {
  for (let i = 0; i < dir.length; i++) {
    fs.lstatSync(path_string).isDirectory();
  }
}
