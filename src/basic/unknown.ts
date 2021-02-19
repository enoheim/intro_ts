export default function unknownSample() {
  const maybeNumber: unknown = 333
  console.log('unknownsample 1:', typeof maybeNumber, maybeNumber)

  const isTest = maybeNumber === 'test'
  console.log('unknownsample 2:', typeof isTest, isTest)

  // const sum maybeNumber + 10

  if (typeof maybeNumber === 'number') {
    const sum = maybeNumber + 10
    console.log('unknownsample 3:', typeof sum, sum)
  }
}
