import { Typography } from '@material-ui/core';
import * as React from 'react';
import { Link } from 'react-router-dom';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';

const backToHome: React.FunctionComponent = () => (
  <div className={'mb-3 mt-1'}>
    <Link to={'/'}>
      <Typography variant={'body1'}>
        <ChevronLeftIcon className={'mr-1'} />
        {'Volver al inicio'}
      </Typography>
    </Link>
  </div>
);

export default backToHome;
