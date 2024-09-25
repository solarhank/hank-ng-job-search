import { Component } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
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
export class DetailComponent {
  constructor(private readonly jobService: JobService, private readonly route: ActivatedRoute){
    this.route.params.pipe(takeUntilDestroyed()).subscribe(params => {
      this.jobService.getJob(params['id']).subscribe(
        response => this.data = response
      );
    })
  }

  data: JobDetailModel = new JobDetailModel();
}
