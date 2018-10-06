import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  isInteger(value: any): boolean {
    if (isNaN(value)) {
      return false;
    } else if (parseFloat(value) !== parseInt(value)) {
      return false;
    }
    return true;
  }
}
