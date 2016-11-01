import { Injectable }    from '@angular/core';
import {Subject} from 'rxjs/Rx';


@Injectable()
export class ShareService {
  nextid = 0;
  dic = {title : 'oldTitle'};
  event : Subject<string> = new Subject<string>();

 getSubject() {
   return this.event;
 }

  getNextId() {
    return this.nextid++;
  }

  updateTitle(title:string) {
    this.dic.title = title;
  }

  getTitle() {
    return this.dic.title;
  }

}

