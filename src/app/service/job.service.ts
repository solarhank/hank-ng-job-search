import { effect, Injectable, signal } from '@angular/core';
import { JobModel } from '../model/job';
import { HttpClient } from '@angular/common/http';
import { StorageService } from './storage.service';
import { JobId, JobIds } from '../shared/types';
import { FAVORITE_JOBS } from '../shared/constants';
import { map, Observable, pipe } from 'rxjs';
import { JobDetailModel } from '../model/job-detail';

@Injectable({
  providedIn: 'root'
})
export class JobService {
  constructor(private readonly httpClient: HttpClient, private storage: StorageService<JobIds>) {
    effect(() => this.storage.set(FAVORITE_JOBS, this.favoritesSignal()));
  }

  private favoritesSignal = signal<JobIds>(this.storage.get(FAVORITE_JOBS));
  readonly favorites = this.favoritesSignal.asReadonly();
  private apiUrl = '/jobs'; // adjust this to your API base URL

  getJob(id: number): Observable<JobDetailModel> {
    return this.httpClient.get<JobDetailModel>(`${this.apiUrl}/${id}`);
  }

  getAllJobs(): Observable<JobModel[]> {
    return this.httpClient.get<JobModel[]>(this.apiUrl);
  }

  toggleFavorite(id: JobId): void {
    const index = this.favoritesSignal().indexOf(id);
    if (index !== -1)
      this.favoritesSignal.update(favorites => favorites.filter((_, i) => i !== index));
    else
      this.favoritesSignal.update(favorites => [...favorites, id]);
  }

  getFavoriteJobs(): Observable<JobModel[]> {
    let allJobs = this.getAllJobs();
    
    return allJobs.pipe(map(jobs => jobs.filter(job => this.favoritesSignal().includes(job.id))));
  }
}
