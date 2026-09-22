// global variables

// let state; first -> operator -> second

let state

let display

let first

let second

let operator

let lastChar


const init = () => {

    state = 'first'

    display = '0'

    first = '0'

    second = '0'

    operator = '?'

}


const insertSeparator = (str, separator = ',', groupSize = 3) => {

    let resultString = ''

    let counter = 0

    for(let i = str.length - 1; i >= 0; i--){

        resultString = str[i] + resultString

        counter++

        if(counter % groupSize === 0) {
            resultString = separator + resultString
        }

    }

    return resultString

}


const render = () => {

    // display on screen
    document.getElementById('screen').innerText = display

}


const numberClick = (num) => {

    console.log(num)

    switch(state){

        case 'first':

            if(display.length < 9)

            if(display === '0') {

                display = String(num)

            } else {

                display += String(num)

            }

            first = display

            break


        case 'operator':

            display = String(num)

            state = 'second'

            second = display

            break


        case 'second':

            if(display.length < 9) {

                if(display === '0') {

                    display = String(num)

                } else {

                    display += String(num)

                }

            }

            second = display

            break

    }

    render()

}


// operator
const operatorClick = (op) => {

    console.log(op)

    if(state === 'first') {

        first = display
        operator = op
        state = 'operator'

    }

}


// equal
const equalClick = () => {

    console.log("=")

    second = display

    let result

    if(operator === '+') {

        result = Number(first) + Number(second)

    }
    else if(operator === '-') {

        result = Number(first) - Number(second)

    }
    else if(operator === '*') {

        result = Number(first) * Number(second)

    }
    else if(operator === '/') {

        if(Number(second) === 0) {

            display = 'Error'

            render()

            return

        }

        result = Number(first) / Number(second)

    }
    else {

        return

    }

    display = String(result)

    state = 'first'

    first = display
    second = '0'
    operator = '?'

    render()

}


// clear
const ceClick = () => {

    console.log("c")

    init()

    render()

}


document.addEventListener('keydown', (e) => {

    console.log(typeof e.key)

    if(e.key === 'Escape') {

        ceClick()

    }

    else if(e.key[0] >= '0' && e.key[0] <= '9') {

        numberClick(e.key[0])

    }

    else if(e.key === '+') {

        operatorClick('+')

    }

    else if(e.key === '-') {

        operatorClick('-')

    }

    else if(e.key === '*') {

        operatorClick('*')

    }

    else if(e.key === '/') {

        operatorClick('/')

    }

    else if(e.key === 'Enter') {

        equalClick()

    }

})


document.addEventListener('DOMContentLoaded', () => {

    // init all

    init()

    // first render

    render()

})