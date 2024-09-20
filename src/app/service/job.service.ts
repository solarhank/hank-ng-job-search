import { effect, Injectable, signal } from '@angular/core';
import { JobModel } from '../model/job';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { JobId } from '../shared/types';
import { FAVORITE_JOBS } from '../shared/constants';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private readonly httpClient: HttpClient, private storage: StorageService<JobId[]>) {
    effect(() => this.storage.set(FAVORITE_JOBS, this.favoritesSignal()));
  }

  private favoritesSignal = signal<JobId[]>(this.storage.get(FAVORITE_JOBS));
  readonly favorites = this.favoritesSignal.asReadonly();
  private apiUrl = '/jobs'; // adjust this to your API base URL

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
