# manager-cli
Manager-cli es un gestor personalizado vía comandos hecho con Node. En él se puede configurar con un único JSON y a partir de él, genera todos los posibles comandos. Se instala como un modulo global.

## Contents
* [1 Create module](#1)
* [2 Personalize](#2)
* [3 JSON](#3)

## <a name="1"></a>1 Create module

```shell
npm i && npm run build
```

## <a name="2"></a>2 Personalize
Dentro del package.json hay el BIN y como quieres que se llame el modulo.

```typescript
{
  ...
  "bin": {
    "manager-cli-serra": "./bin/global.js"
  },
  ...
}
```

Si lo editas y introduces "manager-helloWorld" el comando para ejecutar el gestor será:

```shell
manager-helloWorld
```

## <a name="3"></a>3 JSON
Dentro de la carpeta config hay un JSON con diferentes parametros para introducir.

```typescript
{
  "actions": [
    {
      "id": 1, <- ID unico
      "name": "generate", <- Comando para ejecutar
      "shortcut": "g", <- shortcut
      "execute": "", <- comando interno de ejecuccion
      "parent": 0, <- Padre
      "childs": false, <- Tiene hijos?
      "helper": "This is a simple test helper1" <- Ayuda
    },
  ]
}
```

Un ejemplo:
```typescript
{
  "actions": [
    {
      "id": 1,
      "name": "generate",
      "shortcut": "g",
      "execute": "",
      "parent": 0,
      "childs": true,
      "helper": "This is a simple test helper1"
    },
    {
      "id": 2,
      "name": "create",
      "shortcut": "c",
      "execute": "",
      "parent": 1,
      "childs": true,
      "helper": "This is a simple test helper2"
    },
    {
      "id": 3,
      "name": "prepare",
      "shortcut": "p",
      "execute": "mkdir C:\\Serra\\prepare",
      "parent": 1,
      "childs": false,
      "helper": "This is a simple test helper3"
    },
    {
      "id": 4,
      "name": "now",
      "shortcut": "n",
      "execute": "mkdir C:\\Serra\\now",
      "parent": 2,
      "childs": false,
      "helper": "This is a simple test helper4"
    }
  ]
}
```
Con este ejemplo puedes ejecutar los comandos:

```shell
manager-cli-serra generate create now
```

```shell
manager-cli-serra generate prepare
```
En el primer comando crea una carpeta dentro de "C:\Serra\" que se llama "now". La segunda crea la carpeta "prepare".

O sus shortcuts

```shell
manager-cli-serra g c n
```

```shell
manager-cli-serra g p
```

