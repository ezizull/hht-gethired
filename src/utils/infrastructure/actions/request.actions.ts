import { Action } from "@/infrastructure/actions";
import { Response } from "@/infrastructure/models/index.model";

export function RequestAction<T extends Object[] | Object | null>(action: string) {
  const loading = action + "_LOADING";
  const success = action + "_SUCCESS";
  const failure = action + "_FAILURE";

  interface LoadingAction extends Action {
    readonly type: typeof loading;
  }

  interface SuccessAction extends Action {
    readonly type: typeof success;
    readonly payload: T;
  }

  interface FailureAction extends Action {
    readonly type: typeof failure;
    readonly payload: null;
  }

  type RequestWrapper = {
    readonly type: typeof loading;
    readonly action: () => LoadingAction;
  };

  type SuccessWrapper = {
    readonly type: typeof success;
    readonly action: (response: T) => SuccessAction;
  };

  type FailureWrapper = {
    readonly type: typeof loading;
    readonly action: (response: null) => FailureAction;
  };

  type ActionWrappers = {
    readonly loading: RequestWrapper;
    readonly success: SuccessWrapper;
    readonly failure: FailureWrapper;
  };

  const RequestAction: ActionWrappers = {
    loading: {
      type: loading,
      action: (): LoadingAction => ({
        type: loading,
      }),
    },
    success: {
      type: success,
      action: (response: T): SuccessAction => ({
        type: success,
        payload: response,
      }),
    },
    failure: {
      type: failure,
      action: (response: null): FailureAction => ({
        type: failure,
        payload: response,
      }),
    },
  };

  return RequestAction;
}