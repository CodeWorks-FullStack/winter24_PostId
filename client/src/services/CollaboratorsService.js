import { AppState } from "../AppState.js"
import { Collaborator } from "../models/Collaborator.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CollaboratorsService {
  async getCollaboratorsByAlbumId(albumId) {
    const response = await api.get(`api/albums/${albumId}/collaborators`)
    logger.log('GOT COLLABS', response.data)
    const newCollabs = response.data.map(pojo => new Collaborator(pojo))
    AppState.profileCollaborators = newCollabs
  }
}

export const collaboratorsService = new CollaboratorsService()