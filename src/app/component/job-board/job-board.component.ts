import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';
import { JobModel } from '../../model/job';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-job-board',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './job-board.component.html',
  styleUrl: './job-board.component.css'
})
export class JobBoardComponent implements OnInit {
  constructor(private readonly jobService: JobService){
    //Empty
  }

  data: JobModel[] = [];

  ngOnInit(): void {
    this.jobService.getAllJobs().subscribe(response =>
      this.data = response
    );
  }
}
