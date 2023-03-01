import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

// used to create fake backend
import { fakeBackendProvider } from './_helpers';

import { appRoutingModule } from './app.routing';
import { JwtInterceptor, ErrorInterceptor } from './_helpers';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AlertComponent } from './_components';
import { EditComponent } from './edit/edit.component';
import { RouterModule, Routes } from '@angular/router';

import { PageNotFoundComponent } from './page-not-found.component';
import { StudentAddComponent } from './student/student-add.component';
import { StudentListComponent } from './student/student-list/student-list.component';
import { StudentViewComponent } from './student/student-view/student-view.component';
import { StudentService } from './_services/student.service';


const appRoutes: Routes = [
    { path: 'student-add', component: StudentAddComponent },
    { path: 'student/:id', component: StudentViewComponent },
    {
        path: 'students',
        component: StudentListComponent
    },
    { path: 'student-add/:id', component: StudentAddComponent },
    {
        path: 'students',
        component: StudentListComponent
    },
    {
        path: '',
        redirectTo: '/students',
        pathMatch: 'full'
    },
    { path: '**', component: PageNotFoundComponent }
];




@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        HttpClientModule,
        appRoutingModule,
    ],
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        RegisterComponent,
        AlertComponent,
        EditComponent,
        AppComponent, StudentAddComponent, StudentViewComponent, StudentListComponent, PageNotFoundComponent,],
    providers: [StudentService, { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider],
    bootstrap: [AppComponent]

})
export class AppModule { };