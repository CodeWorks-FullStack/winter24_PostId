import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CollaboratorsService {
  async getCollaboratorsByAlbumId(albumId) {
    const response = await api.get(`api/albums/${albumId}/collaborators`)
    logger.log('GOT COLLABS', response.data)
  }
}

export const collaboratorsService = new CollaboratorsService()