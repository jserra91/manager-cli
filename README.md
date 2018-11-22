# manager-cli
Manager-cli is a custom manager command based in NodeJs. It can be configured with a single JSON and from it, generates all possible commands. It's installed as a global module. 

## Contents
* [1 Download from Github](#1)
* [2 Install from npm](#2)
* [3 JSON](#3)
* [4 Other examples](#4)
* [4.1 For developers](#4.1)
* [4.2 For your company](#4.1)
* [5 Thanks to...](#5)

## <a name="1"></a>1 Download from Github

```shell
git clone https://github.com/jserra91/manager-cli.git
cd manager-cli
npm i && npm run build
```

## <a name="2"></a>2 Install from npm

```shell
npm i -g manager-cli
```

## <a name="3"></a>3 JSON
In the user folder create a <b>manager-cli.json</b> with this strcture:

```typescript
{
  "actions": [
    {
      "id": 1, <- Unique ID
      "name": "generate", <- Command
      "shortcut": "g", <- Shortcut
      "execute": "", <- Internal execute command
      "parent": 0, <- Parent
      "childs": false, <- have childs?
      "helper": "This is a simple test helper1" <- Helped
    },
  ]
}
```

For example:
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
With this example you can execute this commands:

```shell
manager-cli generate create now
```

```shell
manager-cli generate prepare
```
With first command create a folder <b>now</b> in <b>C:\Serra\ </b>. With second command create folder <b>prepare</b>

Or with shortcuts:

```shell
manager-cli g c n
```

```shell
manager-cli g p
```

## <a name="4"></a>4 Other examples

## <a name="4.1"></a>4.1 For developers
<details>

```typescript
{
  "actions": [
    {
      "id": 1,
      "name": "create",
      "shortcut": "c",
      "execute": "",
      "parent": 0,
      "childs": true,
      "helper": "This is a simple test helper2"
    },
	{
      "id": 2,
      "name": "vuejs",
      "shortcut": "v",
      "execute": "",
      "parent": 1,
      "childs": true,
      "helper": "This is a simple test helper2"
    },
	{
      "id": 5,
      "name": "application",
      "shortcut": "a",
      "execute": "cd C:\\vuejs && vue create application-example -d",
      "parent": 2,
      "childs": false,
      "helper": "test helper"
    },
	{
      "id": 9,
      "name": "angular",
      "shortcut": "a",
      "execute": "",
      "parent": 1,
      "childs": true,
      "helper": "T"
    },
    {
      "id": 10,
      "name": "project",
      "shortcut": "p",
      "execute": "cd C:\\angular && ng new project angular-test",
      "parent": 2,
      "childs": false,
      "helper": ""
    },
	{
      "id": 11,
      "name": "install",
      "shortcut": "a",
      "execute": "npm i -g @angular/cli && npm i -g vue-cli",
      "parent": 1,
      "childs": false,
      "helper": "T"
    }
  ]
}
```

Commands:
```shell
manager-cli c v a    <- Create Vuejs project
manager-cli create vuejs application    <- Create Vuejs project
manager-cli c a p    <- Create Angular project
manager-cli create angular project    <- Create Angular project
manager-cli install    <- Install @angular/cli and vue-cli (global)
```
</details>

## <a name="4.1"></a>4.2 For your company
<details>

Download from Git and modify "bin" in package.json
```typescript
  ...
  "bin": {
    "my-company": "./bin/global.js"
  },
  ...
```

and upload in your repo
```shell
  npm login && npm publish
```

```typescript
{
  "actions": [
    {
      "id": 1,
      "name": "create",
      "shortcut": "c",
      "execute": "",
      "parent": 0,
      "childs": true,
      "helper": "This is a simple test helper2"
    },
	{
      "id": 2,
      "name": "vuejs",
      "shortcut": "v",
      "execute": "",
      "parent": 1,
      "childs": true,
      "helper": "This is a simple test helper2"
    },
	{
      "id": 5,
      "name": "application",
      "shortcut": "a",
      "execute": "cd C:\\vuejs && vue create application-example -d",
      "parent": 2,
      "childs": false,
      "helper": "test helper"
    },
	{
      "id": 9,
      "name": "angular",
      "shortcut": "a",
      "execute": "",
      "parent": 1,
      "childs": true,
      "helper": "T"
    },
    {
      "id": 10,
      "name": "project",
      "shortcut": "p",
      "execute": "cd C:\\angular && ng new project angular-test",
      "parent": 2,
      "childs": false,
      "helper": ""
    },
	{
      "id": 11,
      "name": "install",
      "shortcut": "a",
      "execute": "npm i -g @angular/cli && npm i -g vue-cli",
      "parent": 1,
      "childs": false,
      "helper": "T"
    }
  ]
}
```

Commands:
```shell
my-company c v a    <- Create Vuejs project
my-company create vuejs application    <- Create Vuejs project
my-company c a p    <- Create Angular project
my-company create angular project    <- Create Angular project
my-company install    <- Install @angular/cli and vue-cli (global)
```
</details>

## <a name="5"></a>5. Thanks to...
- Martin (stackoverflow) https://stackoverflow.com/questions/53322117/nodejs-javascript-readfilesync