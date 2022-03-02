import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { Interface } from 'ethers/lib/utils';
import { createSelector } from 'reselect';
import { ActionPayload } from './action-payload';

export interface Community {
  name?: string;
  address?: string;
}
export interface SwAuthState {
  showDialog: boolean;
  displayButton: boolean;
  partnerKey?: string;
  partnerAddress?: string;
  communityAddress?: string;
  partnerMode?: boolean;
  loading: boolean;
  // Add type
  community?: any;
  mode: string;
  // SLICE
}

const initialState: SwAuthState = {
  showDialog: false,
  displayButton: true,
  partnerKey: undefined,
  partnerAddress: undefined,
  communityAddress: undefined,
  partnerMode: false,
  loading: false,
  community: undefined,
  mode: 'light',
};

export interface UserData {
  username: string;
  profileImageUrl: string;
}

export interface UserState {
  username: string;
  profileImageUrl: string;
  isLoggedIn: boolean;
}

export const swAuthSlice = createSlice({
  name: 'swAuth',
  initialState,
  reducers: {
    resetUIState: () => initialState,
    showDialog: (state, action: ActionPayload<boolean>) => {
      state.showDialog = action.payload;
    },
    setPartnerKey: (state, action: ActionPayload<string>) => {
      state.partnerKey = action.payload;
    },
    setDisplayButton: (state, action: ActionPayload<boolean>) => {
      state.displayButton = action.payload;
    },
    setPartnerAddress: (state, action: ActionPayload<string>) => {
      state.partnerAddress = action.payload;
    },
    setLoading: (state, action: ActionPayload<boolean>) => {
      state.loading = action.payload;
    },
    setCommunity: (state, action: ActionPayload<any>) => {
      state.community = action.payload;
    },
    setPartnerMode: (state, action: ActionPayload<boolean>) => {
      state.partnerMode = action.payload;
    },
    // SLICE
    resetState(state, action: ActionPayload<void>) {
      state = {
        ...initialState,
        partnerKey: state.partnerKey,
        partnerMode: state.partnerMode,
        partnerAddress: state.partnerAddress,
      };
    },
  },
});

export const { resetState, setDisplayButton, resetUIState, showDialog, setPartnerKey, setLoading, setCommunity, setPartnerMode } =
  swAuthSlice.actions;

export const isOpen = createSelector(
  (state) => state.swAuth.showDialog,
  (isShown) => isShown
);
export const showButton = createSelector(
  (state) => state.swAuth.displayButton,
  (display) => display
);
export const currentPartnerKey = createSelector(
  (state) => state.swAuth.partnerKey,
  (currentKey) => currentKey
);
export const loadingInProgress = createSelector(
  (state) => state.swAuth.loading,
  (isLoading) => isLoading
);
export const currentCommunity = createSelector(
  (state) => state.swAuth.community,
  (comm) => comm
);
export const partnerMode = createSelector(
  (state) => state.swAuth.partnerMode,
  (isPartner) => isPartner
);
export const swData = createSelector(
  (state) => {
    return {
      community: state.swAuth.community,
      partnerMode: state.swAuth.partnerMode,
      partnerKey: state.swAuth.partnerKey,
    };
  },
  (data) => data
);

export default swAuthSlice.reducer;
