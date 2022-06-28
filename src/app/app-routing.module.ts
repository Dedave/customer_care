import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesByIdComponent } from './pages/activities-by-id/activities-by-id.component';
import { AllTicketsComponent } from './pages/all-tickets/all-tickets.component';
import { ArchiveComponent } from './pages/archive/archive.component';
import { AssignedToMeComponent } from './pages/assigned-to-me/assigned-to-me.component';
import { CustomerDetailComponent } from './pages/customer-detail/customer-detail.component';
import { CustomersComponent } from './pages/customers/customers.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { LoginComponent } from './pages/login/login.component';
import { NewTicketComponent } from './pages/new-ticket/new-ticket.component';
import { RegisterComponent } from './pages/register/register.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { TicketsComponent } from './pages/tickets/tickets.component';

const routes: Routes = [
{path:'', component:LoginComponent},
{path:'sidebar', component: SidebarComponent},
{path:'customers', component: CustomersComponent},
{path:'customer-detail', component: CustomerDetailComponent},
{path:'register', component:RegisterComponent},
{path:'dashboard', component:DashboardComponent},
{path:'tickets', component:TicketsComponent},
{path:'all-tickets', component:AllTicketsComponent},
{path:'assigned-to-me', component:AssignedToMeComponent},
{path:'archive', component:ArchiveComponent},
{path:'activities-by-id', component:ActivitiesByIdComponent},
{path:'new-ticket', component:NewTicketComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
