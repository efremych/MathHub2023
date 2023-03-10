// alert('Hello')

// confirm('Вы учите язык JS?')



// const lang = document.getElementById('skill')
// const skillText = prompt('Какой язык Вы учите?', 'Пока не в курсе!')
// lang.innerText = skillText

// const isLike = document.getElementById('like')
// const Liketext = confirm('Нравится этот язык?')
// isLike.innerText = Liketext

//NUMBER
// const inf = 17/0
// console.log(inf)
// От -(2**53 -1) до (2**53 -1)
// console.log(99999999999999999999999999999999999999)

//BIGINT
// const bigint = 138172485234735277883566n
// console.log(bigint) 

//BOOLEAN
// > < >= <= >++ <== == ===
// const bool = "a" > "6"
// console.log(bool)

// // NULL
// let empty = null
// console.log(empty, typeof empty) 

// // UNDEFINED
// let box = undefined
// console.log(box, typeof box) 

// SYMBOL
// let uniq = Symbol('id')
// let uniq2 = Symbol('id')
// console.log(uniq == uniq2) 

// OBJECT
// const obj = {
//     name: "Sasha",
//     age: 19,
//     isHappy: true,
// }
// console.log(obj.name)
// console.log(obj['name'])

// obj.job = 'Google'

// const arr = ['Ann', 18, false]
// // arr.job = 'Facebook'
// arr[3] = 'Facebook'
// console.log(arr)

// +"abc" - Number
// 15 +"" - String
// Boolean(0), Boolean("") - false
// Boolean(" ") - true

// console.log(5 == "5")
// console.log(5 === "5")

// const userName = prompt("Who are you?", "anonim")

// if(userName === "admin"){
//     alert("Hello, Boss!")
// } else if(userName === "anonim" || !userName) {
//     alert("I don't know you")
// } else{
//     alert(`Hi ${userName}`)
// }

// const arr = []
// for (let i = 1; i <=50; ++i) {
//     arr.push(i)
// }

// const newArr = []
// for(elem of arr) {
//     const marker = elem % 3
//     if (!marker){
//         newArr.push(elem)
//     }
// }
// console.log(newArr)

// const obj = {
//     name: "Sasha",
//     age: 25,
//     city: "Voronezh"
// }

// for (key in obj){
//     console.log(key, obj[key])
// }

const getRandomNumInRange = (min, max) => {
    const randomNum = (Math.random() * (max - min) + min).toFixed(0)
    return randomNum
}

const getTask = () => {
    const randomNum1 = getRandomNumInRange(0, 100)
    const randomNum2 = getRandomNumInRange(0, 100)
    const symbol = Math.random() > 0.5 ? "+" : "-"
    const task = `${randomNum1} ${symbol} ${randomNum2}`
    gameState.rightAnswer = eval(task)
    return task
}

const toogleGameState = () => {
    gameState.taskInProgress = !gameState.taskInProgress
}


const gameElements = document.getElementById("my_game").children
console.log(gameElements)
const title = gameElements[0]
const userTask = gameElements[1]
const userAnswer = gameElements[2]
const btnGame = gameElements[3]

const gameState = {
    taskInProgress: false,
    rightAnswer: null,
}

const startGameFunc = () => {
    if (!gameState.taskInProgress) {
        title.innerText = "Игра началась!"
        userAnswer.value = null
        userTask.innerText = getTask()
        userAnswer.hidden = false
        btnGame.innerText = "Проверить!"
        toogleGameState()

    } else {
        const isRight = gameState.rightAnswer == userAnswer.value && userAnswer.value.length > 0
        userTask.innerText = userTask.innerText + " = " + gameState.rightAnswer
        //сдклать чтоб разными цветами писалось

        if (isRight) {
            // title.innerText = "Вы победили!"
            title.innerHTML = "<span style ='color: green;'>Вы победили!</span>"
        } else {
            title.innerHTML = "<span style ='color: red;'>Вы проиграли!</span>"
        }
        // title.innerText = (isRight) ? "Вы победили!" : "Вы проиграли!"
        btnGame.innerText = "Начать заново!"
        toogleGameState()
    }

}
btnGame.addEventListener("click", startGameFunc)
userAnswer.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        startGameFunc()
    } else if (e.key === "Escape") {
        userAnswer.blur()
    }
})



const choosedEl = document.querySelectorAll(".choosed_block-container > div")
const counterEl = document.querySelector(".choosed_block span")
// console.log(choosedEl)

// const choosedState = {
//     countElements: 0,
// }

// const changeCount = (value) => {
//     choosedState.countElements += value
//     counterEl.innerText = choosedState.countElements
// }

const choosedState = {
    countElements: 0,
    setCountValue(value) {
        this.countElements += value
        counterEl.innerText = this.countElements
    }
}

const eventFunc = (e) => {
    if (e.target.className === "") {
        e.target.className = "choosed_element"
        choosedState.setCountValue(1)
    } else {
        e.target.className = ""
        choosedState.setCountValue(-1)
    }
}

for (let i = 0; i < choosedEl.length; i++) {
    choosedEl[i].addEventListener("click", eventFunc)
}
choosedEl[2].removeEventListener("click", eventFunc)

// change
// change 2

// const timeIsOver = () => {
//     alert("Time's out!")
// }

// // setTimeout(timeIsOver, 2000)

// // const alarm = setInterval(timeIsOver, 3000)
// // clearInterval(alarm)

// const alarm = setInterval(() => {
//     let wantToSleep = confirm("Want to Sleep?")
//     if (wantToSleep) {
//         console.log("tic")
//     } else {
//         clearInterval(alarm)
//     }
// }, 3000)

// console.log("1")
// setTimeout(() => {
//     console.log("2")
// }, 0)
// console.log("3")

const postsBlock = document.querySelector(".posts_block-container")
// const postsTitle = document.querySelector(".posts_block-container" h3)
// const postsBody = document.querySelector(".posts_block-container" span)
const showPosts = document.querySelector(".posts_block button")

function getPosts () {
    fetch("https://jsonplaceholder.typicode.com/posts")
    .then(res => res.json())
    .then(data => {
        for (el of data) {
            addPost(el.title, el.body)
        }
        // addPost(data[7].title, data[7].body)
    })
    .catch(err => {
        console.log(err)
        console.log(err.message)
    })
}
showPosts.onclick = getPosts


function addPost(title, body) {
    const postsTitle = document.createElement("h3")
    const postsBody = document.createElement("span")
    const postItem = document.createElement("p")

    postsTitle.innerText = title
    postsBody.innerText = body

    postItem.append(postsTitle, postsBody)
    postsBlock.append(postItem)
    // console.log(postsBlock.innerText)
}

// createPost("111", "222", "333") 

// function createPost(title, body, userId) {
//     fetch('https://jsonplaceholder.typicode.com/posts', {
//         method: 'POST',
//         body: JSON.stringify({
//             // title: title,
//             // body: body,
//             // userId: userId,
//             title,
//             body,
//             userId,
//         }),
//         headers: {
//             'Content-type': 'application/json; charset=UTF-8',
//         },
//     })
//         .then(res => console.log(res))
//         .catch(err => {
//             console.log(err)
//             console.log(err.message)
//         })
// }