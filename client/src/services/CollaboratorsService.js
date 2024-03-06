import App from "../App.vue"
import { AppState } from "../AppState.js"
import { Collaborator } from "../models/Collaborator.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"

class CollaboratorsService {
  async getMyAlbumCollaborations() {
    const response = await api.get('account/collaborators')
    logger.log('GOT MY ALBUMS', response.data)
    const newCollabs = response.data.map(pojo => new Collaborator(pojo))
    AppState.albumCollaborators = newCollabs
  }
  async createCollaborator(albumData) {
    const response = await api.post('api/collaborators', albumData)
    logger.log('CREATED COLLAB', response.data)
    AppState.profileCollaborators.push(new Collaborator(response.data))
  }
  async getCollaboratorsByAlbumId(albumId) {
    const response = await api.get(`api/albums/${albumId}/collaborators`)
    logger.log('GOT COLLABS', response.data)
    const newCollabs = response.data.map(pojo => new Collaborator(pojo))
    AppState.profileCollaborators = newCollabs
  }
}

export const collaboratorsService = new CollaboratorsService()