const fs = require("fs");
const readline = require("readline");

const read_write = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});

let index = 1;

let employee_obj = {};

let employee_details_paramaeter = new Array(
    "name",
    "department",
    "age",
    "salary"
);




async function enter_emplloyee_data(elem) {
    return (
        new Promise((resolve, reject) => {
            read_write.question(`\nEnter employee ${elem} ? `, async function (data) {


                employee_obj[elem] = data;

                index++;

                if (index === employee_details_paramaeter.length + 1) {

                    console.log(employee_obj)
                    read_write.close();
                    resolve();



                }

                else {
                    await enter_emplloyee_data(employee_details_paramaeter[index - 1])
                    resolve();

                }






            })

        }))
}


async function write() {
    await enter_emplloyee_data(employee_details_paramaeter[0]);
    return new Promise((resolve, reject) => {





        let data = "\nEmployee:\n"
        employee_details_paramaeter.map((elem) => {
            data = data + employee_obj[elem] + "\n";
        })



        fs.writeFile("employee.txt", data, (err, employee_data) => {
            if (err) throw err;
            console.log("employee details registered");
            resolve();

        });


    })
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
async function read_position()
{

    return (new Promise((resolve, reject) =>
         {
        console.log("busser function strated");
        fs.open("employee.txt", "r", (error, data) => {
            if (error) throw error;
            let buffer = new Buffer(1024);
            fs.read(data, buffer, 0, buffer.length, 10, (err, bytes) => {
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
                    resolve()
                });
            });
        });
    }))
}



async function run_task() {
        await write();
        await read_all();
        await read_position();
    }

    run_task();
