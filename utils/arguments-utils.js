const { exec, execSync } = require('child_process');

exports.isFather = function (element) {
  return element.parent === 0;
}

exports.isEmpty = function (element) {
  return element === null || element === undefined || element === [];
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
  return output === [] ? undefined : output;
}

exports.findElementByName = function (actionsInput, inputName, parent) {
  let output = undefined;
  actionsInput.forEach(element => {
    if ((element.name === inputName ||
      element.shortcut === inputName) &&
      element.parent === parent) {
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
  try {
    var process = exec(element.execute);
    process.stdout.on('data', function (data) { console.log(data); });
    process.stderr.on('data', function (data) { console.log('error: ' + data); });
    process.on('exit', function (code) { console.log('finished'); });
  } catch (e) {
    console.error(e);
    return false;
  }
  return true;
}