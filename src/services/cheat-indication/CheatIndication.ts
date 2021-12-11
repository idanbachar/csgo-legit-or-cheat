import { IGame } from "../../components/games/IGame";
import { IFriend } from "../../components/player/IFriend";

export const checkGamesCount = (games: IGame[] | null | undefined) => {
    if (games === null || games === undefined) return true;
    return games.length < 4;
}

export const checkFriendsCount = (friends: IFriend[] | null) => {
    if (friends === null) return true;
    return friends.length < 3;
}

export const checkAccountAge = (dateCreation: Date) => {
    const currentDate = new Date();
    let diff = (currentDate.getTime() - dateCreation.getTime()) / 1000;
    diff /= (60 * 60 * 24);
    const diff_years = Math.abs(Math.round(diff / 365.25));

    return diff_years < 1;
}