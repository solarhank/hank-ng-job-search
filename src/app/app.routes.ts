import { Routes } from '@angular/router';
import { JobBoardComponent } from './component/job-board/job-board.component';
import { FavoritesBoardComponent } from './component/favorites-board/favorites-board.component';
import { DetailComponent } from './component/detail/detail.component';

export const routes: Routes = [
    {path: "", component: JobBoardComponent},
    {path: "favorites", component: FavoritesBoardComponent},
    {path: "detail/:id", component: DetailComponent}
];