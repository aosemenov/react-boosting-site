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
  message: string | undefined,
  messages: Record<string, string> | undefined
}

export type IUser = {
  "id": number,
  "role_id"?: number,
  "name": string,
  "email": string,
  "avatar"?: string,
  "email_verified_at"?: string | null,
  "settings"?: {
    "locale": string
  },
  "created_at"?: string,
  "updated_at"?: string,
  "active"?: number,
  "nickname": string,
  "first_name"?: string | null,
  "last_name"?: string | null,
  "telegram_link"?: string | null,
  "telegram_id"?: string | null,
  "vk_link"?: string | null,
}

/** Cookies token */

export enum ICookiesToken {
  key = "token",
}
