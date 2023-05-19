import React, { FC, useCallback } from 'react'
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { CustomTextField } from '@shared/ui/components/CustomTextField'
import { paths } from '@app/paths/paths'
import { useAppDispatch, useAppSelector } from '@shared/hooks/store'
import { useController, useForm } from 'react-hook-form'
import { fetchRegisterUser } from '@shared/store/authUser/thunks/fetchRegisterUser'
import { IUserRegister } from '@shared/api/authUser/types'

export const RegisterForm: FC<{}> = () => {
  const dispatch = useAppDispatch()
  const { error } = useAppSelector(state => state.authUserStore)

  const { handleSubmit, control } = useForm<IUserRegister>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
  })

  const { field: passwordProps } = useController({ name: 'password', control })
  const { field: emailProps } = useController({ name: 'email', control })
  const { field: nicknameProps } = useController({ name: 'nickname', control })
  const { field: nameProps } = useController({ name: 'name', control })
  const { field: firstNameProps } = useController({ name: 'first_name', control })
  const { field: lastNameProps } = useController({ name: 'last_name', control })
  const { field: telegramLinkProps } = useController({ name: 'telegram_link', control })
  const { field: vkLinkProps } = useController({ name: 'vk_link', control })

  const onSubmit = useCallback((formData: IUserRegister) => {
    dispatch(fetchRegisterUser(formData))
  }, [])

  return (
    <>
      <Box
        sx={{
          flex: '1 1 auto',
          alignItems: 'center',
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            px: 3,
            py: '50px',
            width: '100%',
          }}
        >
          <div>
            <Stack
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography variant="h2">
                Register
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Already have an account?
                &nbsp;
                <Link
                  component={NavLink}
                  to={paths.clientArea.dashboard.auth}
                  underline="hover"
                  variant="subtitle2"
                >
                  Log in
                </Link>
              </Typography>
            </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                <CustomTextField
                  fullWidth
                  required
                  label="Nickname"
                  name="nickname"
                  variant="outlined"
                  InputProps={nicknameProps}
                  error={error && !!error.messages?.nickname}
                  helperText={error && error.messages?.nickname}
                />
                <CustomTextField
                  fullWidth
                  label="Name"
                  name="name"
                  variant="outlined"
                  InputProps={nameProps}
                />
                <CustomTextField
                  fullWidth
                  label="First Name"
                  name="first_name"
                  variant="outlined"
                  InputProps={firstNameProps}
                />
                <CustomTextField
                  fullWidth
                  label="Last Name"
                  name="last_name"
                  variant="outlined"
                  InputProps={lastNameProps}
                />
                <CustomTextField
                  fullWidth
                  label="Telegram"
                  name="telegram_link"
                  variant="outlined"
                  InputProps={telegramLinkProps}
                />
                <CustomTextField
                  fullWidth
                  label="Vk"
                  name="vk_link"
                  variant="outlined"
                  InputProps={vkLinkProps}
                />
                <CustomTextField
                  fullWidth
                  required
                  label="Email Address"
                  name="email"
                  type="email"
                  variant="outlined"
                  InputProps={emailProps}
                  error={error &&  !!error.messages?.email}
                  helperText={error && error.messages?.email}
                />
                <CustomTextField
                  fullWidth
                  required
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  InputProps={passwordProps}
                  error={error &&  !!error.messages?.password}
                  helperText={error && error.messages?.password}
                />
              </Stack>
              {error && error.message &&
                  <Box sx={{ mt: '12px' }}>
                      <Typography variant={'body2'} color={'error.main'}>
                        {error.message}
                      </Typography>
                  </Box>
              }
              <Button
                fullWidth
                size="large"
                sx={{ mt: 3 }}
                type="submit"
                variant="outlined"
              >
                <Typography>Continue</Typography>
              </Button>
            </form>
          </div>
        </Box>
      </Box>
    </>
  )
}
