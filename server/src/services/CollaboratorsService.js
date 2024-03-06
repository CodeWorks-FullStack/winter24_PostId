import { dbContext } from "../db/DbContext.js"
import { BadRequest, Forbidden } from "../utils/Errors.js"

class CollaboratorsService {

  async getAlbumCollaborations(userId) {
    // { userId: 'dadwopjqkn32139123-ic' }
    // const albumCollabs = await dbContext.Collaborators.find({ userId })

    const albumCollabs = await dbContext.Collaborators.find({ accountId: userId })
      .populate({
        path: 'album',
        populate: {
          path: 'memberCount'
        }
      })
    return albumCollabs
  }
  async getCollaboratorsForAlbum(albumId) {
    const collaborators = await dbContext.Collaborators.find({ albumId }).populate('profile', 'name picture')
    return collaborators
  }
  async createCollaborator(collaboratorData) {
    const collaborator = await dbContext.Collaborators.create(collaboratorData)
    await collaborator.populate('profile', 'name picture')
    return collaborator
  }

  async destroyCollaborator(collaboratorId, userId) {
    const collaboratorToDestroy = await dbContext.Collaborators.findById(collaboratorId)

    if (!collaboratorToDestroy) { throw new BadRequest(`Invalid id: ${collaboratorId}`) }

    if (collaboratorToDestroy.accountId != userId) { throw new Forbidden('YOU CANNOT DO THAT') }

    await collaboratorToDestroy.deleteOne()

    return 'Collaborator was destroyed'
  }
}

export const collaboratorsService = new CollaboratorsService()