import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'
@Component({
   selector: 'app-root',
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
   constructor(private _httpService: Http) { }
   apiValues: string[] = [];
   ngOnInit() {
   console.log("Sent:: " + Date.now());
      this._httpService.get('/api/Values').subscribe(values => {
         this.apiValues = values.json() as string[];
         console.log("Recieved:: " + Date.now());
      });
   }
}