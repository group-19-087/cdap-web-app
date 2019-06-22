import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { UploadLectureComponent } from './layouts/upload-lecture/upload-lecture.component';
import { MyUploadsComponent } from './layouts/my-uploads/my-uploads.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/starter', pathMatch: 'full' },
      {
        path: 'starter',
        loadChildren: './starter/starter.module#StarterModule'
      },
      {
        path: 'component',
        loadChildren: './component/component.module#ComponentsModule'
      },
      {
        path: 'upload',
        component: UploadLectureComponent,
        data: {
          title: 'Upload Lecture'
        }
      },
      {
        path: 'myupload',
        component: MyUploadsComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
