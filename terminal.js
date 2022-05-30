var execSync = require("child_process").execSync;
var through = require("through");
var os = require("os");
var child;

var args = process.argv;

function openTab(cmd, cb) {
  if (os.platform() !== "darwin") {
    throw new Error(
      "No support for this operating system but feel free to fork the repo and add it :)"
    );
  }

  var open = [
    "osascript -e 'tell application \"Terminal\" to activate' ",
    '-e \'tell application "System Events" to tell process "Terminal" to keystroke "t"',
    "using command down' ",
    '-e \'tell application "Terminal" to do script ',
    '"',
    cmd,
    '"',
    " in selected tab of the front window'",
  ].join("");

  child = execSync(open);
}

process.stdin.setEncoding("utf8");

process.stdin.pipe(
  through(
    function (buf) {
      openTab(buf.toString());
      process.exit(0);
    },
    function () {}
  )
);

if (args.length > 2) {
  openTab(args.slice(2).join(" "));
  process.exit(0);
}

module.exports = {
  open: openTab,
};
