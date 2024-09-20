import { inject, Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { JobModel } from '../model/job';
import { mockHandlers } from '../../mocks';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private readonly httpClient: HttpClient) {}
  
  // private apiUrl = '/jobs'; // adjust this to your API base URL

  // //TODO: type
  // getJob(id: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`);
  // }

  // //TODO: type
  getAllJobs(): JobModel[] {
    return [];
    // return this.httpClient.get<JobModel[]>('/jobs').pipe(
    //   tap((data) => console.log('getAllJobs', data)),
    //   map((data) => data)
    // )
  }
}
