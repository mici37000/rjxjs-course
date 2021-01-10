import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Lesson} from '../model/lesson';
import {CoursesService} from '../services/courses.service';


@Component({
  selector: 'course',
  templateUrl: './search-lessons.component.html',
  styleUrls: ['./search-lessons.component.css']
})
export class SearchLessonsComponent implements OnInit {
  public searchResults$: Observable<Lesson[]>;
  public activeLesson: Lesson;

  constructor(private coursesService: CoursesService) {}

  ngOnInit() {


  }

  public onSearch(search: string): void {
    this.searchResults$ = this.coursesService.searchLessons(search);
  }

  public openLesson(lesson: Lesson): void {
    this.activeLesson = lesson;
  }

  public onBackSearch(): void {
    this.activeLesson = null;
  }
}











