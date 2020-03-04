import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {filter} from 'rxjs/operators';
import {isNullOrUndefined} from 'util';

@Injectable({providedIn: 'root'})
export class TopoJsonService {

    public russia$: Observable<any>;
    private _russia$: BehaviorSubject<any> = new BehaviorSubject<any>(null);

    constructor(private _httpClient: HttpClient) {
        this.russia$ = this._russia$.pipe(filter(value => !isNullOrUndefined(value)));
        this.loadTopoJson();
    }

    public loadTopoJson() {
        this._httpClient
            .get('../assets/russia2.json')
            .subscribe(json => {
                this._russia$.next(json);
            });
    }
}
