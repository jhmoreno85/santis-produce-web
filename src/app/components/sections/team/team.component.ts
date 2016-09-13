import { Component, OnInit } from '@angular/core';
import { TranslateService } from '../../../pipes/angular2-translator/TranslateService';
import { TranslatePipe } from '../../../pipes/angular2-translator/TranslatePipe';
import { TranslateComponent } from "../../../pipes/angular2-translator/TranslateComponent";
import { ResourceService } from '../../../shared/services/resource.service';

@Component({
  moduleId: module.id,
  selector: 'app-team',
  templateUrl: 'team.component.html',
  pipes: [TranslatePipe],
  directives: [TranslateComponent],
  providers: [ResourceService]
})
export class TeamComponent implements OnInit {

  private teamList;

  constructor(private translate: TranslateService, private _resourceService: ResourceService) {

  }

  ngOnInit() {
    this._resourceService.getElements("app/shared/resources/team-config.json")
      .subscribe(
        teamList =>	this.teamList = teamList,
        null,
        () => { }
      );
  }
}
