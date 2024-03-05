import { AppState } from "../AppState.js"
import { Album } from "../models/Album.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"



class AlbumsService {

  async getAlbums() {
    const response = await api.get('api/albums')
    logger.log('GETTING ALBUMS', response.data)
    AppState.albums = response.data.map(album => new Album(album))
  }

  async getAlbumById(albumId) {
    AppState.activeAlbum = null
    const response = await api.get(`api/albums/${albumId}`)
    logger.log('Get AlbumById', response.data)
    AppState.activeAlbum = new Album(response.data)
  }

  async createAlbum(albumData) {
    const response = await api.post('api/albums', albumData)
    logger.log('CREATED ALBUM', response.data)
    const newAlbum = new Album(response.data)
    AppState.albums.push(newAlbum)
    return newAlbum
  }

  async archiveAlbum(albumId) {

    const response = await api.delete(`api/albums/${albumId}`)
    logger.log('ARCHIVED ALBUM', response.data)
  }

}

export const albumsService = new AlbumsService()
