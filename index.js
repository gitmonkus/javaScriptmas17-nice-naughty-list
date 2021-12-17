// Task: 
// - Write the JavaScript to sort the people in sorteesArr into the naughty and nice lists, according to whether they have been good or not. Then display the names in the relevant place in the DOM.

// Stretch goals:
// - Add the option to add new names to the sorteesArr.
// - Make it possible to switch people to the other list.

const niceList = document.getElementById("nice-list")
const naughtyList = document.getElementById("naughty-list")
const btn = document.getElementById("btn")
const input = document.getElementById("input")

// Sup?
const audio = new Audio("audio/chicken.mp3")
document.getElementById('chicken').addEventListener('click', function() {
    audio.volume = .4
    audio.play()
})

// Nice and Naughty buttons
document.getElementById('btn-nice').addEventListener('click', function(){
    niceList.innerHTML += `<li>${input.value}</li>`
    input.value = ''
})
document.getElementById('btn-naughty').addEventListener('click', function(){
    naughtyList.innerHTML += `<li>${input.value}</li>`
    input.value = ''
})

const sorteesArr = [
    {
        name: "David",
        hasBeenGood: false
    },
    {
        name: "Del",
        hasBeenGood: true
    },
    {
        name: "Valerie",
        hasBeenGood: false
    },
    {
        name: "Astrid",
        hasBeenGood: true
    }
]



let numAfterOneLoop = 0

btn.addEventListener('click', function() {
    while (numAfterOneLoop === 0) {
        for (let sortee in sorteesArr) {
            if (sorteesArr[sortee].hasBeenGood) {
            niceList.innerHTML += `<li>${sorteesArr[sortee].name}</li>`
        } else {
            naughtyList.innerHTML += `<li>${sorteesArr[sortee].name}</li>`
        }   
        numAfterOneLoop = 1   
    }
    }
    
})