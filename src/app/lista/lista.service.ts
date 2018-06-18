import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';


@Injectable()
export class ListaService {
    private API_URL = 'http://localhost:3000';
    arr: any[];

    constructor(private http: HttpClient) {
    }

    disciplinas(): Observable<any> {
        return this.http.get(this.API_URL + '/disciplinas');
    }
    getdisciplina(id: number): Observable<any> {
        return this.http.get(this.API_URL + '/disciplinas/' + id);
    }
}