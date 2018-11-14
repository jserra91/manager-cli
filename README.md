# manager-cli
Manager-cli is a custom manager command based in NodeJs. It can be configured with a single JSON and from it, generates all possible commands. It's installed as a global module. 

## Contents
* [1 Download from Github](#1)
* [2 Install from npm](#2)
* [3 JSON](#3)

## <a name="1"></a>1 Download from Github

```shell
git clone https://github.com/jserra91/manager-cli.git
cd manager-cli
npm i && npm run build
```

## <a name="2"></a>2 Install from npm (not working)

```shell
npm i -g manager-cli
```

## <a name="3"></a>3 JSON
In a user folder create a <b>manager-cli.json.json</b> with this strcture:

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
manager-cli-serra generate create now
```

```shell
manager-cli-serra generate prepare
```
With first command create a folder <b>now</b> in <b>C:\Serra\ </b>. With second command create folder <b>prepare</b>

Or with shortcuts:

```shell
manager-cli-serra g c n
```

```shell
manager-cli-serra g p
```

