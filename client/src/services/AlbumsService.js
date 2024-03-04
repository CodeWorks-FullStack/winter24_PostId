import { AppState } from "../AppState.js"
import { Album } from "../models/Album.js"
import { logger } from "../utils/Logger.js"
import { api } from "./AxiosService.js"



class AlbumsService{
  async getAlbums() {
    const response = await api.get('api/albums')
    logger.log('GETTING ALBUMS', response.data)
    AppState.albums = response.data.map(album => new Album(album))
  }

  async getAlbumById(albumId){
    AppState.activeAlbum = null
    const response = await api.get(`api/albums/${albumId}`)
    logger.log('Get AlbumById', response.data)
    AppState.activeAlbum = new Album(response.data)
  }

}

export const albumsService = new AlbumsService()
