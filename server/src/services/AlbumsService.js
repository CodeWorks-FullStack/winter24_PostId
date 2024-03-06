import { dbContext } from "../db/DbContext.js"
import { Forbidden } from "../utils/Errors.js"


class AlbumsService {
  async createAlbum(albumData) {
    const album = await dbContext.Albums.create(albumData)
    await album.populate('creator')
    return album
  }
  async getAllAlbums() {
    const albums = await dbContext.Albums.find().populate('creator')
    return albums
  }

  async getOneAlbum(albumId) {
    const album = await dbContext.Albums.findById(albumId).populate('creator')
    if (!album) throw new Error(`no album with id: ${albumId}`)
    return album
  }
  async archiveAlbum(albumId, userId) {
    const album = await this.getOneAlbum(albumId)
    if (album.creatorId != userId) throw new Forbidden(`That's my purse, I don't know you!, could not archived album`)
    album.archived = true
    await album.save()
    return `archived the ${album.title} album`
  }

}

export const albumsService = new AlbumsService()
