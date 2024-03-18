import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FirstComponentComponent } from './components/first-component/first-component.component';
import { ListRenderComponent } from './components/list-render/list-render.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { ChangeNumberComponent } from './components/change-number/change-number.component';
import { DirectiveComponent } from './components/directive/directive.component';
import { EmitterComponent } from './components/emitter/emitter.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { IfRenderComponent } from './components/if-render/if-render.component';
import { ParentDataComponent } from './components/parent-data/parent-data.component';
import { TwoWayBindingComponent } from './components/two-way-binding/two-way-binding.component';
import { ItemDetailComponent } from './components/item-detail/item-detail.component';

const routes: Routes = [
  {path: '', component: FirstComponentComponent},
  {path: 'list', component: ListRenderComponent},
  {path: 'changenumber', component: ChangeNumberComponent},
  {path: 'directive', component: DirectiveComponent},
  {path: 'emitter', component: EmitterComponent},
  {path: 'eventos', component: EventosComponent},
  {path: 'ifrender', component: IfRenderComponent},
  {path: 'parentdata', component: ParentDataComponent},
  {path: 'pipes', component: PipesComponent},
  {path: 'twowaybinding', component: TwoWayBindingComponent},
  {path: 'list/:id', component: ItemDetailComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
