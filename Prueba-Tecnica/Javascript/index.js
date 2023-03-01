let data;

async function urlApi(url = "") {
    const response = await fetch(url, {
        method: 'GET'
    })
    return response.json();

}

urlApi("https://swapi.dev/api/people/").then((apiResults) => {

    arr = []
    data = apiResults.results;
    console.log(data)
    const resul = data.map((obj) => {

        if (obj.height > 100) {
            let Obj = {
                nameP: obj.name,
                heightP: obj.height
            }
            arr.push(obj)
            return Obj

        }
    })
    console.log(resul)

})