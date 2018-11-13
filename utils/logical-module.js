var utils = require('../utils/arguments-utils');

exports.executeChildLogical = function (argCount, argTotal, argumentos, element, actions) {
  /** tiene hijos y tiene mas de un parametro */
  const vchilds = utils.findElemenstByParent(actions, element.id);
  if (utils.isEmpty(vchilds)) {
    utils.printErrorGeneral("[003] No tiene hijos!");
    return;
  }
  const vchild = utils.findElementByName(vchilds, argumentos[argCount]);
  /** no estan vacios */
  if (!utils.isEmpty(vchild)) {
    /** miramos si es el argumento final */
    if (argTotal === argCount + 1) {
      /** aqui es donde tenemos que ejecutar el script */
      if (utils.haveExecute(vchild)) {
        /** pues ejecuta!!!!!!!!!! */
        if (!utils.execute(vchild)) {
          return;
        }
      } else {
        /** Si no hay script de ejecuccion... salta error */
        utils.printErrorGeneral("[004] No hay script de ejecuccion");
        return;
      }
    } else {
      /** tenemos que buscar otros hijos */
      argCount++;
      this.executeChildLogical(argCount, argTotal, argumentos, vchild, actions);
    }
  } else {
    /** esta vacio, pinta error */
    utils.printErrorGeneral('[005] No tiene hijos declarados!');
  }
  return;
}