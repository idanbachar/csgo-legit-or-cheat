export interface ICSGO {
    achievements: {
        name: string,
        achieved: number
    }[],
    stats: {
        name: string,
        value: number
    }[],
    gameName: string,
    steamID: string
}