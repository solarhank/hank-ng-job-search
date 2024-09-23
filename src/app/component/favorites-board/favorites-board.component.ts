import { Component, OnInit } from '@angular/core';
import { JobModel } from '../../model/job';
import { JobService } from '../../service/job.service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-favorites-board',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './favorites-board.component.html',
  styleUrl: './favorites-board.component.css'
})
export class FavoritesBoardComponent implements OnInit{
  constructor(private readonly jobService: JobService) {
    //Empty
  }

  data: JobModel[] = []

  ngOnInit(): void {
    this.jobService.getFavoriteJobs().subscribe(response => this.data = response);
  }
}
