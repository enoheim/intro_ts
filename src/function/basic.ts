// アロー関数
export const logMessage1 = (message: string): void => {
  console.log('Function basic sample 1:', message)
}

// 名前付き関数
export function logMessage2(message: string): void {
  console.log('Function basic sample 2:', message)
}

// 関数式
export const logMessage3 = function (message: string): void {
  console.log('Function basic sample 3:', message)
}

// アロー関数(省略)
export const logMessage4 = (message: string): void => console.log('Function basic sample 4:', message)

export const alwaysThrowError = (message: string): never => {
  throw new Error(message)
}

// 呼び出しシグネチャ(省略)
type LogMessage = (message: string) => void
export const LogMessage5: LogMessage = (message) => {
  console.log('Function basic sample 5:', message)
}

// 呼び出しシグネチャ
type FullLogMessage = {
  (message: string): void
}
export const LogMessage6: FullLogMessage = (message) => {
  console.log('Function basic sample 6:', message)
}
