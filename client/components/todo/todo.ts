import {Component, provide, enableProdMode} from '@angular/core';
import {Tasks} from '../../../server/tasks';
import {TaskList} from './task-list';

import {bootstrap} from 'angular2-meteor-auto-bootstrap';

// richardhwang
import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

//enableProdMode();

@Component({
  selector: 'todo',
  templateUrl: 'client/components/todo/todo.html',
  directives: [TaskList]
})
export class Todos {
  addTask(text) {
    Tasks.insert({
      text: text,
      checked: false,
      private: false
    });
  }

  get todoCount() {
    return Tasks.find({
      checked: false
    }).count();
  };
}
