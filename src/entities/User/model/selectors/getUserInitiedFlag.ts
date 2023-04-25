import { StateSchema } from 'app/providers/StoreProvider';

export const getUserInitiedFlag = (state: StateSchema) => state.user._inited;
