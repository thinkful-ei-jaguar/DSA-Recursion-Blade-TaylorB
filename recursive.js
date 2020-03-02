const countingSheep = function(flock) {
    if(flock === 0) {
        return console.log('All sheep jumped over the fence!')
    }
    console.log( `${flock}: Another sheep jumps over the fence!`)
    countingSheep(flock - 1)
}

countingSheep(3)