import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculatorService {

  constructor() {
  }

  public some(a, b): number {
    return a + b;
  }
  public submission(a, b): number {
    return a - b;
  }
}
