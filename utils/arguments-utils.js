const { exec } = require('child_process');

exports.isFather = function (element) {
  return element.parent === 0;
}

exports.isEmpty = function (element) {
  return element === null || element === undefined;
}

exports.haveChildrens = function (element) {
  return element.childs;
}

exports.haveHelper = function (element) {
  return !!element.helper && element.helper !== '';
}

exports.haveExecute = function (element) {
  return !!element.execute && element.execute !== '';
}

exports.findElementById = function (actionsInput, id) {
  let output = undefined;
  actionsInput.forEach(element => {
    if (element.id === id) {
      output = element;
      return output;
    }
  });
  return output;
}

exports.findElemenstByParent = function (actionsInput, parent) {
  let output = [];
  actionsInput.forEach(element => {
    if (element.parent === parent) {
      output.push(element);
    }
  });
  return output === [] : undefined ? output;
}

exports.findElementByName = function (actionsInput, inputName) {
  let output = undefined;
  actionsInput.forEach(element => {
    if (element.name === inputName ||
      element.shortcut === inputName) {
      output = element;
      return output;
    }
  });
  return output;
}

exports.printErrorGeneral = function (msg) {
  console.error('****** ERROR ******');
  console.error(msg);
  console.error('******************');
}

exports.printErrorExecute = function (element, msg) {
  console.error('****** ERROR ******');
  console.error(msg);
  if (haveHelper(element)) {
    console.error('******* INFO ******');
    console.error(element.helper);
  }
  console.error('******************');
}

exports.execute = function (element) {
  exec(element.execute, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return false;
    }
    return true;
  });
}