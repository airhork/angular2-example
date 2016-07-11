import { Injectable }    from '@angular/core';


@Injectable()
export class ShareService {
  nextid = 0;
  dic = {title : 'oldTitle'};
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

