import { Component, Input, OnInit } from '@angular/core';
import { StepBadge } from './../../../../models/stepBadge';

export interface VersionContent { body: string, effectiveDate: string, title: string };

@Component({
  selector: 'app-step-badge',
  templateUrl: './step-badge.component.html',
  styleUrls: ['./step-badge.component.scss']
})
export class StepBadgeComponent implements OnInit {
  @Input() stepBadge: StepBadge;
  @Input() number: number;
  public title: string;
  public body: string;
  public date: string;
  public sortedVersionContents: VersionContent[];

  constructor() { }

  ngOnInit(): void {
    this.determineMsgs(this.stepBadge.versionContent);
  }

  determineMsgs(versionContents: VersionContent[]) {
    this.sortedVersionContents = versionContents.sort((a, b) => {
      const dateA = new Date(a.effectiveDate);
      const dateB = new Date(b.effectiveDate);
      return (dateB as any) - (dateA as any);
    })
    this.sortedVersionContents.length = 1;
    this.title = this.sortedVersionContents[0].title;
    this.body = this.sortedVersionContents[0].body;

  }

}
