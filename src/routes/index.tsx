import { Routes as ReactRouterRoutes, Route } from 'react-router-dom';
import Start from '@/pages/Start';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<Start />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
