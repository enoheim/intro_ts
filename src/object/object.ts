export default function objectSample() {
  // const a: object = {
  // name: 'enoha',
  // age: 25
  // }
  // a.name

  // オブジェクトリテラル記法
  let country: {
    language: string
    name: string
  } = {
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object object sample 1:', country)

  country = {
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object object sample 2:', country)

  // オプショナル、readonly
  const enoha: {
    age: number
    lastName: string
    readonly firstName: string
    gender?: string
  } = {
    age: 25,
    lastName: 'Yamada',
    firstName: 'Tarou',
  }

  enoha.gender = 'male'
  enoha.lastName = 'Sato'
  // enoha.firstName = "Yuya"

  console.log('Object object sample 3:', enoha)

  // インデックスシグネチャ
  const capitals: {
    [countryName: string]: string
  } = {
    Japan: 'Tokyo',
    Korea: 'Seoul',
  }

  capitals.China = 'Beijing'
  capitals.Canada = 'Ottawa'

  console.log('Object object sample 4:', capitals)
}
