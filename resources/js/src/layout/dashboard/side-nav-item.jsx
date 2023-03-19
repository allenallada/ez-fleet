import PropTypes from 'prop-types';
import { Box, ButtonBase } from '@mui/material';
import { Link as ReactLink } from 'react-router-dom';

export const SideNavItem = (props) => {
    const { active = false, disabled, external, icon, to, title } = props;

    const linkProps = to ? external ? {
        component: 'a',
        to: to,
        target: '_blank'
    }
    : {
        component: ReactLink,
        to: to
        }
    : {};

    return (
        <li>
            <ButtonBase sx={{ alignItems: 'center', borderRadius: 1, display: 'flex', justifyContent: 'flex-start', pl: '16px',
                pr: '16px', py: '6px', textAlign: 'left', width: '100%', ...(active && {}), '&:hover': { backgroundColor: 'rgba(255, 255, 255, 0.04)' }
                }} {...linkProps}>
                {icon && (
                    <Box component="span" sx={{ alignItems: 'center', color: 'neutral.400', display: 'inline-flex', justifyContent: 'center', mr: 2,
                        ...(active && { color: 'primary.main' })}} >
                        {icon}
                    </Box>
                )}
                <Box
                    component="span" sx={{  color: 'neutral.400', flexGrow: 1, fontFamily: (theme) => theme.typography.fontFamily, fontSize: 14,
                    fontWeight: 600, lineHeight: '24px', whiteSpace: 'nowrap', ...(active && { color: 'common.white' }),
                    ...(disabled && { color: 'neutral.500' })}} >
                    {title}
                </Box>
            </ButtonBase>
        </li>
    );
};

SideNavItem.propTypes = {
    active: PropTypes.bool,
    disabled: PropTypes.bool,
    external: PropTypes.bool,
    icon: PropTypes.node,
    to: PropTypes.string,
    title: PropTypes.string.isRequired
};
