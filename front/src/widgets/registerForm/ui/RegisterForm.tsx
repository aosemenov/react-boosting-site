import React, { FC } from 'react'
import { Box, Button, Link, Stack, TextField, Typography } from '@mui/material'
import { NavLink } from 'react-router-dom'
import { CustomTextField } from '@shared/ui/components/CustomTextField'
import { paths } from '@app/paths/paths'

export const RegisterForm: FC<{}> = () => {
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
            <form>
              <Stack spacing={3}>
                <CustomTextField
                  fullWidth
                  required
                  label="Login"
                  name="login"
                  variant="outlined"
                />
                <CustomTextField
                  fullWidth
                  label="First name"
                  name="firstName"
                  variant="outlined"
                />
                <CustomTextField
                  fullWidth
                  label="Middle Name"
                  name="middleName"
                  variant="outlined"
                />
                <CustomTextField
                  fullWidth
                  label="Last Name"
                  name="lastName"
                  variant="outlined"
                />
                <CustomTextField
                  fullWidth
                  required
                  label="Telegram"
                  name="telegram"
                  variant="outlined"
                />
                <CustomTextField
                  fullWidth
                  label="Vk"
                  name="Vk"
                  variant="outlined"
                />
                <CustomTextField
                  fullWidth
                  label="Email Address"
                  name="email"
                  type="email"
                  variant="outlined"
                />
                <CustomTextField
                  fullWidth
                  required
                  label="Password"
                  name="password"
                  type="password"
                  variant="outlined"
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
