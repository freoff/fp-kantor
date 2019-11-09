import { Component, OnInit } from '@angular/core';
import { TranslationService } from '@services/translation.service';

@Component({
  selector: 'fp-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.setupApp();
  }

  public setupApp() {
    this.translationService.setup();
  }
}
