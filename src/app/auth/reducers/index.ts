import { User } from './../model/user.model';
import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createReducer,
  createSelector,
  MetaReducer,
  on
} from '@ngrx/store';
import { AuthActions } from '../action-types';
// import { environment } from '../../environments/environment';

export const authFeatureKey = 'auth';

export interface AuthState {
  user: User
}
export const initialAuthState: AuthState ={
  user: undefined
}

// export const reducers: ActionReducerMap<AuthState> = {

// };


//export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

export const  authReducer = createReducer(
  initialAuthState,
  on(AuthActions.login, (state, action)=> {
    return{
      user: action.user
    }
  }),
  on(AuthActions.logout, (state, action)=> {
    return{
      user: undefined
    }
  })

);
