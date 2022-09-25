let world = [
    [2,2,2,2,2,2,2,2,2,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,1,1,1,1,1,1,1,1,2],
    [2,2,2,2,2,2,2,2,2,2]
];

const displayWorld = () => {
    let output = '';
    for (let i = 0; i < world.length; i++) {
        output += "\n<div class = 'row'>";
        for (let j = 0; j <world[i].length; j++) {
            if (world[i][j] == 2) {
                output += "\n\t<div class = 'brick'></div>";
            }else if (world[i][j] == 1) {
                output += "\n\t<div class = 'coin'></div>";
            }if (world[i][j] == 0) {
                output += "\n\t<div class = 'empty'></div>";
            }
            output += "\n</div>";
        }
    }
    console.log(output);
    document.getElementById('world').innerHTML = output;
}
displayWorld();