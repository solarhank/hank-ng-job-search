import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { JobService } from '../../service/job.service';
import { JobDetailModel } from '../../model/job-detail';

@Component({
  selector: 'app-detail',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './detail.component.html',
  styleUrl: './detail.component.css'
})
export class DetailComponent implements OnInit {
  constructor(private readonly jobService: JobService, private readonly route: ActivatedRoute){
    //empty
  }

  data: JobDetailModel = new JobDetailModel();

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.jobService.getJob(params['id']).subscribe(
        response => this.data = response
      );
    })
  }
}
