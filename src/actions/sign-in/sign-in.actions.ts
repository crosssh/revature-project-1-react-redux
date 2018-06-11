import { signInTypes } from "./sign-in.types";

export const updateError = (errorMessage: string) => (dispatch: any) => {
  dispatch ({
    payload: {
      errorMessage
    },
    type: signInTypes.UPDATE_ERROR,
  });
}

export const updatePassword = (password: string) => (dispatch: any) => {
  dispatch ({
    payload: {
      password
    },
    type: signInTypes.UPDATE_PASSWORD,
  })
}

export const updateSignedIn = (signedIn: boolean) => (dispatch: any) => {
  console.log('here ' + signedIn);
  dispatch ({
    payload: {
      signedIn
    },
    type: signInTypes.UPDATE_SIGNED_IN,
  });
}

export const updateUsername = (username: string) => (dispatch: any) => {
  dispatch ({
    payload: {
      username
    },
    type: signInTypes.UPDATE_USERNAME,
  });
}