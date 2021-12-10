import { IGame } from "../games/IGame";

export interface IPlayer {
    avatar: string;
    avatarfull: string;
    avatarhash: string;
    avatarmedium: string;
    communityvisibilitystate: number;
    lastlogoff: number;
    loccountrycode: string;
    personaname: string;
    personastate: number;
    primaryclanid: string;
    profilestate: number;
    profileurl: string;
    realname: string;
    steamid: string;
    timecreated: number;
    games?: IGame[]
}