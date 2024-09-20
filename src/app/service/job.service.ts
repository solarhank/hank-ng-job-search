import { effect, inject, Injectable, signal } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { JobModel } from '../model/job';
import { mockHandlers } from '../../mocks';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { JobId, JobIds } from '../shared/types';
import { FAVORITE_JOBS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  private storage = inject(StorageService<JobIds>);
  private favoritesSignal = signal<JobIds>(this.storage.get(FAVORITE_JOBS));
  readonly favorites = this.favoritesSignal.asReadonly();
  private apiUrl = '/jobs'; // adjust this to your API base URL
  
  constructor(private readonly httpClient: HttpClient) {
    effect(() => this.storage.set(FAVORITE_JOBS, this.favoritesSignal()));
  }
  // //TODO: type
  // getJob(id: string): Observable<any> {
  //   return this.http.get(`${this.apiUrl}/${id}`);
  // }

  // //TODO: type
  getAllJobs(): JobModel[] {
    return [];
    // return this.httpClient.get<JobModel[]>(this.apiUrl).pipe(
    //   tap((data) => console.log('getAllJobs', data)),
    //   map((data) => data)
    // )
  }

  toggleFavorite(id: JobId): void {
    const index = this.favoritesSignal().indexOf(id);
    if (index !== -1)
      this.favoritesSignal.update(favorites => favorites.filter((_, i) => i !== index));
    else
      this.favoritesSignal.update(favorites => [...favorites, id]);
  }
}
