import { ErrorHandler, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalerrorService implements ErrorHandler {
  handleError(error: any): void {
    console.log("globally error is handled");
    console.log(error);
  }

  constructor() { }
}
