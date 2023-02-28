import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "cambioLetras",
})
export class ChangeLettersPipe implements PipeTransform {
  replacer: any = {
    a: "4",
    e: "3",
    i: "1",
    o: "0",
    u: "9",
  };

  transform(value: string): string {
    return value.replace(/a|e|i|o|u/gi, (letter) => this.replacer[letter]);
  }
}
