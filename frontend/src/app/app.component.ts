import { Component, OnInit } from '@angular/core';
import { Patient } from './models';
import { AppService } from './app.service';
import { DropdownItem } from './app.models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'frontend';

  patient = new Patient();

  genders: DropdownItem[] = [];
  prefixesTH: DropdownItem[] = [];
  prefixesEN: DropdownItem[] = [];

  constructor(
    private appService: AppService,
  ) {
  }

  ngOnInit(): void {
    this.getPrefixes();
    this.getGenders();
  }

  getPrefixes(): void {
    this.appService.getPrefixes().subscribe(prefixes => {
      this.prefixesTH = prefixes['th'];
      this.prefixesEN = prefixes['en'];
    });
  }

  getGenders(): void {
    this.appService.getGenders().subscribe(genders => {
      this.genders = genders;
    });
  }

  createNewPatient(): void {

  }
}
