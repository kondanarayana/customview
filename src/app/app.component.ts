import { Component, OnInit } from '@angular/core';
import { Node, Options } from 'ng-material-treetable';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

    arrayOfNodesTree: Node<Task>[] = [
        {
          value: {
            name: 'Tasks for Sprint 1',
            completed: true,
            owner: 'Marco'
          },
          children: [
            {
              value: {
                name: 'Complete feature #123',
                completed: true,
                owner: 'Marco'
              },
              children: []
            },
            {
              value: {
                name: 'Update documentation',
                completed: true,
                owner: 'Jane'
              },
              children: [
                {
                  value: {
                    name: 'Proofread documentation',
                    completed: true,
                    owner: 'Bob'
                  },
                  children: []
                }
              ]
            }
          ]
        },
        {
          value: {
            name: 'Tasks for Sprint 2',
            completed: false,
            owner: 'Erika',
          },
          children: [
            {
              value: {
                name: 'Fix bug #567',
                completed: false,
                owner: 'Marco'
              },
              children: []
            },
            {
              value: {
                name: 'Speak with clients',
                completed: true,
                owner: 'James'
              },
              children: []
            }
          ]
        }
      ]
    constructor() {
    }

    ngOnInit() {
    }
}


export interface Report {
    name: string;
    owner: string;
    protected: boolean;
    backup: boolean;
  }
  
  export interface Task {
    name: string;
    completed: boolean;
    owner: string;
  }
