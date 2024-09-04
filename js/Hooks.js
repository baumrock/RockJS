if (typeof pw == "undefined") {
  var pw = {};
}

class Hooks {
  add(name) {
    console.log("add hook", name);
    return name;
  }
}

pw.hooks = new Hooks();

console.log(pw.hooks.add("test"));
