import { Account } from "./Account.js"


export class Album {
  constructor (data) {
    this.id = data.id
    this.title = data.title
    this.coverImg = data.coverImg
    this.category = data.category
    this.archived = data.archived
    this.creatorId = data.creatorId
    this.creator = new Account(data.creator)
    this.createdAt = new Date(data.createdAt)
    this.updatedAt = new Date(data.updatedAt)
    this.memberCount = data.memberCount || 0
  }
}
