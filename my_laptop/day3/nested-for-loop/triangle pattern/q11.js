//pattern
// A
// B B
// C C C
// D D D D
// E E E E E


for (let i = 1; i <= 5; i++) {

    for (let j = 1; j <= i; j++) {

        switch (i) {
            case 1:
                {
                    process.stdout.write("A ");
                    break;
                }
            case 2:
                {
                    process.stdout.write("B ");
                        break;
                }
            case 3:
                {
                    process.stdout.write("C ");
                        break;
                }
            case 4:
                {
                    process.stdout.write("D ");
                        break;
                }
            case 5:
                {
                    process.stdout.write("E ");
                        break;
                }

        }


    }
    console.log("");

}