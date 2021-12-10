const appId = 730;

export const getSteamId = (vanityurl: string) => new Promise<string>((resolve, reject) => {
    fetch(`/vanityurl/${vanityurl}`).then((res) => {
        res.json().then((data) => {
            return resolve(data.response.steamid);
        })
    }).catch((error) => {
        reject(error);
    })
})

export const getUser = (steamUrl: string) => new Promise<any>((resolve, reject) => {
    const isIdAvailable = steamUrl.split("/")[1] !== "id";

    if (!isIdAvailable) {
        const vanityurl = steamUrl.split("/")[2];
        getSteamId(vanityurl).then((steamid) => {
            getProfile(steamid).then((profile) => {
                return resolve(profile);
            })
        })
    } else {
        getProfile(steamUrl.split("/")[2]).then((profile) => {
            return resolve(profile);
        })
    }
})

export const getProfile = (steamId: string) => new Promise((resolve, reject) => {
    fetch(`/profile/${steamId}`).then((res) => {
        res.json().then((data) => {
            return resolve(data.response.players[0]);
        })
    }).catch((error) => {
        reject(error);
    })
})

export const getFriends = (steamId: string) => new Promise((resolve, reject) => {
    fetch(`/friendList/${steamId}`).then((res) => {
        res.json().then((data) => {
            return resolve(data.friendslist.friends);
        })
    }).catch((error) => {
        reject(error);
    })
})

export const getGames = (steamId: string) => new Promise((resolve, reject) => {
    fetch(`/games/${steamId}`).then((res) => {
        res.json().then((data) => {
            return resolve(data.response.games);
        })
    }).catch((error) => {
        reject(error);
    })
})

export const getGameStats = (steamId: string) => new Promise((resolve, reject) => {
    fetch(`/gameStats/${steamId}/${appId}`).then((res) => {
        res.json().then((data) => {
            return resolve(data);
        })
    }).catch((error) => {
        reject(error);
    })
})