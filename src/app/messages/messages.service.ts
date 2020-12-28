import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';

@Injectable()
export class MessagesService {
  private subject = new BehaviorSubject<string[]>([]);
  public errors$: Observable<string[]> = this.subject.asObservable();

  showErrors(...errors: string[]): void {
    this.subject.next(errors);
  }
}
