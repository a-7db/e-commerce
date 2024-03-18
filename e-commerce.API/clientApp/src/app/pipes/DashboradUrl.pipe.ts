import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'DashboradUrl'
})
export class DashboradUrlPipe implements PipeTransform {

  transform(link: string): string {
    return `/dashboard/${link}`;
  }

}
