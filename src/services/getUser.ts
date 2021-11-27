import { rejects } from "assert";

export const getUser = (userId: string) => new Promise((resolve, reject) => {
    fetch("https://api.steampowered.com/ISteamNews/GetNewsForApp/v2/?appid=440&count=3?key=BDF8FD5D6407E3F62042047D2858D948").then((res) => {
        res.json().then((data) => {
            return resolve(data);
        })
    }).catch((error) => {
        reject(error);
    })
})