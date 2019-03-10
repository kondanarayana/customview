import { Component, OnInit,ViewEncapsulation,ViewChild,Input  } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { Node, Options } from 'ng-material-treetable';
import { jqxTreeGridComponent } from 'jqwidgets-scripts/jqwidgets-ts/angular_jqxtreegrid';
import {TreeNode} from 'primeng/api';

export interface TreeNode {
    data?: any;
    children?: TreeNode[];
    leaf?: boolean;
    expanded?: boolean;
}

@Component({
    selector: 'custom-dashboard',
    templateUrl: './custom-dashboard.component.html',
    styleUrls: ['./custom-dashboard.component.scss'],
    encapsulation: ViewEncapsulation.None
})
export class CustomDashboardComponent implements OnInit {
    constructor() {}
    files: TreeNode[];
    @Input() styleClass: string;

    cols: any[];
    public treeObject ={};
    show =false;
    finalObj =[]

   // TestData =[ { "label": "NOTIFICATION TYPE","data": "Documents Folder", "expandedIcon": "fa fa-folder-open", "collapsedIcon": "fa fa-folder", "children": [ { "label": "EMAIL", "expandedIcon": "fa fa-folder-open", "collapsedIcon": "fa fa-folder" }, { "label": "SMS", "expandedIcon": "fa fa-folder-open", "collapsedIcon": "fa fa-folder" }, { "label": "SM", "expandedIcon": "fa fa-folder-open", "collapsedIcon": "fa fa-folder" } ] } ]
 
  
    alertsList = [
            {"id":1,"name":"ALERT TYPE"},
            {"id":3,"name":'NOTIFICATION TYPE'},
            {"id":4,"name":'REGION'},
            {"id":2,"name":'BATCH PROCESS'}
        ];

    
      customList = [
     
      ];
    
      drop(event: CdkDragDrop<string[]>) {
        if (event.previousContainer === event.container) {
          moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
        } else {
          transferArrayItem(event.previousContainer.data,
                            event.container.data,
                            event.previousIndex,
                            event.currentIndex);
        }
      }

    ngOnInit() {

      }

     public alertsData =[{
        "type": "ALERT TYPE",
        "detais": [{
            "collapsedIcon": "fa fa-folder",
            "children": [{
                    "label": "PASS THROUGH",
                    "data": "Documents Folder",
                    "expandedIcon": "fa fa-folder-open",
                    "collapsedIcon": "fa fa-folder"
                },
                {
                    "label": "OPTIM",
                    "data": "OPRIM ALERT TYPE",
                    "expandedIcon": "fa fa-folder-open",
                    "collapsedIcon": "fa fa-folder"
                }
            ]
    
        }]
    }, {
        "type": "NOTIFICATION TYPE",
        "detais": [{
            "label": "SMS",
            "data": "work Folder",
            "expandedIcon": "fa fa-folder-open",
            "collapsedIcon": "fa fa-folder",
            "children": [{
                    "label": "EMAIl",
                    "data": "EMAIL NOTIFICATION TYPE",
                    "expandedIcon": "fa fa-folder-open",
                    "collapsedIcon": "fa fa-folder"
                },
                {
                    "label": "SMS",
                    "data": "SMS NOTIFICATION TYPE",
                    "expandedIcon": "fa fa-folder-open",
                    "collapsedIcon": "fa fa-folder"
                },
                {
                    "label": "SM",
                    "data": "SM NOTIFICATION TYPE",
                    "expandedIcon": "fa fa-folder-open",
                    "collapsedIcon": "fa fa-folder"
                }
            ]
    
        }]
    
    
    }, {
        "type": "REGION",
        "detais": [{
            "children": [{
                    "label": "US",
                    "data": "US REGION",
                    "expandedIcon": "fa fa-folder-open",
                    "collapsedIcon": "fa fa-folder"
                },
                {
                    "label": "CANADA",
                    "data": "CANADA REGION",
                    "expandedIcon": "fa fa-folder-open",
                    "collapsedIcon": "fa fa-folder"
                }
            ]
    
        }]
    }, {
        "type": "BATCH PROCESS",
    
        "detais": [{
            "children": [{
                    "label": "BATCH",
                    "data": "BATCH",
                    "expandedIcon": "fa fa-folder-open",
                    "collapsedIcon": "fa fa-folder"
                },
                {
                    "label": "PROCESS",
                    "data": "PROCESS",
                    "expandedIcon": "fa fa-folder-open",
                    "collapsedIcon": "fa fa-folder"
                }
            ]
    
        }]
    }]

     findAndAddChild =function(treeStructureObj ,setMatchSet, index?){
         console.log("setMatchSet", setMatchSet)
         var flag = true;
        for(var i =0; i<treeStructureObj.length; i++){
            
            console.log("--",treeStructureObj[i]);
                if(treeStructureObj[i]["children"] !=undefined && flag){
                    flag = false;
                    console.log("children",treeStructureObj[i]["children"])
                    this.findAndAddChild(treeStructureObj[i]["children"],setMatchSet, index);
                } 
            else if(treeStructureObj[i]["children"] ==undefined ){
                for(let temp of setMatchSet){
                    treeStructureObj[i]["children"]=[];
                    console.log("temp", temp);
                    for(let temp2 of temp["detais"]){
                        console.log("temp2", temp2)
                        console.log("----",treeStructureObj[i])
                     if(temp2["children"] && temp2["children"].length){
                      for(let childVal of temp2["children"]){
                          console.log("##########",treeStructureObj[i]["children"])
                          console.log("@@@@@@@@",childVal)
                        //  treeStructureObj[i]["P"] ="1";
                        if(index && index ==3){
                        delete childVal["collapsedIcon"]
                        delete childVal["expandedIcon"]
                        childVal["icon"] ="fa fa fa-circle";
                        }
                        treeStructureObj[i]["children"].push(childVal)
                       }
                      
                         }
                    }
                }
            }  
            } 
    }


