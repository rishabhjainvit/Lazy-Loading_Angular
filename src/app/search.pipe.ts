import { Pipe, PipeTransform } from '@angular/core';
import { Observable, of } from 'rxjs';  
import { debounceTime, delay} from 'rxjs/operators'; 

@Pipe({
  name: 'customerEmailFilter',
  standalone: false
})
export class SearchPipe implements PipeTransform {

  transform(value: any, args?: any): Observable<any> {
    if (!args) {
      return of(value); 
    }

    
    return new Observable(observer => {
      
      setTimeout(() => {
        const filteredValues = value.filter((val: string) => 
          val.toString().toLowerCase().includes(args.toLowerCase())
        );
        observer.next(filteredValues);
        observer.complete(); 
      }, 3000); 
    });
  }
}
