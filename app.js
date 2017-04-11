const fs = require('fs');
const async = require('async');
const endOfLine = require('os').EOL;

function getData(path) {
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, contents) => {
      if (err) return reject(err);
      resolve(contents);
    });
  });
}

function writeData(path, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(path, data, 'utf8', (err) => {
      if (err) return reject(err);
      return resolve(true);
    });
  });
}

function getCol(data, column) {
  return data.split(',')[column];
}

function getsetCol(data, column) {
  return new Promise((resolve) => {
    const setCol = new Set();
    async.each(data, (item, callback) => {
      const col = getCol(item, column);
      if (col) { setCol.add(col); }
      callback();
    }, () => {
      resolve(setCol);
    });
  });
}


function convertTokey(arrCol, data, column) {
  return new Promise(async (resolve) => {
    const newData = [];
    async.each(data, (row, callback) => {
      const col = getCol(row, column);
      const index = arrCol.indexOf(col);

      if (index >= 0) {
        row = row.replace(col, index);
        newData.push(row);
        newData.push(endOfLine);
        callback();
      } else {
        callback();
      }
    }, () => {
      resolve(newData);
    });
  });
}


function convertTobin(arrCol, data, column) {
  return new Promise(async (resolve) => {
    const newData = [];
    async.each(data, (row, callback) => {
      const cols = row.split(','); // แต่ละ Col

      const col = getCol(row, column);
      const index = arrCol.indexOf(col);

      if (index >= 0) {
        let i = column + 1;
        async.eachSeries(arrCol, (item, cb) => {
          if (item === cols[column]) {
            cols.splice(i, 0, 1);
          } else {
            cols.splice(i, 0, 0);
          }
          i += 1;
          cb();
        }, () => {
          cols.splice(column, 1);
          newData.push(cols);
          newData.push(endOfLine);
          callback();
        });
      } else {
        callback();
      }
    }, () => {
      resolve(newData);
    });
  });
}

function writeMetaData(path, column, arrCol) {
  return new Promise(async (resolve, reject) => {
    const arrColKeyVal = [];
    async.each(arrCol, (col, callback) => {
      const obj = { [col]: arrCol.indexOf(col) };
      arrColKeyVal.push(obj);
      callback();
    }, () => {
      fs.readFile(path, 'utf-8', (err, contents) => {
        let ppData;
        if (err) ppData = [];
        if (!err) ppData = JSON.parse(contents);
        const data = {
          [column]: arrColKeyVal,
        };
        ppData.push(data);

        fs.writeFile(path, JSON.stringify(ppData), {/* flag: 'a',*/ encoding: 'utf8' }, (err) => {
          if (err) return reject(err);
          return resolve(true);
        });
      });
    });
  });
}

function convertTo(arrCol, dataArr, column, mode) {
  return new Promise((resolve) => {
    if (mode === 'binary') {
      return resolve(convertTobin(arrCol, dataArr, column));
    }
    return resolve(convertTokey(arrCol, dataArr, column));
  });
}

function convent(option) {
  return new Promise((resolve, reject) => {
    getData(option.filename).then(async (contents) => {
      try {
        const dataArr = contents.split(/\r?\n/);
        const setCol = await getsetCol(dataArr, option.column);
        const arrCol = [...setCol];
        const newData = await convertTo(arrCol, dataArr, option.column, option.mode);
        await writeData(option.outputFilename, newData.join(''));
        await writeMetaData(option.outputMetaData, option.column, arrCol);
        resolve(true);
      } catch (e) {
        reject(e);
      }
    });
  });
}

module.exports = convent;
