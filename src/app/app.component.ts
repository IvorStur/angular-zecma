import { Component, VERSION } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  constructor(private router: Router) {}

  name = 'Angular ' + VERSION.major;

  goTwo(): void {
    // this.router.navigate(["two", 656])
    this.router.navigate(["two", 365], {
      queryParams: { ad: 234, bc: "heh" },
      // queryParamsHandling: "merge",
    });
  }
  
  goThree(): void {
    // this.router.navigate(["three"]);

    this.router.navigate(["two", 365], {
      queryParams: { fe: 999, gi: "gg", hj: 12345 }
    });
  }
}
