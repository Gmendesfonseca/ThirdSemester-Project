import { Menu, MenuItem, PopoverOrigin, SxProps, Theme } from '@mui/material';
import { FC, PropsWithChildren, ReactNode, useState } from 'react';

type Args = {
  openMenu: (ev: any) => void;
};

type InMenuProps = {
  renderAnchor: (args: Args) => ReactNode;
  anchorOrigin?: PopoverOrigin | undefined;
  transformOrigin?: PopoverOrigin | undefined;
  sx?: SxProps<Theme>;
};

export const InItem = MenuItem;

const InMenu: FC<PropsWithChildren<InMenuProps>> = ({
  renderAnchor,
  anchorOrigin,
  transformOrigin,
  children,
  sx,
}) => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const showMenu = Boolean(anchorEl);

  const openMenu = (ev: any) => setAnchorEl(ev?.currentTarget);
  const closeMenu = () => setAnchorEl(null);

  return (
    <>
      {renderAnchor({ openMenu })}
      <Menu
        anchorEl={anchorEl}
        open={showMenu}
        onClose={closeMenu}
        anchorOrigin={anchorOrigin}
        transformOrigin={transformOrigin}
        sx={sx}
      >
        {children}
      </Menu>
    </>
  );
};

export default InMenu;
