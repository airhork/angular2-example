import { Injectable }    from '@angular/core';


@Injectable()
export class ShareService {
  nextid = 0;
  getNextId() {
    return this.nextid++;
  }
}

