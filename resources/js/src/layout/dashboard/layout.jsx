import { useCallback, useState } from 'react';
import { styled } from '@mui/material/styles';
import { SideNav } from './side-nav';
import { TopNav } from './top-nav';
import { ToastAlert } from '../../components/toast-alert';
import { useSelector } from 'react-redux';

const SIDE_NAV_WIDTH = 280;

const LayoutRoot = styled('div')(({ theme }) => ({
        display: 'flex',
        flex: '1 1 auto',
        maxWidth: '100%',
        [theme.breakpoints.up('lg')]: {
            paddingLeft: SIDE_NAV_WIDTH
        }
    })
);

const LayoutContainer = styled('div')({
    display: 'flex',
    flex: '1 1 auto',
    flexDirection: 'column',
    width: '100%'
});

export const Layout = (props) => {
    const { children } = props;
    // const pathname = usePathname();
    const [openNav, setOpenNav] = useState(false);
    const {toast} = useSelector(state => {
        return {
            toast : state.admin.toast
        }
    })


    const handlePathnameChange = useCallback(
    () => {
        if (openNav) {
            setOpenNav(false);
        }
    },
    [openNav]
    );
    return (
        <>
            <ToastAlert toast={toast} />
            <TopNav onNavOpen={() => setOpenNav(true)} />
                <SideNav
                    onClose={() => setOpenNav(false)}
                    open={openNav}
                />
            <LayoutRoot>
                <LayoutContainer>
                    {children}
                </LayoutContainer>
            </LayoutRoot>
        </>
    );
};
