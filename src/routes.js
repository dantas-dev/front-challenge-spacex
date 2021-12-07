import Missions from '@/pages/Missions';
import Mission from '@/pages/Mission';

const routes = [
  {path: '/', name: 'missions', component: Missions},
  {path: '/:id', name: 'mission', component: Mission},
];

export default routes;
