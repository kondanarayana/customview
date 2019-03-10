import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import {MatExpansionModule} from '@angular/material/expansion';
import { NgbAccordionModule} from '@ng-bootstrap/ng-bootstrap';
import {TreeTableModule} from 'primeng/treetable';
import {TreeModule} from 'primeng/tree';
import { CustomDashboardRoutingModule } from './custom-dashboard-routing.module';
import { CustomDashboardComponent } from './custom-dashboard.component';
import { StatModule } from '../../shared';


@NgModule({
    imports: [CommonModule,TreeTableModule,TreeModule, CustomDashboardRoutingModule,DragDropModule,MatExpansionModule,NgbAccordionModule,StatModule],
    declarations: [CustomDashboardComponent]
})
export class CustomDashboardModule {}
