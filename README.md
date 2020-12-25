<h1 align="center">asif-ui-lib</h1>

<p align="center">Easy-to-use ui compoment</p>

```sh
npm i asif-ui-lib --save
```

```sh
yarn add asif-ui-lib --save
```

<h2 align="center">Usage</h2>

### Basic example

```javascript
import React from "react";
import { DataTable } from "asif-ui-lib";

const App = () => {
  return (
    <DataTable
      isLoading={false}
      columns={[
        { label: "Name", key: "name" },
        { label: "Email", key: "email" },
      ]}
      tableData={[
        { name: "Asif", email: "asifvora0@gmail.com" },
        { name: "Rehan", email: "rehankhan97@gmail.com" },
        { name: "Zaara", email: "zaara07@gmail.com" },
      ]}
    />
  );
};

export default App;
```


### Configure props

| Name             | Type       | Default  | Required                                     | Description       | Example                                                                                                                                                                                                                                           |
| ---------------- | ---------- | -------------------------------------------- | -------------------------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------- | 
| isLoading | `bool`   | `false`    | `No`  | For loading | `-`  |
| columns   | `array`  | `[]`       | `Yes` | Columns array object | `[{ label: "Name", key: "name" },{ label: "Email", key: "email" }]` |
| tableData        | `array`   | `[]`     | `Yes` | Table data of array object  | `[{ name: "Asif", email: "asifvora0@gmail.com" }, { name: "Zaara", email: "zaara07@gmail.com" } ]` |                                                                                                                         
| perPageData  | `number`   | `10`  | `No` | Per page record display in table | `-` |
     

<h2 align="center">Example</h2>

You can run the example by cloning the repo:

```sh
git clone https://github.com/asifvora/asif-ui-lib.git
yarn
yarn start
```

## Questions?🤔

Hit me on [![Twitter URL](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/007_dark_shadow)
[![Medium](https://img.shields.io/badge/Medium-asifvora-brightgreen.svg)](https://medium.com/@asifvora)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-asifvora-blue.svg)](https://www.linkedin.com/in/asif-vora/)
[![Instagram](https://img.shields.io/badge/Instagram-Asif%20Vora-green.svg)](https://www.instagram.com/007_dark_shadow/)

## License

Copyright (c) Asif Vora

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
