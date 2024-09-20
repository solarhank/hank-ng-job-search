import { Component, OnInit } from '@angular/core';
import { JobService } from '../../service/job.service';

@Component({
  selector: 'app-job-board',
  standalone: true,
  imports: [],
  templateUrl: './job-board.component.html',
  styleUrl: './job-board.component.css'
})
export class JobBoardComponent implements OnInit {
  constructor(private readonly jobService: JobService) {
    //Empty
  }
  ngOnInit(): void {
    const temp = this.jobService.getAllJobs();
  }
}
