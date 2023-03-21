import { Layout as DashboardLayout } from '../layout/dashboard/layout';


const Settings = () => {
    return (
        <div>
            Settings
        </div>
    );
}

Settings.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
);

export default Settings;
