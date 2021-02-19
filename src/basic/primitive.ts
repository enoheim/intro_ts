export default function primitiveSample() {
  const name = 'enoha'
  // name = 111
  console.log('primitive sample 1:', typeof name, name)

  const age = 25
  // age = "25"
  console.log('primitive sample 2:', typeof age, age)

  const isSingle = false
  // isSingle = "a"
  console.log('primitive sample 3:', typeof isSingle, isSingle)

  const isOver20: boolean = age >= 20
  console.log('primitive sample 4:', typeof isOver20, isOver20)
}
