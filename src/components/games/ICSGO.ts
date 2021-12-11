import { IAchievement } from "../csgo-stats/IAchievement";
import { IStat } from "../csgo-stats/IStat";

export interface ICSGO {
    achievements: IAchievement[],
    stats: IStat[],
    gameName: string,
    steamID: string
}