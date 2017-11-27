// @flow
import React from 'react';
import { Search as SearchIcon } from 'emerald-js/lib/ui/icons';
import TextField from '../../../../elements/Form/TextField';
import Filter from './filter';

import classes from './header.scss';

const Header = (props: any) => {
  return (
    <div className={ classes.headerContainer }>
      <div className={ classes.headerMain }>
        <div className={ classes.headerTitle }>History</div>
        <div className={ classes.filter }><Filter /></div>
      </div>
      <div className={ classes.search }>
        <TextField
          rightIcon={ <SearchIcon /> }
          style={{ maxHeight: '40px' }}
          hintText="Search for amount or hash"
          underlineShow={ false }
        />
      </div>
    </div>
  );
};

export default Header;
