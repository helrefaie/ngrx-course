import { AuthState } from './reducers/index';
import { createFeatureSelector, createSelector } from "@ngrx/store";

export const selectAuthState = createFeatureSelector<AuthState>("auth");


export const isLoggedIn= createSelector( //has memory (memoized functions)
    selectAuthState,
    auth => !!auth.user
);

// export const isLoggedIn= createSelector( //has memory (memoized functions)
//     state => state["auth"],
//     auth => !!auth.user
// );

export const isLoggedOut= createSelector( //has memory (memoized functions)
   isLoggedIn,
   loggedIn => !loggedIn
);