import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Route1Component } from './routes/route1/route1.component';
import { Route2Component } from './routes/route2/route2.component';
import { RoutesComponent } from './routes/routes.component';


const routes: Routes = [  
    {path: "route1", component: Route1Component},
    {path: "route2", component: Route2Component},
    {path: 'home',component: RoutesComponent, children:[
        {path: "route1", component: Route1Component},
        {path: "route2", component: Route1Component},       
      ] 
    }, 
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
