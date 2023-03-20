import * as React from 'react';

import { Layout as DashboardLayout } from '../layout/dashboard/layout';


const Drivers = () => {
    return (
        <div>
            Drivers
        </div>
    );
}

Drivers.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
);

export default Drivers;
