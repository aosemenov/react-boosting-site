import React, { FC, useCallback } from 'react'
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { CustomTextField } from '@shared/ui/components/CustomTextField'
import { paths } from '@app/paths/paths'
import { IUserAuthorization } from '@shared/api/authUser/types'
import { useController, useForm } from 'react-hook-form'
import { fetchAuthUser } from '@shared/store/authUser'
import { useAppDispatch } from '@shared/hooks/store'

export const AuthForm: FC<{}> = () => {
  const dispatch = useAppDispatch()

  const { handleSubmit, control } = useForm<IUserAuthorization>({
    mode: 'onSubmit',
    reValidateMode: 'onSubmit',
    defaultValues: {
      email: '',
      password: '',
    },
  })

  const { field: passwordProps } = useController({ name: "password", control })
  const { field: emailProps } = useController({ name: "email", control })

  const onSubmit = useCallback((formData: IUserAuthorization) => {
    dispatch(fetchAuthUser(formData))
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
                Login
              </Typography>
              <Typography
                color="text.secondary"
                variant="body2"
              >
                Don't have an account?
                &nbsp;
                <Link
                  component={NavLink}
                  to={paths.clientArea.dashboard.register}
                  underline="hover"
                  variant="subtitle2"
                >
                  Register
                </Link>
              </Typography>
            </Stack>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Stack spacing={3}>
                <CustomTextField
                  fullWidth
                  required
                  label="Email"
                  name="email"
                  variant="outlined"
                  InputProps={emailProps}
                />
                <CustomTextField
                  fullWidth
                  required
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
                  InputProps={passwordProps}
                />
              </Stack>
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
