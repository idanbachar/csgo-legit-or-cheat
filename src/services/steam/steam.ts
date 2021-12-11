import { ICSGO } from "../../components/games/ICSGO";
import { IGame } from "../../components/games/IGame";
import { IFriend } from "../../components/player/IFriend";
import { IPlayer } from "../../components/player/IPlayer";
import { IVac } from "../../components/player/IVac";

const appId = 730;

export const getSteamId = (vanityurl: string) => new Promise<string>((resolve, reject) => {
    fetch(`/vanityurl/${vanityurl}`).then((res) => {
        res.json().then((data) => {
            return resolve(data.response.steamid);
        }).catch((error) => {
            console.log(error);
            return reject(null);
        })
    }).catch((error) => {
        reject(null);
    })
})

export const getProfile = (steamId: string) => new Promise<IPlayer>((resolve, reject) => {
    fetch(`/profile/${steamId}`).then((res) => {
        res.json().then((data) => {
            return resolve(data.response.players[0]);
        }).catch((error) => {
            console.log(error);
            return reject(null);
        })
    }).catch((error) => {
        reject(null);
    })
})

export const getUser = (steamUrl: string) => new Promise<IPlayer>((resolve, reject) => {
    const isIdAvailable = steamUrl.split("/")[1] !== "id";

    if (!isIdAvailable) {
        const vanityurl = steamUrl.split("/")[2];
        getSteamId(vanityurl).then((steamid) => {
            getProfile(steamid).then((profile) => {
                return resolve(profile);
            }).catch((error) => {
                console.log(error);
                return reject(null);
            })
        }).catch((error) => {
            console.log(error);
            return reject(null);
        })
    } else {
        getProfile(steamUrl.split("/")[2]).then((profile) => {
            return resolve(profile);
        }).catch((error) => {
            console.log(error);
            return reject(null);
        })
    }
})
export const getVac = (steamId: string) => new Promise<IVac | null>((resolve, reject) => {
    fetch(`/playerBans/${steamId}}`).then((res) => {
        res.json().then((data) => {
            return resolve(data.players[0]);
        }).catch((error) => {
            console.log(error);
            return resolve(null);
        })
    }).catch((error) => {
        return resolve(null);
    })
})

export const getFriends = (steamId: string) => new Promise<IFriend[] | null>((resolve, reject) => {
    fetch(`/friendList/${steamId}`).then((res) => {
        res.json().then((data) => {
            return resolve(data.friendslist.friends);
        }).catch((error) => {
            console.log(error);
            return resolve(null);
        })
    }).catch((error) => {
        return resolve(null);
    })
})

export const getGames = (steamId: string) => new Promise<IGame[] | null>((resolve, reject) => {
    fetch(`/games/${steamId}`).then((res) => {
        res.json().then((data) => {
            return resolve(data.response.games);
        }).catch((error) => {
            console.log(error);
            return resolve(null);
        })
    }).catch((error) => {
        return resolve(null);
    })
})

export const getCSGOStats = (steamId: string) => new Promise<ICSGO | null>((resolve, reject) => {
    fetch(`/gameStats/${steamId}/${appId}`).then((res) => {
        res.json().then((data) => {
            return resolve(data.playerstats);
        }).catch((error) => {
            console.log(error);
            return resolve(null);
        })
    }).catch((error) => {
        return resolve(null);
    })
})