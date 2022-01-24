import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClassComponent } from './class.component';
import { CreateClassComponent } from './create-class/create-class.component';
import { EditClassComponent } from './edit-class/edit-class.component';

const routes: Routes = [
  { path: '', component: ClassComponent },
  { path: 'create', component: CreateClassComponent },
  { path: 'edit', component: EditClassComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ClassRoutingModule { }
