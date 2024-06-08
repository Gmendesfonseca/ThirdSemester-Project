import React, { FC, PropsWithChildren } from 'react';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

type AnchorProps = {
  to: string;
};

const Anchor: FC<PropsWithChildren<AnchorProps>> = ({ to, children }) => {
  return (
    <NavLink to={to} style={{ textDecoration: 'none' }}>
      <Link variant="body2">{children}</Link>
    </NavLink>
  );
};
export default Anchor;
