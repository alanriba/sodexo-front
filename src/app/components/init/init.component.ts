import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { LazyLoadEvent } from 'primeng/api';
import { Table } from 'primeng/table';
import { ArticlesService } from 'src/app/service/news/api/articles.service';
import { PaginatedArticleList } from '../../service/news/model/paginatedArticleList';

@Component({
  selector: 'app-init',
  templateUrl: './init.component.html',
  styleUrls: ['./init.component.css']
})
export class InitComponent implements OnInit {
  noticias!: any;
  totalRecords: number | undefined = 1000;
  first: number | undefined = 0;
  loading!: boolean;
  multiSortMeta: any[] = [];
  sortMode: "single" | "multiple" = "multiple";
  table: Table | undefined;

  constructor(private http: HttpClient, private articleService: ArticlesService) { }

  ngOnInit() {
    this.loading = true;
    this.articleService.articlesList().subscribe({
      next: (article) => {
        this.noticias = article?.results;
        this.totalRecords = article?.count ?? 0;
        this.loading = false;
      }, error: (e) => console.error(e)
    });
  }

  public loadDataLazy(event: any): void {
    this.loading = true;

    // Obtener los parámetros de paginación y ordenamiento del evento
    // Obtener los parámetros de paginación y ordenamiento del evento
    const { first, rows, sortField, sortOrder } = event;

    // Calcular el offset y el limit para la llamada a la API
    const offset = first;
    const limit = rows;

    // Realizar la llamada a la API con los parámetros correspondientes
    this.articleService.articlesList(
      undefined, // Pasar un array vacío en lugar de null para el parámetro event
      undefined, // Resto de los parámetros de búsqueda (hasEvent, hasLaunch, etc.)
      undefined, // Limit: número de filas por página
      undefined, // Resto de los parámetros de búsqueda (newsSite, offset, ordering, etc.)
      undefined, // Resto de los parámetros de búsqueda (publishedAtGt, publishedAtGte, etc.)
      undefined, // Resto de los parámetros de búsqueda (publishedAtLt, publishedAtLte, etc.)
      undefined, // Resto de los parámetros de búsqueda (search, summaryContains, etc.)
      undefined, // Resto de los parámetros de búsqueda (summaryContainsAll, summaryContainsOne, etc.)
      undefined, // Resto de los parámetros de búsqueda (titleContains, titleContainsAll, etc.)
      undefined, // Resto de los parámetros de búsqueda (titleContainsOne, updatedAtGt, etc.)
      undefined, // Resto de los parámetros de búsqueda (updatedAtGte, updatedAtLt, etc.)
      undefined, // Resto de los parámetros de búsqueda (updatedAtLte)
    ).subscribe({
      next: (article) => {
        this.noticias = article;
        //this.totalRecords = article.count ?? 0;
        this.loading = false;
      }, error: (e) => console.error(e)
    });
  }


  agregarFavorito(noticia: any) {
    // this.favoritosService.agregarFavorito(noticia);
  }

  public onPageChange(event: any): void {
    const newRowsPerPage = event.rows; // Obtener el nuevo número de filas por página
    console.log('Nuevo número de filas por página:', newRowsPerPage);

    this.articleService.articlesList(
      undefined, // Pasar un array vacío en lugar de null para el parámetro event
      undefined, // Resto de los parámetros de búsqueda (hasEvent, hasLaunch, etc.)
      undefined, // Resto de los parámetros
      undefined, // Resto de los parámetros
       // Resto de los parámetros
      newRowsPerPage, // Limit: número de filas por página
      undefined, // Resto de los parámetros de búsqueda (newsSite, offset, ordering, etc.)
      undefined, // Resto de los parámetros de búsqueda (publishedAtGt, publishedAtGte, etc.)
      undefined, // Resto de los parámetros de búsqueda (publishedAtLt, publishedAtLte, etc.)
      undefined, // Resto de los parámetros de búsqueda (search, summaryContains, etc.)
      undefined, // Resto de los parámetros de búsqueda (summaryContainsAll, summaryContainsOne, etc.)
      undefined, // Resto de los parámetros de búsqueda (titleContains, titleContainsAll, etc.)
      undefined, // Resto de los parámetros de búsqueda (titleContainsOne, updatedAtGt, etc.)
      undefined, // Resto de los parámetros de búsqueda (updatedAtGte, updatedAtLt, etc.)
      undefined, // Resto de los parámetros de búsqueda (updatedAtLte)
    ).subscribe({
      next: (article) => {
        this.noticias = article?.results;
        this.totalRecords = article?.count ?? 0;
        this.loading = false;
      }, error: (e) => console.error(e)
    });
  }

  applyFilterGlobal(table: Table, event: any, stringVal: any) {
    table.filterGlobal((event.target as HTMLInputElement).value, stringVal);
  }

}
