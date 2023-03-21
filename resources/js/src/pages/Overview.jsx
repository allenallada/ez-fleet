import { Layout as DashboardLayout} from '../layout/dashboard/layout';

const Overview = () => {
    return (
        <div>
            Overview
        </div>
    );
}

Overview.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
);

export default Overview;
