import Layout from '../layout'
import * as React from 'react'
import Link from '@mui/material/Link'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined'

export default function Register() {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }
  return (
    <Layout>
      <div>
        <TextField
          fullWidth
          id="Fistname"
          label="Nom"
          variant="standard"
          className="text-sm"
        />
        <TextField
          fullWidth
          id="lastname"
          label="Prénom"
          variant="standard"
          className="text-sm mt-3"
        />
        <TextField
          fullWidth
          id="email"
          label="Adresse mail (Ynov)"
          variant="standard"
          className="text-sm mt-3"
        />

        <FormControl
          fullWidth
          variant="standard"
          margin="normal"
          className="mt-3 text-sm"
        >
          <InputLabel htmlFor="standard-adornment-password">
            Password
          </InputLabel>
          <Input
            id="standard-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                >
                  {showPassword ? (
                    <VisibilityOffOutlined />
                  ) : (
                    <VisibilityOutlined />
                  )}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <div className="mt-10 flex flex-col mx-auto items-center w-min">
          <Button
            className="rounded-full px-14 font-bold"
            variant="outlined"
            href="#outlined-buttons"
          >
            Inscription
          </Button>
          <Link
            href="/auth/register"
            underline="always"
            className="text-xs font-light my-2"
          >
            Pas encore inscrit?
          </Link>
        </div>
      </div>
    </Layout>
  )
}
