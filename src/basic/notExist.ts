export default function notExistSample() {
  let name = null
  console.log('notExist sample 1:', typeof name, name)

  name = 'enoha'
  if (name) {
    console.log('notExist sample 2:', "name isn't null(" + name + ')')
  } else {
    console.log('notExist sample 3:', 'name is null(' + name + ')')
  }

  let age = undefined
  console.log('notExist sample 4:', typeof age, age)

  age = 25
  if (age) {
    console.log('notExist sample 5:', "age isn't undefined(" + age + ')')
  } else {
    console.log('notExist sample 6:', 'age is undefined(' + age + ')')
  }
}
