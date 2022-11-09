import { StoreProvider } from 'app/providers/StoreProvider/ui/StoreProvider';
import { createReduxStore } from 'app/providers/StoreProvider/config/store';
import type { StateSchema, ReduxStoreWitnManager, ThunkExtraArg } from 'app/providers/StoreProvider/config/StateSchema';
import type { AppDispatch } from 'app/providers/StoreProvider/config/store';

export {
    StoreProvider,
    createReduxStore,
    StateSchema,
    ReduxStoreWitnManager,
    AppDispatch,
    ThunkExtraArg,
};
