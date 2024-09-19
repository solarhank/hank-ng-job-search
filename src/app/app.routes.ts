import { Routes } from '@angular/router';
import { JobBoardComponent } from './job-board/job-board.component';
import { FavoritesBoardComponent } from './favorites-board/favorites-board.component';
import { DetailComponent } from './detail/detail.component';

export const routes: Routes = [
    {path: "", component: JobBoardComponent},
    {path: "favorites", component: FavoritesBoardComponent},
    {path: "detail/:id", component: DetailComponent}
];