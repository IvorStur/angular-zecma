import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // CLI imports router
import { HelloComponent } from './hello.component';
import { OneComponent } from './one/one.component';
import { ThreeComponent } from './three/three.component';
import { TwoComponent } from './two/two.component';

//const routes: Routes = []; // sets up routes constant where you define your routes
const routes: Routes = [
  {
    path: 'one',
    component: OneComponent,
    children: [
      {
        path: 'childa', // child route path
        component: HelloComponent, // child route component that the router renders
      },
      // { path: 'childa/:id', component: TwoComponent },
      {
        path: 'childb',
        component: TwoComponent, // another child route component that the router renders
      },
    ],
  },
  { path: 'two', component: TwoComponent },
  { path: 'two/:id', component: TwoComponent },
  { path: 'three', component: ThreeComponent },
  // { path: 'three/:id', component: ThreeComponent },
  { path: '', redirectTo: '/three', pathMatch: 'full' }, // redirect to `one`
  { path: '**', component: HelloComponent },
];
// configures NgModule imports and exports
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
