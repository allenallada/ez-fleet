import ChartBarIcon from '@heroicons/react/24/solid/ChartBarIcon';
import CogIcon from '@heroicons/react/24/solid/CogIcon';
import UserIcon from '@heroicons/react/24/solid/UserIcon';
import UserGroupIcon from '@heroicons/react/24/solid/UserGroupIcon';
import TruckIcon from '@heroicons/react/24/solid/TruckIcon';
import { SvgIcon } from '@mui/material';

export const items = [
    {
        title: 'Overview',
        to: '/overview',
        icon: (
            <SvgIcon fontSize="small">
                <ChartBarIcon />
            </SvgIcon>
        ),
        sub : []
    },
    {
        title: 'Vehicles',
        to: '/vehicles',
        icon: (
            <SvgIcon fontSize="small">
                <TruckIcon />
            </SvgIcon>
        ),
        sub : [
            '/add-vehicle'
        ]
    },
    {
        title: 'Drivers',
        to: '/drivers',
        icon: (
            <SvgIcon fontSize="small">
                <UserGroupIcon />
            </SvgIcon>
        ),
        sub : []
    },
    {
        title: 'Account',
        to: '/account',
        icon: (
            <SvgIcon fontSize="small">
                <UserIcon />
            </SvgIcon>
        ),
        sub : []
    },
    {
        title: 'Settings',
        to: '/settings',
        icon: (
            <SvgIcon fontSize="small">
                <CogIcon />
            </SvgIcon>
        ),
        sub : []
    }
];
