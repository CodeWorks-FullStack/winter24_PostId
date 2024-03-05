import { dbContext } from "../db/DbContext.js"

class PicturesService {
  async createPicture(pictureData) {
    const picture = await dbContext.Pictures.create(pictureData)
    return picture
  }
}

export const picturesService = new PicturesService()