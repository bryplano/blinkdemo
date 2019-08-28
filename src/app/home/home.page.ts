import { Component } from '@angular/core';
import { BlinkId, RecognizerResultState } from '@ionic-native/blinkid/ngx';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private blinkId: BlinkId) { }

}
