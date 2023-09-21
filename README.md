# Membuat Project TypeScript

- Buat Folder belajar-typescript-oop
```bash
mkdir belajar-typescript-oop
```
- Isi package.json
```bash
{
 package name: (oop_typesscript) belajar-typescript-oop
version: (1.0.0)
description: Belajar TypeScript OOP
entry point: (index.js)
test command:
git repository:
keywords:
author: Sasangka lambang kurniawan
license: (ISC)
About to write to F:\FULLSTACK\Ts PZN\OOP_TypesScript\package.json:

{
  "name": "belajar-typescript-oop",
  "version": "1.0.0",
  "description": "Belajar TypeScript OOP",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "author": "Sasangka lambang kurniawan",
  "license": "ISC"
}


Is this OK? (yes)
}
```

- Buat Node Module
```bash
npm init
```

- Buka package.json dan tambah type module
```
{
    "type": "module"
}
```