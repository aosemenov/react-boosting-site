/** Errors && Work Box */

export enum IErrorCode {
  EXCEPTION = -2,
  UNKNOWN = -1,
  REQUEST = 1,
  RESPONSE = 2,
  NO_ACCESS = 100,
  BAD_REQUEST_DATA = 101,
  NEED_FORCE = 102,
  OPERATION_ERROR = 103,
  USER_ALREADY_REGISTERED = 104
}

export type IError = {
  code: IErrorCode,
  message?: string,
}

/** Cookies token */

export enum ICookiesToken {
  key = "AT",
}
