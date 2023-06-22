import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FavoriteService {
  favoritos: any[] = [];

  agregarFavorito(noticia: any) {
    this.favoritos.push({ ...noticia, savedAt: new Date() });
  }

  getFavoritos() {
    return this.favoritos;
  }
}
