import { allCoursesLoaded } from './course.actions';
import { createFeatureSelector, createSelector, createSelectorFactory } from "@ngrx/store";
import { CoursesState } from './reducers/course.reducers';
import * as fromCourses from './reducers/course.reducers';
import { state } from "@angular/animations";

export const selectCoursesState = createFeatureSelector<CoursesState>("courses");

export const selectAllCourses = createSelector(
    selectCoursesState,
    fromCourses.selectAll
);

export const selectBeginnerCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category =='BEGINNER')
);
export const selectAdvancesCourses = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.category =='ADVANCED')
);
export const selectPromoTotal = createSelector(
    selectAllCourses,
    courses => courses.filter(course => course.promo).length
);
export const areCoursesLoaded = createSelector(
    selectCoursesState,
    state => state.allCoursesLoaded
    );