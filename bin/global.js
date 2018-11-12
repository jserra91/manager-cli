#!/usr/bin/env node

// declarations
var fs = require('fs'); // read files
var eval = require('eval'); // execute
var utils = require('../utils/arguments-utils');

// files
var myLibrary = require('../lib/index.js');

// config
var myConfig = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));

// Delete the 0 and 1 argument (node and module script)
var args = process.argv.splice(process.execArgv.length + 2);

// Retrieve the first argument
var name = args[0];

// Displays the text in the console
console.log('all args ' + args);

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
    lib: element.lib,
    parent: element.parent,
    childs: element.childs,
    helper: element.helper
  });
});

/** miramos si tiene algun */
if (args.length > 0) {
  /** find first parent */
  const vparent = utils.findElementByName(actions, args[0]);
  /** esta vacio? */
  if (!utils.isEmpty(vparent)) {
    /** tiene hijos? */
    if (!utils.haveChildrens(vparent)) {
      /** tiene algo para ejecutar? */
      if (utils.haveExecute(vparent)) {
        /** pues ejecuta!!!!!!!!!! */
        if (!utils.execute(vparent)) {
          return;
        }
      } else {
        /** Si no hay script de ejecuccion... salta error */
        utils.printErrorGeneral("No hay script de ejecuccion");
        return;
      }
    } else {
      /** tiene hijos! */
      let vchild[] = utils.findElemenstByParent(actions, vparent.id);
      /** no estan vacios */
      if (!utils.isEmpty(vchild)) {

      } else {
        /** esta vacio, pinta error */
        utils.printErrorGeneral('No tiene hijos declarados!');
      }
    }
  } else {
    utils.printErrorGeneral("No hay commando de ejecuccion");
    return;
  }
}

// final
return;
