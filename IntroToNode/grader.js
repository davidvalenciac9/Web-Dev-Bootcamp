function average(scores) {
    let sum = 0
    for (i=0; i < scores.length; i++){
        sum += scores[i];
    }
    console.log(Math.ceil(sum / scores.length));
}

var scores = [90, 98, 89, 100, 100, 86, 94];

average(scores);