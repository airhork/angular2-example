import { Pipe, PipeTransform, Injectable } from '@angular/core';
import {ShareService} from './share.service';
/*
 * Raise the value exponentially
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength:exponent
 * Example:
 *   {{ 2 |  exponentialStrength:10}}
 *   formats to: 1024
*/
@Injectable()
@Pipe({name: 'i18n', pure : false})
export class I18nPipe implements PipeTransform {

  constructor(private shareService : ShareService) {
  }

  transform(value: string, exponent: string): string{
    return value + this.shareService.getTitle();
  }
}

