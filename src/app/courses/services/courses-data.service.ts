import { HttpClient } from '@angular/common/http';
import { DefaultDataService, HttpUrlGenerator } from '@ngrx/data';
import { Injectable } from "@angular/core";
import { Course } from '../model/course';
import { map, Observable } from 'rxjs';

@Injectable()
export class CoursesDataService extends DefaultDataService<Course>{

    constructor(http:HttpClient, httpUrlGenerator: HttpUrlGenerator){
        super('Course', http, httpUrlGenerator);
    }
    getAll(): Observable<Course[]> {
        return this.http.get('/api/courses')
        .pipe(
            map( res => res["payload"])
            );
    }
}