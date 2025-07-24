const promise = new Promise((resolve, reject) => {
    const str1 = "aakash";
    const str2 = "aakash"

    if (str1 === str2) {
        resolve();
    }

    else {
        reject();
    }
});


promise.then(() => console.log("correct"),(()=> console.log("wrong")))

