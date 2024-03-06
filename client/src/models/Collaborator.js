export class Collaborator {
  constructor (data) {
    this.id = data.id // NOTE id of the many-to-many
    this.albumId = data.albumId
    this.accountId = data.accountId
    this.profile = data.profile
  }
}

const data = {
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