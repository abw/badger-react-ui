export type PropsObject = {
  [key: string]: unknown
}
export interface StringPropsObject {
  [key: string]: string
}

export type Nothing = null | undefined
export type MaybeNumber = string | Nothing
export type MaybeString = string | Nothing
export type MaybeNumberString = number | string | Nothing

export type TrueOrString = boolean | string
export type TrueOrNumberString = boolean | number | string
export type MaybeTrueOrString = TrueOrString | null | undefined
export type MaybeTrueOrNumberString = TrueOrNumberString | null | undefined
export type MaybeNumberFunction = string | ((arg: number) => string)
export type MaybeStringFunction = string | ((arg: string) => string)
export type MaybeAnyStringFunction = string | ((arg: unknown) => string)
export type MaybeNumberStringFunction = string | ((arg: number | string) => string)

export type OnClick = () => void
export type ThisCallback = (that: React.Component) => void

export type PartialWith<T, With extends keyof T> = Partial<T> & Pick<T, With>
export type MaybeWithout<T, Without extends keyof T> = Omit<T, Without> & Partial<Pick<T, Without>>