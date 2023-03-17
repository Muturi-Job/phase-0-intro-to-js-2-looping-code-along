function writeCards(namesArray, eventArray) {
    const cardArray = []      
        for (let i = 0; i < namesArray.length; i++) {

            cardArray.push(`Thank you, ${namesArray[i]}, for the wonderful ${eventArray} gift!`)
            console.log(cardArray)
                    }
            return cardArray

}
writeCards(["Charlie", "Samip", "Ali"], "birthday");
function countDown(input) {
    let countDown = input
    while(countDown >= 0) {
    console.log(countDown--);
}}
countDown(4)