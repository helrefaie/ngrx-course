import { tap } from 'rxjs/operators';
import { isLoggedIn } from './auth.selectors';
import { select } from '@ngrx/store';
import { Store } from '@ngrx/store';
import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { MinimalActivatedRouteSnapshot, MinimalRouterStateSnapshot } from "@ngrx/router-store";
import { Observable } from "rxjs";
import { AppState } from '../reducers';

@Injectable()
export class AuthGuard implements CanActivate
{
    constructor (private store: Store<AppState>,
        private router: Router
        ){

    }
    canActivate( route: MinimalActivatedRouteSnapshot, state: MinimalRouterStateSnapshot) : Observable<boolean>{
       return  this.store
        .pipe(
            select(isLoggedIn),
            tap(loggedIn =>{
                if (!loggedIn) this.router.navigateByUrl('/login');
            })
        );
    }
        

}