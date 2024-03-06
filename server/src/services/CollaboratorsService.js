import { dbContext } from "../db/DbContext.js"

class CollaboratorsService {
  async getCollaboratorsForAlbum(albumId) {
    const collaborators = await dbContext.Collaborators.find({ albumId }).populate('profile', 'name picture')
    return collaborators
  }
  async createCollaborator(collaboratorData) {
    const collaborator = await dbContext.Collaborators.create(collaboratorData)
    return collaborator
  }
}

export const collaboratorsService = new CollaboratorsService()