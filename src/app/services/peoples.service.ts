import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { People } from '../interfaces/people';

@Injectable()
export class PeoplesService {

    constructor(private http: HttpClient) { }

    getPeoples() {
        return this.http.get<any>('assets/data/peoples.json')
        .toPromise()
        .then(res => <People[]>res.data)
        .then(data => { return data; });
    }
}