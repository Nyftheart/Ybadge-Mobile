import Layout from '../layout'
import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Input from '@mui/material/Input'
import Link from '@mui/material/Link'
import InputLabel from '@mui/material/InputLabel'
import InputAdornment from '@mui/material/InputAdornment'
import FormControl from '@mui/material/FormControl'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined'

export default function Login() {
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
          id="email"
          label="Adresse mail (Ynov)"
          variant="standard"
          margin="dense"
          className="text-sm"
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
        <div className="flex flex-row justify-between items-center mt-[-10px]">
          <FormControlLabel
            control={<Checkbox size="small" />}
            label={<span className="text-xs">Se souvenir de moi</span>}
          />

          <Link href="#" underline="always" className="text-xs font-light">
            Mot de passe oublié?
          </Link>
        </div>
        <div className="mt-10 flex flex-col mx-auto items-center w-min">
          <Button
            className="rounded-full px-14 font-bold"
            variant="outlined"
            href="#outlined-buttons"
          >
            Connexion
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
