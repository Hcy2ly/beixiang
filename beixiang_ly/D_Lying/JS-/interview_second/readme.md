1. 防抖与节流
2. 匹配 [] {}


function debounce(fn, timer, context) {
    let timer = null
    return () => {
        clearTimeout(timer)
        timer = setTimeout((...args) => {
            fn.call(context, ...args)
        }, timer)
    }
}

function say() {
    console.log('Hello World')    
}

// 打印 4 个 Hello World
say()
say()
say()
say()


const debounceSay = debounce(say, 100)

// 打印 1 个 Hello World
debounceSay()
debounceSay()
debounceSay()
debounceSay()


class Person() {
    constructor() {
    }
    say(name) {
        console.log('Hello' + name)
    }
}

const person = new Person('Mark')
const debouncePersonSay = debounce(person.say, 500, person)

// 打印一次 Hello Mark
debouncePersonSay('mark')
debouncePersonSay('mark')
debouncePersonSay('mark')
debouncePersonSay('mark')

setTimeout(() => {
    debouncePersonSay.cancel()
}, 100)



[1, 2, 3, 4].map(v => v + 1).map(v => v * 2).filter(v => v > 1)



'[' ']' '(' ')'

'[]' '()' '[()]' '([])'
'[((]'

function isValid(str) {

}