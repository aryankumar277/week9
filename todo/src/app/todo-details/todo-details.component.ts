import { Component, OnInit } from '@angular/core';
import { TodoServiceService } from '../todo-service.service';

@Component({
  selector: 'app-todo-details',
  templateUrl: './todo-details.component.html',
  styleUrls: ['./todo-details.component.css']
})

export class TodoDetailsComponent implements OnInit {

  stud_det: any = []

  constructor(private stud:TodoServiceService) { }

  ngOnInit(): void {
    this.stud_det = this.stud.getStudent()
  }
}
