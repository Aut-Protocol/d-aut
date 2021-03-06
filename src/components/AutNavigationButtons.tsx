import { Button, ButtonProps } from '@mui/material';
import { styled } from '@mui/material/styles';
import { Box } from '@mui/system';
import { useHistory } from 'react-router-dom';
import { pxToRem } from '../services/web3/utils';
import { ReactComponent as BackIcon } from '../assets/back-icon.svg';
import { ReactComponent as CrossIcon } from '../assets/cross.svg';
import { useAppDispatch } from '../store/store.model';
import { showDialog } from '../store/aut.reducer';

export const StyledButton = styled(Button)(({ theme }) => ({
  '&.MuiButton-root': {
    height: '20px',
    textTransform: 'none',
    color: 'white',
    letterSpacing: '3px',
    fontSize: pxToRem(14),
    '&.Mui-disabled': {
      color: 'white',
      opacity: '.3',
    },
  },
}));

export const StyledCrossButton = styled(Button)(({ theme }) => ({
  '&.MuiButton-root': {
    height: '20px',
    textTransform: 'none',
    color: 'white',
    letterSpacing: '3px',
    fontSize: pxToRem(14),
    '&.Mui-disabled': {
      color: 'white',
      opacity: '.3',
    },
  },
}));

StyledButton.defaultProps = {
  startIcon: <BackIcon />,
};

export const AutNavigationButtons = ({ hideBack = false, hideClose = false }) => {
  const history = useHistory();
  const dispatch = useAppDispatch();

  const handleClick = () => {
    history.goBack();
  };

  const handleClose = () => {
    dispatch(showDialog(false));
  };
  return (
    <Box
      sx={{
        height: '40px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: !hideBack && !hideClose ? 'space-between' : hideBack && !hideClose ? 'flex-end' : 'flex-start',
        padding: '0 20px',
        width: 'calc(100% - 40px)',
      }}
    >
      <StyledButton sx={{ display: hideBack ? 'none' : '' }} onClick={() => handleClick()}>
        Back
      </StyledButton>
      <StyledCrossButton sx={{ display: hideClose ? 'none' : '' }} onClick={() => handleClose()}>
        <CrossIcon />
      </StyledCrossButton>
    </Box>
  );
};

export const ButtonIcon = styled(Box)(() => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '22px',
  height: '22px',
}));
