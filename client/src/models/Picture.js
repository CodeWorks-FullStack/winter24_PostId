import { Account } from "./Account.js"

export class Picture {
  constructor (data) {
    this.id = data.id
    this.imgUrl = data.imgUrl
    this.albumId = data.albumId
    this.creatorId = data.creatorId
    this.creator = new Account(data.creator)
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
  }
}

// const data = {
//   "_id": "65e78a2d1a1d04dce5756d9d",
//   "imgUrl": "https://images.unsplash.com/photo-1579199339853-eec461b791b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1065&q=80",
//   "albumId": "65e78a2d1a1d04dce5756d99",
//   "creatorId": "645d75fdfdcb015333f9b0ba",
//   "createdAt": "2024-03-05T21:10:05.779Z",
//   "updatedAt": "2024-03-05T21:10:05.779Z",
//   "__v": 0,
//   "creator": {
//     "_id": "645d75fdfdcb015333f9b0ba",
//     "name": "giogio@gold.wind",
//     "picture": "https://unblob.blob.core.windows.net/authpics/FatherPuchi.png",
//     "id": "645d75fdfdcb015333f9b0ba"
//   },
//   "id": "65e78a2d1a1d04dce5756d9d"
// }