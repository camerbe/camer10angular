import { Injectable } from '@angular/core';
import {CurrentUserModel} from "../Models/current-user.model";
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ObservableService {
  private dataSubject = new Subject<any>();
  sendData(data: any) {
    this.dataSubject.next(data);
  }
  getData() {
    return this.dataSubject.asObservable();
  }

}