    PrepareTeeObj =function(value:any,tree, index){
        console.log("obj", )
        let getMatchSet =[];
        getMatchSet = this.alertsData.filter(item=> {
            if(item.type == value) {
                return true;
            } else 
                return false;
        })
        this.findAndAddChild(this.treeObject["children"],getMatchSet, index);
    }

        nodeSelected =function($event, item){      
            $event.stopPropagation();
        console.log("node selected  ----->", item)
        }

        customize1 =function(){
            let customSelectOrder =""
            this.customList.forEach((name,index) => {
                customSelectOrder =customSelectOrder+name["id"].toString()
            })

        }


        public counter : number = 0;
    customize =function(){ 
        this.show =false;
        this.counter +=1;
        let customSelectOrder ="";
        this.customList.forEach((name,index) => {
            customSelectOrder =customSelectOrder+name["id"].toString();
        })
        console.log("",customSelectOrder);

        
            for(let member in this.treeObject){
                delete this.treeObject[member]
            }

            for(let member in this.finalObj){
            delete this.finalObj[member]
            }

           // this.finalObj =[];
        
           
            this.treeObject =[]
        let customListOrder =[];
       this.customList.forEach(key => {
           var found = false;
            this.alertsData.filter(item=> {
               if(!found && item.type == key.name) {
                customListOrder.push(item);
                   found = true;
                   return true;
               } else 
                   return false;
           })
       })
       this.alertsData = customListOrder;
   for(var j =0;j<this.customList.length; j++){
    //  this.customList.forEach((type, index) => {
        console.log("1---->", this.customList[j]);
        if(this.customList[j]["name"] =="ALERT TYPE" && this.treeObject["label"]==undefined){
         this.treeObject["label"] ="Custom View";
         this.treeObject["expandedIcon"]= "fa fa-folder-open";
         this.treeObject["collapsedIcon"]= "fa fa-folder";
         this.treeObject["styleClass"]= "default"
         this.treeObject["data"]= "Documents Folder";
         this.treeObject["children"] =[{"label":"Pass Through","expandedIcon":"fa fa-folder-open","collapsedIcon":"fa fa-folder"},
                                        {"label":"Optim","expandedIcon":"fa fa-folder-open","collapsedIcon":"fa fa-folder"
                                      }]
         
        }else if(this.customList[j]["name"] =="NOTIFICATION TYPE" && this.treeObject["label"]==undefined){
            this.treeObject["label"] ="Custom View";
            this.treeObject["expandedIcon"]= "fa fa-folder-open";
            this.treeObject["collapsedIcon"]= "fa fa-folder";
            this.treeObject["data"]= "Documents Folder";
            this.treeObject["children"] =[{"label":"EMAIL","expandedIcon":"fa fa-folder-open","collapsedIcon":"fa fa-folder"},
            {"label":"SMS","expandedIcon":"fa fa-folder-open","collapsedIcon":"fa fa-folder"},
            {"label":"SM","expandedIcon":"fa fa-folder-open","collapsedIcon":"fa fa-folder"
          }]
        }else if(this.customList[j]["name"] =="REGION" && this.treeObject["label"]==undefined){
            this.treeObject["label"] ="Custom View";
            this.treeObject["expandedIcon"]= "fa fa-folder-open";
            this.treeObject["collapsedIcon"]= "fa fa-folder";
            this.treeObject["data"]= "Documents Folder";
            this.treeObject["children"] =[{"label":"US","expandedIcon":"fa fa-folder-open","collapsedIcon":"fa fa-folder"},
            {"label":"CANADA","expandedIcon":"fa fa-folder-open","collapsedIcon":"fa fa-folder"
          }]
        } else if(this.customList[j]["name"] =="BATCH PROCESS" && this.treeObject["label"]==undefined){
            this.treeObject["label"] ="Custom View";
            this.treeObject["expandedIcon"]= "fa fa-folder-open";
            this.treeObject["collapsedIcon"]= "fa fa-folder";
            this.treeObject["data"]= "Documents Folder";
            this.treeObject["children"] =[{"label":"Batch","expandedIcon":"fa fa-folder-open","collapsedIcon":"fa fa-folder"},
            {"label":"Process","expandedIcon":"fa fa-folder-open","collapsedIcon":"fa fa-folder"
          }]
        }
        if(this.customList[j]["name"] =="ALERT TYPE" && j!=0 ){
           this.PrepareTeeObj(this.customList[j]["name"],this.treeObject, j);
           }else if(this.customList[j]["name"] =="NOTIFICATION TYPE" && j!=0){
           this.PrepareTeeObj(this.customList[j]["name"], this.treeObject, j);
           }else if(this.customList[j]["name"] =="REGION" && j!=0){
         //  this.PrepareTeeObj(this.customList[j]["name"], this.treeObject, j);
           }else if(this.customList[j]["name"] =="BATCH PROCESS" && j!=0){
            this.PrepareTeeObj(this.customList[j]["name"], this.treeObject, j);
           }
    }
    this.finalObj.push(this.treeObject);
    console.log("$$$$$$$$$$$$$",this.finalObj);
    this.show =true;

    } 
}
