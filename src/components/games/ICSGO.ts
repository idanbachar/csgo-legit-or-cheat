import { IAchievement } from "../csgo-stats/achievement/IAchievement";
import { IStat } from "../csgo-stats/stat/IStat";

export interface ICSGO {
    achievements: IAchievement[],
    stats: IStat[],
    gameName: string,
    steamID: string
}