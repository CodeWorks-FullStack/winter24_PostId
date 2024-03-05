import { dbContext } from "../db/DbContext.js"

class PicturesService {

  async createPicture(pictureData) {
    const picture = await dbContext.Pictures.create(pictureData)
    await picture.populate('creator', 'name picture')
    return picture
  }

  async getPicturesInAlbum(albumId) {
    // const pictures = await dbContext.Pictures.find({ albumId: albumId })
    // {albumId: '65e772d7bd7d70cc42456e27'}
    const pictures = await dbContext.Pictures.find({ albumId }).populate('creator', 'name picture')
    return pictures
  }
}

export const picturesService = new PicturesService()