import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { RegisterComponent } from './pages/register/register.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { TicketsComponent } from './pages/tickets/tickets.component';
import { AssignedToMeComponent } from './pages/assigned-to-me/assigned-to-me.component';
import { AllTicketsComponent } from './pages/all-tickets/all-tickets.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { ActivitiesByIdComponent } from './pages/activities-by-id/activities-by-id.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CustomersComponent,
    CustomerDetailComponent,
    SidebarComponent,
    RegisterComponent,
    DashboardComponent,
    TicketsComponent,
    AssignedToMeComponent,
    AllTicketsComponent,
    ArchiveComponent,
    ActivitiesByIdComponent,
    NewTicketComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
