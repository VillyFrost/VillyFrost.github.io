import { NgModule } from '@angular/core';
import { RouterModule, Route, Routes } from '@angular/router';

import { PostDashbordComponent } from './post-dashbord/post-dashbord.component';
import { PostDetailComponent } from './post-detail/post-detail.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostService } from './post.service';
import { SharedModule } from '../shared/shared.module';

const routers:Routes =[
  {path: 'blog',component: PostListComponent},
  {path: 'blog/:id',component: PostDetailComponent},
  {path: 'dashbord',component: PostDashbordComponent}
]

@NgModule({
  imports: [
    SharedModule,RouterModule.forChild(routers)
  ],
  declarations: [PostDashbordComponent, PostDetailComponent, PostListComponent],
  providers: [PostService]
})
export class PostsModule { }
