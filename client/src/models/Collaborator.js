export class Collaborator {
  constructor (data) {
    this.id = data.id // NOTE id of the many-to-many
    this.albumId = data.albumId
    this.accountId = data.accountId
    this.profile = data.profile
    this.album = data.album
  }
}

const profileData = {
  "_id": "65e89ba939cf0456d10e5a07",
  "albumId": "65e89ba939cf0456d10e5a03",
  "accountId": "645d75fdfdcb015333f9b0ba",
  "createdAt": "2024-03-06T16:36:57.911Z",
  "updatedAt": "2024-03-06T16:36:57.911Z",
  "__v": 0,
  "profile": {
    "_id": "645d75fdfdcb015333f9b0ba",
    "name": "giogio@gold.wind",
    "picture": "https://unblob.blob.core.windows.net/authpics/FatherPuchi.png",
    "id": "645d75fdfdcb015333f9b0ba"
  },
  "id": "65e89ba939cf0456d10e5a07"
}

const albumData = {
  "_id": "65e8b48c29fd5d63748d240a",
  "albumId": "65e89ba939cf0456d10e5a03",
  "accountId": "6398a9f28321a27f8fb0dd25",
  "createdAt": "2024-03-06T18:23:08.928Z",
  "updatedAt": "2024-03-06T18:23:08.928Z",
  "__v": 0,
  "album": {
    "_id": "65e89ba939cf0456d10e5a03",
    "title": "Retro Games",
    "coverImg": "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80",
    "category": "games",
    "creatorId": "645d75fdfdcb015333f9b0ba",
    "archived": false,
    "createdAt": "2024-03-06T16:36:57.662Z",
    "updatedAt": "2024-03-06T16:36:57.662Z",
    "__v": 0,
    "memberCount": 33,
    "id": "65e89ba939cf0456d10e5a03"
  },
  "id": "65e8b48c29fd5d63748d240a"
}