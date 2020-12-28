import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from 'rxjs';
import {concatMap, finalize, tap} from 'rxjs/operators';

@Injectable()
export class LoadingService {
  private loadingSubject = new BehaviorSubject<boolean>(false);
  public loading$: Observable<boolean> = this.loadingSubject.asObservable();

  constructor() {
    console.log('Loading service created...');
  }

  public showLoaderUntilCompleted<T>(obs$: Observable<T>): Observable<T> {
    return of(null)
      .pipe(
        tap(() => this.loadingOn()),
        concatMap(() => obs$),
        finalize(() => this.loadingOff())
      );
  }

  public loadingOn() {
    this.loadingSubject.next(true);
  }

  public loadingOff() {
    this.loadingSubject.next(false);
  }
}
