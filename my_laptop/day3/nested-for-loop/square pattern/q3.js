
//pattern
//1 1 1 1 1
//1       1 
//1       1
//1       1
//1 1 1 1 1


for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <= 5; j++) {
        if (i === 5 || j === 5 || j === 1 || i === 1) {
            process.stdout.write("1 ");
        }
        else {
            process.stdout.write("  ");

        }
    }

    console.log("");
}
