class MyArray {
    private length: number;
    private readonly data: {};

    constructor() {
        this.length = 0;
        this.data = {};
    }

    push(item: any) {
        this.data[this.length] = item
        this.length++
        return this.length
    }

    get(index: number) {
        return this.data[index]
    }

    pop() {
        delete this.data[this.length - 1]
        this.length--
    }

    shift() {
        delete this.data[0]
        this.length--
        for (let i = 1; i <= this.length; i++) {
            this.data[i - 1] = this.data[i]
        }
        delete this.data[this.length]
    }

    delete(index: number) {
        for (let i = index; i < this.length - 1; i++) {
            this.data[i] = this.data[i + 1]
        }
        this.length--
        delete this.data[this.length]
    }
}

// const array = new MyArray()
// array.push(5)
// array.push(4)
// array.push(3)
// console.log(array)
// array.delete(0)
// console.log(array)

const reverse = (text: string) => text.split('')
    .reverse()
    .join('')

// function reverse(text: string) {
//     let temp = ''
//     for (let i = 0; i < text.length; i++) {
//         temp = text[i] + temp
//     }
//     return temp
// }

const isPalindrome = (str: string) => {
    return str === reverse(str)
}

const capitalizeFirstLetters = (str: string) => {
    return str.split(' ').map(word => word[0].toUpperCase() + word.slice(1)).join(' ')
}

const fizzBuzz = (n: number) => {
    for (let i = 1; i <= n; i++) {
        if (i % 3 === 0 && i % 5 === 0) {
            console.log('fizz buzz: ', i)
        } else if (i % 3 === 0) {
            console.log('fizz: ', i)
        } else if (i % 5 === 0) {
            console.log('buzz: ', i)
        } else {
            console.log(i)
        }
    }
}

const maxProfit = (arr: number[]) => {
    let maxProfit = arr.slice(0, 2)
    for (let i = 0; i <= arr.length; i++) {
        for (let j = i; j <= arr.length; j++) {
            if ((arr[j] - arr[i]) > (maxProfit[1] - maxProfit[0])) {
                maxProfit = [arr[i], arr[j]]
            }
        }
    }
    return maxProfit
}

// const arrayChunk = (arr: number[], chunkSize: number) => {
//     const result = []
//     const loopCount = Math.ceil(arr.length / chunkSize)
//     for (let i = 0; i < loopCount; i++) {
//         result.push(arr.splice(0, chunkSize))
//     }
//     return result
// }

const arrayChunk = (arr: number[], chunkSize: number) => {
    const result = []
    let i = 0
    while (i < arr.length) {
        result.push(arr.slice(i, i + chunkSize))
        i += chunkSize
    }
    return result
}

const twoSum = (arr: number[], target: number) => {
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            if (arr[i] + arr[j] === target) {
                return [i, j]
            }
        }
    }
}

console.log(twoSum([2, 8, 11, 7], 9))
