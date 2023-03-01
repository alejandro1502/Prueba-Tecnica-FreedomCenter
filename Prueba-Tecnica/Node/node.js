import e from 'express';
import fetch from 'node-fetch'
globalThis.fetch = fetch
import { writeFile } from 'node:fs';


const command = process.argv.slice(2)[0];

switch (command) {
    case 'setpeople':
        urlApii("https://swapi.dev/api/people/").then((app) => {

            let data = app
            console.log(data)

            var jsonContent = JSON.stringify(data);
            console.log(jsonContent);

            setResults(jsonContent)
        })

        break;

    case 'getpeople':
        urlApii("https://swapi.dev/api/people/").then((app) => {

            let data = app.results
            console.log(data)

            var jsonContent = JSON.stringify(data);
            console.log(jsonContent);

            setResults(jsonContent)
        })
        break

    case 'getpeopleby':
        urlApii("https://swapi.dev/api/people/").then((app) => {
            let data = app.results

            console.log(process.argv[3]);
            let option = process.argv[3]

            let val = []
            data.map((e) => {

                val.push(e[option])
            })
            console.log(val)
        })
        break
    case 'postpeople':
        urlApii("https://swapi.dev/api/people/").then((app) => {
            let data = app.results

            console.log(process.argv[3]);
            let option = process.argv[3]

            data.push([option])
            console.log(data)
        })
        break
    case 'unsetpeoplebyid':
        urlApii("https://swapi.dev/api/people/").then((app) => {
            let data = app.results

            console.log(process.argv[3]);
            let option = process.argv[3]

            // console.log(data[option]);
            let complete = data[option]

            var jsonContent = JSON.stringify(complete);
            console.log(jsonContent);
            setResults(jsonContent);

            let delet = data.splice([option], 1);
            console.log(delet, 'Eliminado');

        })

        break
    default:
        break;
}





function setResults(jsonContent) {
    writeFile("output.json", jsonContent, 'utf8', function(err) {
        if (err) {
            console.log("An error occured while writing JSON Object to File.");
            return console.log(err);
        }

        console.log("JSON file has been saved.");
    });
}


async function urlApii(url = "") {
    const response = await fetch(url, {
        method: 'GET'
    })
    return response.json();

}