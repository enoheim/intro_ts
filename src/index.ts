// import World from './world'

// const root = document.getElementById('root')
// const world = new World('Hello World!')
// world.sayHello(root)

// // 基本の型定義
// import { anySample, notExistSample, primitiveSample, unknownSample } from './basic'

// anySample()
// notExistSample()
// primitiveSample()
// unknownSample()

// 関数の型定義
import { logMessage1 } from './function/basic'
import { isUserSignedIn1, isUserSignedIn2, sumProductsPrice } from './function/parameters'

logMessage1('Hello World!')
isUserSignedIn1('ABC', 'enoha')
isUserSignedIn1('DEF')
isUserSignedIn2('ABC')
const sum = sumProductsPrice(100, 200, 300, 400, 500, 600)
console.log('Function parameters sample 5:', sum)
