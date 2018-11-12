var utils = require('../utils/arguments-utils');

exports.executeChildLogical = function (argCount, argTotal, argumentos, element, actions) {
      /** sumamos uno al contador de argumentos */
      console.log("element id " + element.id);
      console.log("argCount " + argCount);
      console.log("argTotal " + argTotal);
      /** tiene hijos y tiene mas de un parametro */
      const vchilds = utils.findElemenstByParent(actions, element.id);
      if (utils.isEmpty(vchilds)) {
        utils.printErrorGeneral("No tiene hijos!");
        return;
      }
      console.log("vchilds " + vchilds);
      console.log("argumentos[argCount] " + argumentos[argCount-1]);
      const vchild = utils.findElementByName(vchilds, argumentos[argCount-1]);
      /** no estan vacios */
      if (!utils.isEmpty(vchild)) {
        /** miramos si es el argumento final */
        if (argTotal === argCount) {
          /** aqui es donde tenemos que ejecutar el script */
          if (utils.haveExecute(vchild)) {
            /** pues ejecuta!!!!!!!!!! */
            if (!utils.execute(vchild)) {
              return;
            }
          } else {
            /** Si no hay script de ejecuccion... salta error */
            utils.printErrorGeneral("No hay script de ejecuccion");
            return;
          }
        } else {
          /** tenemos que buscar otros hijos */
          argCount++;
          this.executeChildLogical(argCount, argCount, argumentos, vchild, actions);
        }
      } else {
        /** esta vacio, pinta error */
        utils.printErrorGeneral('No tiene hijos declarados!');
      }
}