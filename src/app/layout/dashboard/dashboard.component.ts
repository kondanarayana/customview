import { Component, OnInit,ViewEncapsulation } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { DataService } from '../../shared/services/data.service';
import { Node, Options } from 'ng-material-treetable';


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


@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html',
    styleUrls: ['./dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None,
    animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
    public alerts: Array<any> = [];
    public reports: Array<any> = [];
    public dashboardDeatails: Array<any> = [];
    public colorsData: Array<any> = [];

    public doughnutChartLabels: string[] = [];
    public doughnutChartData: Array<any> =[];
    public doughnutChartType: string ="doughnut";
    public doughnutChartColors :Array<any> =[];
    activeIds: string[] =[];
  panels = [0, 1,2,3]

  openAll()
  {
    this.activeIds = this.panels.map(p => "panel-"+ p);
    console.log(this.activeIds);
  }
 
  logNode(node: Node<Report>) {
    console.log(node);
  }
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


    constructor( private _dataService:DataService){

        this.alerts.push(
            {
                id: 1,
                type: 'success',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            },
            {
                id: 2,
                type: 'warning',
                message: `Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptates est animi quibusdam praesentium quam, et perspiciatis,
                consectetur velit culpa molestias dignissimos
                voluptatum veritatis quod aliquam! Rerum placeat necessitatibus, vitae dolorum`
            }
        );
    }

    ngOnInit() {
       

      this.dashboardDeatails=[
        {"type":"ALERT TYPE",
        "sections":[{
            "headTitle":"PASSTHROUGH",
            "details":[{
                "title":"Total #of passthrough messgae processed by real time API",
                "bgClass":"primary",
                "icon":"fa-server",
                "count":"3,000",
                "label":"100%"
            },
            {
                "title":"Total # of passthrough messgae sent successfully by NE CA",
                "bgClass":"success",
                "icon":"fa-tasks",
                "count":"1,500",
                "label":"100%"
            },
            {
                "title":"Pass through consumers Suceess Rate",
                "bgClass":"warning",
                "icon":"fa-filter",
                "count":"50%",
                "label":"50%"
            }]
        },
        {
            "headTitle":"OPTIN",
            "details":[{
                "title":"Total #of Security alerts messgae processed by real time API",
                "bgClass":"primary",
                "icon":"fa-server",
                "count":"4,000",
                "label":"100%"
            },
            {
                "title":"Total #of NGP Security alerts successfully sent by NE US",
                "bgClass":"success",
                "icon":"fa-tasks",
                "count":"2,000",
                "label":"100%"
            },
            {
                "title":"Real Time NGP US success rate",
                "bgClass":"warning",
                "icon":"fa-filter",
                "count":"50%",
                "label":"50%"
            }]
        }]
        },
        {"type":"NOTIFICATION TYPE",
        "sections":[{
            "headTitle":"EMAIL",
            "details":[{
                "title":"Total Count",
                "bgClass":"primary",
                "icon":"fa-server",
                "count":"1,000",
                "label":""
            },
            {
                "title":"Deliverd",
                "bgClass":"success",
                "icon":"fa-tasks",
                "count":"500",
                "label":"50%"
            },
            {
                "title":"In Progress",
                "bgClass":"warning",
                "icon":"fa-filter",
                "count":"200",
                "label":"20%"
            },
            {
                "title":"Failed",
                "bgClass":"danger",
                "icon":"fa-support",
                "count":"100",
                "label":""
            }]
        },
        {
            "headTitle":"SMS",
            "details":[{
                "title":"Total Count",
                "bgClass":"primary",
                "icon":"fa-server",
                "count":"5,000",
                "label":""
            },
            {
                "title":"Deliverd",
                "bgClass":"success",
                "icon":"fa-tasks",
                "count":"2500",
                "label":"50%"
            },
            {
                "title":"In Progress",
                "bgClass":"warning",
                "icon":"fa-filter",
                "count":"500",
                "label":"10%"
            },
            {
                "title":"Failed",
                "bgClass":"danger",
                "icon":"fa-support",
                "count":"500",
                "label":""
            }]
        },
        {
            "headTitle":"SM",
            "details":[{
                "title":"Total Count",
                "bgClass":"primary",
                "icon":"fa-server",
                "count":"2,000",
                "label":""
            },
            {
                "title":"Deliverd",
                "bgClass":"success",
                "icon":"fa-tasks",
                "count":"1000",
                "label":"50%"
            },
            {
                "title":"In Progress",
                "bgClass":"warning",
                "icon":"fa-filter",
                "count":"200",
                "label":"10%"
            },
            {
                "title":"Failed",
                "bgClass":"danger",
                "icon":"fa-support",
                "count":"200",
                "label":""
            }]
        }]
        },
        {"type":"REGION",
        "sections":[{
            "headTitle":"CANADA",
            "details":[{
                "title":"Total volume",
                "bgClass":"primary",
                "icon":"fa-pencil",
                "count":"10,000",
                "label":""
            }]
        },
        {
            "headTitle":"US",
            "details":[{
                "title":"Total volume",
                "bgClass":"warning",
                "icon":"fa-pencil",
                "count":"10,000",
                "label":""
            }]
        }]
        },
        {"type":"BATCH",
        "sections":[{
            "headTitle":"BATCH DATA",
            "details":[{
                "title":"Total volume",
                "bgClass":"primary",
                "icon":"fa-pencil",
                "count":"10,000",
                "label":""
            }]
        }]
        }
      ]

         this.reports = [
            {"headTitle":"Your outing messages",
            "details":[{
                "title":"Total volume",
                "bgClass":"primary",
                "icon":"fa-server",
                "count":"2,691",
                "label":""
            },
            {
                "title":"Deliverd",
                "bgClass":"success",
                "icon":"fa-tasks",
                "count":"1638",
                "label":"60.87%"
            },
            {
                "title":"In Progress",
                "bgClass":"warning",
                "icon":"fa-filter",
                "count":"124",
                "label":"0.00%"
            },
            {
                "title":"Failed",
                "bgClass":"danger",
                "icon":"fa-support",
                "count":"137",
                "label":""
            }]
        }
    ] 
    for(var i= 0;i<this.reports.length; i++){
        console.log("",this.reports[i]["details"])
        for(var j=0;j< this.reports[i]["details"].length; j++){
            console.log("$",this.reports[i]["details"][j])
            if(this.reports[i]["details"][j]["title"] =="Deliverd"){
                this.doughnutChartData.push(this.reports[i]["details"][j]["count"])
                this.doughnutChartLabels.push(this.reports[i]["details"][j]["title"])
                this.colorsData.push("#28a745")
            }else if(this.reports[i]["details"][j]["title"] =="In Progress"){
                this.doughnutChartData.push(this.reports[i]["details"][j]["count"])
                this.doughnutChartLabels.push(this.reports[i]["details"][j]["title"])
                this.colorsData.push("#ffc107")
            }
            else if(this.reports[i]["details"][j]["title"] =="Failed"){
                this.doughnutChartData.push(this.reports[i]["details"][j]["count"])
                this.doughnutChartLabels.push(this.reports[i]["details"][j]["title"])
                this.colorsData.push("#dc3545")
            }
        }
    }
    this.doughnutChartColors =[{backgroundColor:this.colorsData}]
    
    
   /*      this._dataService.getCustomers()
        .subscribe((data) => {
            if (data) {
                console.log("---",data);
                if(data && data.length > 0){
                    this.reports = data;
                    for(var i= 0;i<this.reports.length; i++){
                        for(var j=0;j<this.reports[i]&& this.reports[i].length; j++){
                            console.log("$",this.reports[i][j])
                        }
                    }
                }else{
                    this.reports = [];
                }
               
            }
        },
        (err: any) => console.log(err));  */ 

       // this.openAll()
       this.activeIds.push("panel-0")
    }

    public closeAlert(alert: any) {
        const index: number = this.alerts.indexOf(alert);
        this.alerts.splice(index, 1);
    }
}
