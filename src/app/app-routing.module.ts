import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { ContentComponent } from './features/content/content.component';

const appRoutes: Routes = [
  { path: '', component: ContentComponent },
  { path: 'contact', loadChildren: './features/contact/contact.module#ContactModule' },
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule {}
