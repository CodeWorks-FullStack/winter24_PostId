import { AppState } from "../AppState.js"
import { Picture } from "../models/Picture.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class PicturesService {
  async getPicturesByAlbumId(albumId) {
    const response = await api.get(`api/albums/${albumId}/pictures`)
    logger.log('GOT PICTURES', response.data)
    AppState.pictures = response.data.map(picturePOJO => new Picture(picturePOJO))
  }
}

export const picturesService = new PicturesService()