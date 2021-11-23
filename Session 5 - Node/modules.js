import * as fs from 'fs/promises';

let result = await fs.readFile('boardgames.json');

let data = JSON.parse(result);
console.log(data);

// file runnen = node .filenaam
// file ine goeie folder doen = cd

for(let id in data){
    console.log(id)
}
// je krijgt eerste value ding
for(let id in data){
    console.log(data[id])
}
// je krijgt alles
