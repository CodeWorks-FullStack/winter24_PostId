import { dbContext } from "../db/DbContext.js"
import { BadRequest } from "../utils/Errors.js"

class CollaboratorsService {

  async getAlbumCollaborations(userId) {
    // { userId: 'dadwopjqkn32139123-ic' }
    // const albumCollabs = await dbContext.Collaborators.find({ userId })

    const albumCollabs = await dbContext.Collaborators.find({ accountId: userId }).populate('album')
    return albumCollabs
  }
  async getCollaboratorsForAlbum(albumId) {
    const collaborators = await dbContext.Collaborators.find({ albumId }).populate('profile', 'name picture')
    return collaborators
  }
  async createCollaborator(collaboratorData) {
    const collaborator = await dbContext.Collaborators.create(collaboratorData)
    return collaborator
  }

  async destroyCollaborator(collaboratorId) {
    const collaboratorToDestroy = await dbContext.Collaborators.findById(collaboratorId)

    if (!collaboratorToDestroy) { throw new BadRequest(`Invalid id: ${collaboratorId}`) }

    await collaboratorToDestroy.deleteOne()

    return 'Collaborator was destroyed'
  }
}

export const collaboratorsService = new CollaboratorsService()