import { Component, OnInit } from '@angular/core';
import { StepBadge } from './../../models/stepBadge';
import { DataService } from './../../services/data.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  public stepBadges: StepBadge[];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.dataService.getStepBadges().subscribe(resp => {
      let sortedBadges = resp.sort((a, b) => Number(a.stepNumber) - Number(b.stepNumber));
      this.stepBadges = sortedBadges;
    });
  }

}
