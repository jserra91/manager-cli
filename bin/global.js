#!/usr/bin/env node

// declarations
var fs = require('fs'); // read files
var eval = require('eval'); // execute

// files
var myLibrary = require('../lib/index.js');

// config
var myConfig = JSON.parse(fs.readFileSync('./config/config.json', 'utf8'));

// Delete the 0 and 1 argument (node and module script)
var args = process.argv.splice(process.execArgv.length + 2);

// Retrieve the first argument
var name = args[0];

// Displays the text in the console
console.log("all args " + args);

/**
 * Validate actions
 */
var validate = false;
myConfig['actions'].forEach(element => {
    // elemento padre
    if ((element.name     === args[0] ||
        element.shortcut  === args[0]) &&
        element.parent    === 0 ) {
        /** no tiene hijos, ejecuta lo que tenga definido */
        if (!element.child) {
            if (element.execute !== '') {
                // tiene que ejecutar alguna cosa
                eval(element.execute);
                console.log('eval executed ' + element.execute);
            }
            if (element.lib !== '') {
                // tiene que ejecutar alguna libreria interna

            }
        }
    }
});