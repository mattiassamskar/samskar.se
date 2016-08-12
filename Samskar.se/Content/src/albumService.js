import axios from 'axios';

export function getAlbums() {
  return axios.get('/albums');
};

export function getAlbumImages(albumName) {
  return axios.get('/albums/' + albumName);
}
