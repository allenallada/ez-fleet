import * as React from 'react';

import { Layout as DashboardLayout} from '../layout/dashboard/layout';


const Account = () => {
    return (
        <div>
            Account
        </div>
    );
}

Account.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
);


export default Account;
