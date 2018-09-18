import { RouterModule, Routes } from '@angular/router';
import { VideosComponent } from './videos/videos.component';


const appRoutes: Routes = [
    { path: '', component: VideosComponent },
    // { path:"product-register", component: ProductRegisterComponent },
    // { path:"product-register/:id", component: ProductRegisterComponent },
    // { path:"products", component: ProductListComponent },
    // { path:"users", component: UserListComponent },
    // { path:"user-register", component: UserRegisterComponent },
    // { path:"user-register/:id", component: UserRegisterComponent },

    { path: '**', redirectTo: ''}
];

export const routing = RouterModule.forRoot(appRoutes);