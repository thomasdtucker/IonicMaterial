import { Routes, RouterModule } from '@angular/router';
import { HomePage
} from '../pages';


const routes: Routes = [
    {
        path: '',
        component: HomePage
    },
];

export const routing = RouterModule.forRoot( routes, { useHash: true } );
