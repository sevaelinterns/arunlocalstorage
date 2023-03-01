import { Routes, RouterModule } from '@angular/router';
import { EditComponent } from './edit';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { PageNotFoundComponent } from './page-not-found.component';
import { RegisterComponent } from './register';
import { StudentAddComponent } from './student/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { AuthGuard } from './_helpers';

const routes: Routes = [
    { path: '', component: StudentAddComponent, canActivate: [AuthGuard] },
    {path:'home',component:HomeComponent,canActivate: [AuthGuard]},
    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },
    {path:'edit',component:EditComponent},
    {path:'student',component:StudentAddComponent,children:[
    {path:'studentlist',component:StudentListComponent, canActivate: [AuthGuard]},
    {path:'studentviwe',component:StudentViewComponent,canActivate: [AuthGuard]},
    ]},
    { path: 'student-add', component: StudentAddComponent },
    { path: 'student/:id',      component: StudentViewComponent },
    {
      path: 'students',
      component: StudentListComponent
    },
    { path: 'student-add/:id', component: StudentAddComponent },
    {
      path: 'students',
      component: StudentListComponent
    },
    { path: '',
      redirectTo: '/students',
      pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const appRoutingModule = RouterModule.forRoot(routes);