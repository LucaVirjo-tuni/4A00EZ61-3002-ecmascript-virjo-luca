var min = 1
var max = 40
var ticket_size = 7
var highscore = 0

function validateTicket() {
    let output = []
    for(let i = 0; i < ticket_size; i++) {
        let number = Number(process.argv[2 + i])

        if(isNaN(number)) {
            throw `${number} is not a number`
        } else if(number > max || number < min) {
            throw `${number} is not between ${min} and ${max}`
        } else if(output.includes(number)) {
            throw  `${number} is not unique`
        }
        output.push(number)
    }
    return output
}

function doTheLotto(ticket) {
    var years = 0
    var weeks = 0
    while(highscore < 7) {
        var winningNumbers = []
        for(let i = 0; i < ticket_size; i++) {
            let num
            let approved = false
            while(!approved) {
                num = Math.floor(Math.random() * 40 + 1)
                approved = true
                for(let element of winningNumbers) {
                    if(element === num) {
                        approved = false
                    }
                }
            }
            winningNumbers.push(num)
        }

        var hits = 0

        for(const number of ticket) {
            for(const win of winningNumbers) {
                if(number === win) {
                    hits++
                }
            }
        }

        if(hits > highscore) {
            console.log(`Winning numbers: ${winningNumbers}`)
            console.log(`Your numbers: ${ticket}`)
            console.log(`You got ${hits} right! It only took ${Math.floor(years * 100) / 100} years!`)
            console.log(`You only spent about ${weeks}€`)
            highscore = hits
        }

        years += 1 / 52
        weeks++
    }
}

var ticket = validateTicket()
doTheLotto(ticket)
