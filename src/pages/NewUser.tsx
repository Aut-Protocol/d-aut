import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Button, Typography } from '@mui/material';
import { useSelector } from 'react-redux';
import { ReactComponent as Metamask } from '../assets/metamask.svg';
import { ReactComponent as WalletConnect } from '../assets/wallet-connect.svg';
import AutLogo from '../components/AutLogo';
import { AutButton, ButtonIcon } from '../components/AutButton';
import { useAppDispatch } from '../store/store.model';
import { EnableAndChangeNetwork } from '../services/ProviderFactory/web3.network';
import { AutPageBox } from '../components/AutPageBox';
import { checkIfAutIdExists } from '../services/web3/api';
import { autState } from '../store/aut.reducer';
import { AutHeader } from '../components/AutHeader';
import { ErrorTypes } from '../types/error-types';
import { InternalErrorTypes } from '../utils/error-parser';

const NewUser: React.FunctionComponent = (props) => {
  const dispatch = useAppDispatch();
  const [metamaskSelected, setMetamaskSelected] = useState(false);
  const coreState = useSelector(autState);
  const history = useHistory();

  useEffect(() => {
    // const fetchData = async () => {};
    // fetchData();
  }, []);

  const handleInjectFromMetamaskClick = async () => {
    const hasAutId = await dispatch(checkIfAutIdExists(null));
    if (hasAutId.meta.requestStatus !== 'rejected') {
      if (!hasAutId.payload) {
        history.push('userdetails');
      } else {
        history.push('role');
      }
    }
  };

  return (
    <AutPageBox>
      <AutHeader
        logoId="new-user-logo"
        title="WELCOME"
        subtitle={
          <>
            First, import your wallet <br /> & claim your Role in <span style={{ textDecoration: 'underline' }}>DAO Name!</span>
          </>
        }
      />
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        <AutButton
          startIcon={
            <ButtonIcon>
              <Metamask />
            </ButtonIcon>
          }
          sx={{ mt: '29px' }}
          onClick={handleInjectFromMetamaskClick}
        >
          Inject from Metamask
        </AutButton>
        <AutButton
          startIcon={
            <ButtonIcon>
              <WalletConnect />
            </ButtonIcon>
          }
          disabled
          sx={{ mt: '30px' }}
        >
          Create Social Account
        </AutButton>
      </Box>
    </AutPageBox>
  );
};

export default NewUser;
