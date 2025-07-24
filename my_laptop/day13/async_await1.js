function fetchData() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve();
        }), 2000
    }
    )
}





fetchData().then((result) => console.log(result))
    .catch(error => console.log(error))



async function loadData() {

    try {
        const data = await fetchData();
        console.log(data);
    }

    catch (error) {
        console.log(error)
    }

}

loadData();