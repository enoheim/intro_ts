export default function typeAliasSample() {
  // 型エイリアス
  type Country = {
    capital: string
    language: string
    name: string
  }

  const japan: Country = {
    capital: 'Tokyo',
    language: 'Japanese',
    name: 'Japan',
  }

  console.log('Object alias sample 1:', japan)

  const america: Country = {
    capital: 'Washington, D.C.',
    language: 'English',
    name: 'United States of America',
  }

  console.log('Object alias sample 2:', america)

  // 合併型(union)と交差型(intersection)
  type Knight = {
    hp: number
    sp: number
    weapon: string
    swordSkill: string
  }

  type Wizard = {
    hp: number
    mp: number
    weapon: string
    magicSkill: string
  }

  // 合併型(union)
  type Adventurer = Knight | Wizard

  // 交差型(intersection)
  type MagicKnight = Knight & Wizard

  const adventurer1: Adventurer = {
    hp: 100,
    sp: 30,
    weapon: 'ウッドブレード',
    swordSkill: '魔神剣',
  }

  const adventurer2: Adventurer = {
    hp: 100,
    mp: 20,
    weapon: '木の杖',
    magicSkill: 'ファイアボール',
  }

  console.log('Object alias sample 3:', adventurer1)
  console.log('Object alias sample 4:', adventurer2)

  const adventurer3: MagicKnight = {
    hp: 1000,
    sp: 300,
    mp: 200,
    weapon: 'ホワイトナイトソード',
    swordSkill: '光破旋衝刃',
    magicSkill: 'ホーリィランス',
  }

  console.log('Object alias sample 5:', adventurer3)
}
