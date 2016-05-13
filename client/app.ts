import {Component, provide, enableProdMode} from '@angular/core';
import {ROUTER_PROVIDERS, ROUTER_DIRECTIVES, RouteConfig} from '@angular/router';
//import {APP_BASE_HREF} from '@angular/platform/common';
import {Todos} from './components/todo/todo';


// import {Tasks} from '../tasks';

// import {TaskList} from './components/task-list';

// import {bootstrap} from 'angular2-meteor-auto-bootstrap';

// // richardhwang
// import {MATERIAL_DIRECTIVES, MATERIAL_PROVIDERS} from "ng2-material/all";

//enableProdMode();

@Component({
  selector: 'app',
  templateUrl: 'client/app.html',
  //styleUrls:['node_modules/ng2-material/dist/ng2-material.css','node_modules/ng2-material/dist/font.css'],
  directives: [ROUTER_DIRECTIVES]
})


@RouteConfig([
  { path: '/', as: 'todos', component: Todos }
  //,
  //{ path: '/party/:partyId', as: 'PartyDetails', component: PartyDetails }
])

class myApp {}

bootstrap(myApp, [ROUTER_PROVIDERS, provide(APP_BASE_HREF, { useValue: '/' })]);

