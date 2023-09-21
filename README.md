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
  "license": "ISC",
  "type": "module"
}

```

- Menambahkan Library Jest Unit Test
```bash
npm install --save-dev jest @types/jest
```

- Menambah Library Babel
```bash
npm install --save-dev babel-jest @babel/preset-env
```

- Setup Babel
```bash
https://babeljs.io/setup#installation
```

- Tambahkan scripts package.json Jest
```bash
  "scripts": {
    "test": "jest"
  },
  "jest": {
    "transform": {
      "^.+\\.[t|j]sx?$": "babel-jest"
    }
  },
```
- Create file babel.config.json
```bash
touch babel.config.json
```

- Tambahkan Presets di babel.config.json
```bash
{
  "presets": [
    "@babel/preset-env"
  ]
}
```

- Setup Typescript
```bash
npm install --save-dev typescript
```

- Setup Typescript Project
```bash
npx tsc --init
```

- Ubah tsconfig.json 
```bash
Ubah "module" dari "commonjs" menjadi "ES6"
```

- Setup Jest agar support Typescript [https://jestjs.io/docs/getting-started#using-typescript]
```bash
npm install --save-dev @babel/preset-typescript
```

- Tambahkan babel.config.json
```bash
"@babel/preset-typescript"
```

- Install ts-jest
```bash
npm install --save-dev ts-jest
```

- Install Jest Global
```bash
npm install --save-dev @jest/globals
```

- Buat folder unit test
```bash
mkdir test
```
- Buat file class
```bash
touch test/test.ts
```
- Buat Class
```bash
describe ('Class', () => {
    it('should can create class', () => {
        # code class customer
        class Customer {

        }
        # code class order
        class Order {
        
        }
        # insialisasi class 
        const customer:Customer = new Customer();
        const order = new Order();

    });
});
```

- Jalankan test di terminal
```bash
npx jest
```