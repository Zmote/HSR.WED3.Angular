import {Injectable} from '@angular/core';
import {Router} from '@angular/router';

@Injectable()
export class NavigationService {

  public goToUrl(url: string): void {
    this.router.navigateByUrl(url);
  }

  // TODO: add other routing targets, if needed

  public goToHome(): void {
    this.goToUrl('/welcome'); // TODO: adjust routing according this URL
  }

  public goToDashboard(): void {
    this.goToUrl('/dashboard'); // TODO: adjust routing according this URL
  }

  constructor(private router: Router) {
  }
}
