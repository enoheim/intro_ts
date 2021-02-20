// オプションパラメータ
export const isUserSignedIn1 = (userId: string, username?: string): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 1: signed in', username)
    return true
  } else {
    console.log('Function parameters sample 2: not signed in')
    return false
  }
}

// デフォルトパラメータ
export const isUserSignedIn2 = (userId: string, username = 'NO NAME'): boolean => {
  if (userId === 'ABC') {
    console.log('Function parameters sample 3: signed in', username)
    return true
  } else {
    console.log('Function parameters sample 4: not signed in')
    return false
  }
}

// レストパラメータ
export const sumProductsPrice = (...productsPrice: number[]): number => {
  return productsPrice.reduce((prevTotal: number, productPrice: number) => {
    return prevTotal + productPrice
  }, 0)
}
