import { Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ContactComponent } from './contact/contact.component';
import { ServicesComponent } from './services/services.component';

export const routes: Routes = [
    { path: '', component: WelcomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'welcome', component: WelcomeComponent },
    { path: 'contact', component: ContactComponent },
    { path: 'services', component: ServicesComponent}
];
