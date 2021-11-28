const appId = 730;

export const getFriendsCount = (steamId: string) => new Promise<number>((resolve, reject) => {
    fetch(`/friendList/${steamId}`).then((res) => {
        res.json().then((data) => {
            return resolve(data.friendslist.friends.length);
        })
    }).catch((error) => {
        reject(error);
    })
})

export const getGames = (steamId: string) => new Promise((resolve, reject) => {
    fetch(`/games/${steamId}`).then((res) => {
        res.json().then((data) => {
            return resolve(data);
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