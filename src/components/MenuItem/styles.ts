import styled from 'styled-components';
import { MenuItem } from '@material-ui/core'

export const Container = styled(MenuItem)`
  font-size: 14px !important;
  color: #ACACAC !important;
  font-weight: 500 !important;
  padding: 10px 32px !important;
  letter-spacing: 0.2px !important;
  
  &:hover{
    color: #ffffff !important;
  }
`;

/*
* <li class="MuiButtonBase-root MuiListItem-root MuiMenuItem-root sc-AxiKw kdiOGA MuiMenuItem-gutters MuiListItem-gutters MuiListItem-button" tabindex="-1" role="menuitem" aria-disabled="false">Go to Song Radio<span class="MuiTouchRipple-root"></span></li>
*
* */
