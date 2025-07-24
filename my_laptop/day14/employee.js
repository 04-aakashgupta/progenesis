const fs = require("fs");
const readline = require("readline");

const read_write = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

let index = 1;

let employee_obj={}

let employee_details_paramaeter = new Array(
  "name",
  "department",
  "age",
  "salary"
);

async function write() {
  return new Promise((resolve, reject) => {
    function write_emplloyee_data(elem) {
      if (index <= employee_details_paramaeter.length) {
        read_write.question(`\nEnter employee ${elem} ? `, function (data) {
          if (index === 1) {
            data = `\nEmployee:\n${elem}:${data}\n`;
          } else {
            data = `${elem}:${data}\n`;
          }

          fs.appendFile("employee.txt", data, (err, employee_data) => {
            if (err) throw err;
            console.log(`employee ${elem} written`);
            index++;
            write_emplloyee_data(employee_details_paramaeter[index - 1]);
          });
        });
      } else {
        console.log("employee details registered");
        read_write.close();
        resolve();
      }
    }

    write_emplloyee_data(employee_details_paramaeter[index - 1]);
  });
}

// 1 task completed

async function read_all() {
  return new Promise((resolve, reject) => {
    fs.readFile("employee.txt", "utf-8", (err, data) => {
      if (err) throw err;
      console.log("");
      console.log(data);
      console.log("file read complete");
      resolve();
    });
  });
}

//task 3

async function read_position() {
    console.log("busser function strated");
  return fs.open("employee.txt", "r", (error, data) => {
    if (error) throw error;
    let buffer = new Buffer(1024);
    fs.read(data, buffer, 0, buffer.length, 55, (err, bytes) => {
      if (err) throw err;
      if (bytes > 0) {
        console.log("");
        console.log("");

        console.log("");

        console.log("");

        console.log(buffer.slice(0, bytes).toString());
      }

      fs.close(data, function (err) {
        if (err) throw err;
      });
    });
  });
}

async function run_task() {
  await write();
  await read_all();
  await read_position();
}

run_task();
