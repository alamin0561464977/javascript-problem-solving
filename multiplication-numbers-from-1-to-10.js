// Print all the multiplication tables with numbers from 1 to 10

for (let i = 1; i <= 10; i++) {
    tables(i)
}

function tables(num) {
    for (let i = 1; i <= 10; i++) {
        const row = num + " " + "x" + " " + i + " " + "=" + " " + num * i;
        console.log(row)
    }
}