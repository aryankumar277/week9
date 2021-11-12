import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {
  student_data = [
    {"name":"Rahul", "sem":4, "cgpa":9.2},
    {"name":"Divya", "sem":6, "cgpa":8.5},
    {"name":"Riya", "sem":2, "cgpa":9.7},
    {"name":"Shekhar", "sem":8, "cgpa":7.8}
  ]

  getStudent() {
    return this.student_data
  }

  constructor() { }
}
