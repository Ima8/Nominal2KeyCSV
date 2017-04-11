# Text2KeyValueCSV

This is just a little tool that makes for help you process your CSV file easier by convert 'Text' to be Key like Key-Value Pairs.


# Features!

  - Convent nominal --> numerical in CSV File
  - Create MetaData File for you

### Example 
Example : RawData
![before](https://cloud.githubusercontent.com/assets/9165089/24890864/7e3c8aee-1e9c-11e7-9fc5-d5ac5759782e.png)

Example : After Convert
![after](https://cloud.githubusercontent.com/assets/9165089/24890919/bedcd9c8-1e9c-11e7-8ffd-0ffd8e11b5a5.png)
Example : MetaData
![metadata](https://cloud.githubusercontent.com/assets/9165089/24890965/168add0a-1e9d-11e7-8315-4974c06e6bea.png)


### Installation

```sh
$ npm install text2keyvalue-csv --save
```
### How to use 

Basic use ...

```
const txt2kv = require('text2keyvalue-csv');

txt2kv({
  filename: './data.csv',
  outputFilename: './newData.csv',
  outputMetaData: './metadata.json',
  column: 0,
});

```
With async await ...

```
const txt2kv = require('text2keyvalue-csv');

async function doSomething() {
  const status = await txt2kv({
    filename: './data.csv',
    outputFilename: './newData.csv',
    outputMetaData: './metadata.json',
    column: 0,
  });
  console.log(status); // should be true
}
doSomething();

```

### Todos

 - Tell me what do you want 
 - or PR whatever you want 
 - Even 'Test' !!!

License
----

MIT


**" Make It What You Want! "**
----
*Don't forget to Pull Request!!!*
----
----
ima8.
