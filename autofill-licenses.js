var path = require("path");
var fs = require("fs");

var node_modules_path = path.join(__dirname, "/node_modules");
var readedDir = fs.readdirSync(node_modules_path);
var result = "";
for (const moduleFoldername of readedDir) {
    result += "\n" + Array(30).join("//") + "\n" + moduleFoldername + "\n";
    var fullModulePath = path.join(node_modules_path, moduleFoldername);
    if (fs.existsSync(path.join(fullModulePath, "LICENSE"))) {
        result += "\n" + fs.readFileSync(path.join(fullModulePath, "LICENSE")).toString();
        continue;

    } else if (fs.existsSync(path.join(fullModulePath, "LICENSE.txt"))) {
        result += "\n" + fs.readFileSync(path.join(fullModulePath, "LICENSE.txt")).toString();
        continue;

    }
    result += "\n(no license)";
}
fs.writeFileSync(path.join(__dirname, "/licenses.txt"), result);
