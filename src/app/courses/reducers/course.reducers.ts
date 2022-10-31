import { allCoursesLoaded } from './../course.actions';
import { createEntityAdapter, EntityState } from '@ngrx/entity';
import { createReducer, on } from '@ngrx/store';
import { CoursesActions } from '../action-types';
import { compareCourses, Course } from './../model/course';

export interface CoursesState extends EntityState<Course>{
    allCoursesLoaded: boolean
}
export const adapter = createEntityAdapter<Course>({
    sortComparer: compareCourses,
   // selectId: course =>course.id in case of id is not the defaulr id
});
export const initialCourseState = adapter.getInitialState({
    allCoursesLoaded: false
});
export const coursesReducer = createReducer(
    initialCourseState,
    on(CoursesActions.allCoursesLoaded,
        (state, action)=> adapter.setAll(action.courses, {...state, allCoursesLoaded:true})),
    on(CoursesActions.courseUpdated,
        (state, action)=> adapter.updateOne(action.update, state))
);
export const {
    selectAll
} = adapter.getSelectors();