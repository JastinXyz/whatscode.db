const fs = require("fs");
var path = "./db.json";

if (path) {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, "{}");
  }
}

module.exports = {
  init: function init(pth) {
    path = pth;
    fs.existsSync('./db.json') ? fs.unlinkSync('./db.json') : ""
    if (!fs.existsSync(path)) {
      fs.writeFileSync(path, "{}");
    }
  },
  set: function set(name, v) {
    let content = JSON.parse(fs.readFileSync(path, "utf8"));

    content[name] = v;
    fs.writeFileSync(path, JSON.stringify(content));
    return v;
  },
  get: function get(name) {
    let content = JSON.parse(fs.readFileSync(path, "utf8"));

    return content[name];
  },
  delete: function d(name) {
    let content = JSON.parse(fs.readFileSync(path, "utf8"));

    delete content[name];
    fs.writeFileSync(path, JSON.stringify(content));
    return "";
  },
  all: function all(name) {
    return JSON.parse(fs.readFileSync(path, "utf8"));
  },
  has: function has(name) {
    let content = JSON.parse(fs.readFileSync(path, "utf8"));

    return content[name] ? true : false;
  },
};
