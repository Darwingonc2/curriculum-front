import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', redirectTo: '', pathMatch: 'full'},
    {path: '', loadChildren: () => import('./components/pages/pages-routing.module').then(m => m.PagesRoutingModule)},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule {}
