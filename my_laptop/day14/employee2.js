const fs = require("fs");
const readline = require("readline");

const read_write = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});



let employee_obj = {};

let employee_details_paramaeter = new Array(
    "name",
    "department",
    "age",
    "salary"
);




async function write() {


    return new Promise(async (resolve, reject) => {


        await write_data_in_obj();

        // prepare data
        let data = "\nEmployee:\n"
        employee_details_paramaeter.map((elem) => {
            data = data + employee_obj[elem] + "\n";
        })


        //write in file
        fs.writeFile("employee.txt", data, (err, employee_data) => {
            if (err) throw err;
            console.log("")
            console.log("employee details registered");
            resolve();

        });


    })
}


async function write_data_in_obj() {



        return (new Promise(async (resolve, reject) => {

        let index = 0;
        for (let elem of employee_details_paramaeter) {

            await enter_employee_data(elem)


            if (index + 1 === employee_details_paramaeter.length) {
                read_write.close();
                resolve();
            }
            index++;
        }

    }))

}



async function enter_employee_data(elem) {
    return (
        new Promise((resolve, reject) => {


            read_write.question(`\nEnter employee ${elem} ? `, function (data) {


                employee_obj[elem] = data;
                resolve();
            })

        }))
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

    return (new Promise((resolve, reject) => {
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
                    console.log("");
                    console.log("file read on postition completed")

                }

                fs.close(data, function (err) {
                    if (err) throw err;
                    resolve()
                });
            });
        });
    }))
}




async function appendData() {
    return new Promise((resolve) => {
        fs.appendFile("employee.txt", "\nfile operation completed", (error) => {
            if (error) throw error;
            console.log("");
            console.log("file append opertion operation")
            resolve();
        })


    })

}

async function run_task() {
    await write();
    await read_all();
    await read_position();
    await appendData();
}

run_task();
