// console.log(process.argv)
// let flag = process.argv.indexOf("--user")

process.stdout.write("What is your name?")
process.stdin.on('data', function (bangla){
    console.log(bangla.toString());
    process.exit()
})
