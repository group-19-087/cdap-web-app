import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';
import { UploadLectureComponent } from './layouts/upload-lecture/upload-lecture.component';
import { MyUploadsComponent } from './layouts/my-uploads/my-uploads.component';
import { VideoPlaybackComponent } from './layouts/video-playback/video-playback.component';
import { HomeComponent } from './layouts/home/home.component';
import { ExploreComponent } from './layouts/explore/explore.component';
import { VideoDataResolve } from './services/video-data.resolve';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/home', pathMatch: 'full' },
      {
        path: 'home',
        component: HomeComponent
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
        path: 'myuploads',
        component: MyUploadsComponent
      },
      {
        path: 'videoplayer/:id',
        component: VideoPlaybackComponent,
        resolve: {
          video: VideoDataResolve
        }
      },
      {
        path: 'explore',
        component: ExploreComponent
      }
    ]
  },
  {
    path: '**',
    redirectTo: '/home'
  }
];
