import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'greetings'
})
export class GreetingsPipe implements PipeTransform {

  transform(name: string): string {
    const hour = new Date().getHours();

    if (hour < 12) {
      return `Good morning, ${name}.`;
    } else if (hour < 18) {
      return `Good afternoon, ${name}.`;
    }

    return `Good evening, ${name}.`;
  }

}
