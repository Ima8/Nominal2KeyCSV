# Nominal2KeyCSV

This is just a little tool that makes for help you process your CSV file easier by convert 'Text' to be Key like Key-Value Pairs. and  Yes!! It's can convert from Nominal --> Binary

![output_1tgorl](https://cloud.githubusercontent.com/assets/9165089/24891401/cb9397b2-1e9f-11e7-8e89-24f5a451f210.gif)
![output_0iifb1](https://cloud.githubusercontent.com/assets/9165089/24908062/e0e542b6-1ee8-11e7-97b3-dd6cfe640601.gif)


# Features!

  - Convert Nominal --> Numerical 
  - Convert Nominal --> Binary
  - Create MetaData File 
 
### Installation

```sh
$ npm install nominal2key-csv --save
```
### How to use 

Basic use ...

```
const txt2kv = require('nominal2key-csvv');

txt2kv({
  filename: './data.csv',
  outputFilename: './newData.csv',
  outputMetaData: './metadata.json',
  column: 0,
});

```
With async await ...

```
const txt2kv = require('nominal2key-csv');

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

### Convent From Nominal to Binary
```
const txt2kv = require('nominal2key-csv');

txt2kv({
  filename: './data.csv',
  outputFilename: './newData.csv',
  outputMetaData: './metadata.json',
  column: 0,
  mode: 'binary',
});

```


### Example 
Example : RawData
![before](https://cloud.githubusercontent.com/assets/9165089/24890864/7e3c8aee-1e9c-11e7-9fc5-d5ac5759782e.png)

Example : After Convert to Numerical
![after](https://cloud.githubusercontent.com/assets/9165089/24890919/bedcd9c8-1e9c-11e7-8ffd-0ffd8e11b5a5.png)
Example : MetaData
![metadata](https://cloud.githubusercontent.com/assets/9165089/24890965/168add0a-1e9d-11e7-8315-4974c06e6bea.png)

Example : Convert To Bin
![Convert To Binary](https://cloud.githubusercontent.com/assets/9165089/24908081/f47b18dc-1ee8-11e7-9d63-59211199008c.png)


### Todos

 - Tell me want do you want 
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

