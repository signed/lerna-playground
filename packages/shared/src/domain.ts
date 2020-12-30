export type SomeType = { value:string}

export const someFunction = (times: number, value: string): SomeType => {
    return {
        value: `${times}: ${value}`
    }
}
