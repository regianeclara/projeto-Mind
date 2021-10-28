import React from 'react';

import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';

export default function Copyright() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {'Copyright © '}
        <Link color="inherit" target='_blank' href="https://mindconsulting.com.br/">
          Teste Mind
        </Link>{' '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }