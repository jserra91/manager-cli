#!/usr/bin/env node

// declarations
var fs = require('fs'); // read files
var utils = require('../utils/arguments-utils');
var logical = require('../utils/logical-module');

// config
var myConfig = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));

// Delete the 0 and 1 argument (node and module script)
var args = process.argv.splice(process.execArgv.length + 2);

// read all arguments
var argumentos = [];
args.forEach(element => {
  argumentos.push(element);
});

/**
 * Validate actions
 */
let actions = [];
myConfig['actions'].forEach(element => {
  actions.push({
    id: element.id,
    name: element.name,
    shortcut: element.shortcut,
    execute: element.execute,
    parent: element.parent,
    childs: element.childs,
    helper: element.helper
  });
});

/** miramos si tiene algun */
if (argumentos.length > 0) {
  let argCount = 1;
  let argTotal = argumentos.length;
  /** find first parent */
  const vparent = utils.findElementByName(actions, argumentos[0]);
  /** esta vacio? */
  if (!utils.isEmpty(vparent)) {
    /** tiene hijos? */
    if (!utils.haveChildrens(vparent) ||
      argCount === argTotal) {
      /** tiene algo para ejecutar? */
      if (utils.haveExecute(vparent)) {
        /** pues ejecuta!!!!!!!!!! */
        if (!utils.execute(vparent)) {
          return;
        }
      } else {
        /** Si no hay script de ejecuccion... salta error */
        utils.printErrorGeneral("[001] No hay script de ejecuccion");
        return;
      }
    } else {
      logical.executeChildLogical(argCount, argTotal, argumentos, vparent, actions);
    }
  } else {
    utils.printErrorGeneral("[002] No hay commando de ejecuccion");
    return;
  }
}

// final
return;
