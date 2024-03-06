import { Auth0Provider } from "@bcwdev/auth0provider";
import { albumsService } from "../services/AlbumsService.js";
import BaseController from "../utils/BaseController.js";
import { picturesService } from "../services/PicturesService.js";
import { collaboratorsService } from "../services/CollaboratorsService.js";



export class AlbumsController extends BaseController {
  constructor () {
    super('api/albums')
    this.router
      .get('', this.getAllAlbums)
      .get('/:albumId', this.getOneAlbum)
      .get('/:albumId/pictures', this.getPicturesInAlbum)
      .get('/:albumId/collaborators', this.getCollaboratorsForAlbum)

      .use(Auth0Provider.getAuthorizedUserInfo) // this middleware attaches .userInfo to the request parameter
      .post('', this.createAlbum)
      .delete('/:albumId', this.archiveAlbum)
  }


  async createAlbum(request, response, next) {
    try {
      const albumData = request.body
      albumData.creatorId = request.userInfo.id
      const album = await albumsService.createAlbum(albumData)
      response.send(album)
    } catch (error) {
      next(error)
    }
  }
  async getAllAlbums(request, response, next) {
    try {
      const albums = await albumsService.getAllAlbums()
      response.send(albums)
    } catch (error) {
      next(error)
    }
  }

  async getOneAlbum(request, response, next) {
    try {
      const albumId = request.params.albumId
      const album = await albumsService.getOneAlbum(albumId)
      response.send(album)
    } catch (error) {
      next(error)
    }
  }

  async getPicturesInAlbum(request, response, next) {
    try {
      const albumId = request.params.albumId
      const pictures = await picturesService.getPicturesInAlbum(albumId)
      response.send(pictures)
    } catch (error) {
      next(error)
    }
  }

  async getCollaboratorsForAlbum(request, response, next) {
    try {
      const albumId = request.params.albumId
      const collaborators = await collaboratorsService.getCollaboratorsForAlbum(albumId)
      response.send(collaborators)
    } catch (error) {
      next(error)
    }
  }

  async archiveAlbum(request, response, next) {
    try {
      const albumId = request.params.albumId
      const userId = request.userInfo.id
      const message = await albumsService.archiveAlbum(albumId, userId)
      response.send(message)
    } catch (error) {
      next(error)
    }
  }
}
