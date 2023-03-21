import { Layout as DashboardLayout } from '../layout/dashboard/layout';


const Vehicles = () => {
    return (
        <div>
            Vehicles
        </div>
    );
}

Vehicles.getLayout = (page) => (
    <DashboardLayout>
      {page}
    </DashboardLayout>
);

export default Vehicles;
