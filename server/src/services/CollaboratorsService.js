import { dbContext } from "../db/DbContext.js"

class CollaboratorsService {
  async createCollaborator(collaboratorData) {
    const collaborator = await dbContext.Collaborators.create(collaboratorData)
    return collaborator
  }
}

export const collaboratorsService = new CollaboratorsService()