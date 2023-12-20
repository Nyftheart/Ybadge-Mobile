import Layout from '../layout'
import * as React from 'react'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import IconButton from '@mui/material/IconButton'
import Link from '@mui/material/Link'
import InputAdornment from '@mui/material/InputAdornment'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import VisibilityOutlined from '@mui/icons-material/VisibilityOutlined'
import VisibilityOffOutlined from '@mui/icons-material/VisibilityOffOutlined'
import * as Yup from 'yup'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

export default function Login() {
  const [showPassword, setShowPassword] = React.useState(false)

  const handleClickShowPassword = () => setShowPassword((show) => !show)

  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault()
  }

  // form validation rules
  const validationSchema = Yup.object().shape({
    email: Yup.string()
      .required("L'Email est requis")
      .email('Entrer un email ynov')
      .matches(/^[A-Za-z0-9._%+-]+@ynov.com$/, 'Entrer un email ynov'),
    password: Yup.string()
      .required('Le mot de passe est requis')
      .min(6, 'Minimum 6 caractères')
      .max(40, 'Password must not exceed 40 characters'),
  })

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  })

  const onSubmit = (data) => {
    console.log(JSON.stringify(data, null, 2))
  }

  return (
    <Layout>
      <form className="w-full">
        <div className="form-group">
          <TextField
            fullWidth
            id="email"
            label="Adresse mail (Ynov)"
            variant="standard"
            margin="dense"
            className="text-sm"
            helperText={errors.email?.message}
            error={errors.email ? true : false}
            {...register('email')}
          />
        </div>
        <div className="form-group">
          <TextField
            fullWidth
            autoComplete="on"
            id="standard-adornment-password"
            className="mt-3 text-sm"
            label="Password"
            type={showPassword ? 'text' : 'password'}
            variant="standard"
            margin="dense"
            helperText={errors.password?.message}
            error={errors.password ? true : false}
            {...register('password')}
            InputProps={{
              endAdornment: (
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
              ),
            }}
          />
        </div>
        <div className="flex flex-row justify-between items-center mt-[-10px]">
          <FormControlLabel
            control={<Checkbox size="small" />}
            className="text-sm form-control"
            value={true}
            label={<span className="text-xs">Se souvenir de moi</span>}
          />

          <Link href="#" underline="always" className="text-xs font-light">
            Mot de passe oublié?
          </Link>
        </div>
        <div className="mt-10 flex flex-col mx-auto items-center w-min">
          <Button
            type="submit"
            className="rounded-full px-14 font-bold"
            variant="outlined"
            onClick={handleSubmit(onSubmit)}
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
      </form>
    </Layout>
  )
}
