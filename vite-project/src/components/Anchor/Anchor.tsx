import React, { FC, PropsWithChildren } from 'react';
import Link from '@mui/material/Link';
import { NavLink } from 'react-router-dom';

type AnchorProps = {
  id?: string;
  to: string;
};

const Anchor: FC<PropsWithChildren<AnchorProps>> = ({ id, to, children }) => {
  return (
    <NavLink to={to} style={{ textDecoration: 'none' }}>
      <Link id={id} variant="body2">
        {children}
      </Link>
    </NavLink>
  );
};
export default Anchor;
