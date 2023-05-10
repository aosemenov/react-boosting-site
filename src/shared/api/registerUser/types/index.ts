export type IUserRegister = {
  email?: string,
  password: string,
  nickname: string,
  name?: string,
  first_name?: string,
  last_name?: string,
  telegram_link?: string,
  vk_link?: string,
}

export type IUserRegisterResponse = {

}

export type IUserRegisterRequest = IUserRegister