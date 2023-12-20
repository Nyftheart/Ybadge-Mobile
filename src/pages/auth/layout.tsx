import * as React from 'react'
import Image from 'next/image'
import { useRouter } from 'next/router'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [value, setValue] = React.useState('login')
  const { pathname } = useRouter()
  React.useEffect(() => {
    setValue(pathname.split('/')[2])
  }, [pathname])

  const routes = [
    { label: 'Se connecter', value: 'login' },
    { label: 'Inscrivez-vous', value: 'register' },
  ]

  const tabStyle = {
    default_tab: {
      opacity: 0.3,
    },
    active_tab: {
      opacity: 1,
    },
  }
  const router = useRouter()

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue)
    router.push(`/auth/${newValue}`)
  }

  return (
    <section>
      <div className="pt-5 min-h-screen">
        <Image
          src="/assets/img/Logo/Logo_white_shadow.svg"
          width={124}
          height={128}
          alt="logo"
          className="m-auto pt-[60px] pb-[70px]"
        />
        <div className="flex flex-col justify-center">
          <div className="justify-around flex mb-4">
            <div className="w-full">
              <Tabs
                centered
                variant="fullWidth"
                value={value}
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    backgroundColor: '#ffffff',
                  },
                }}
              >
                {routes.map((route, index) => (
                  <Tab
                    key={index}
                    value={route.value}
                    style={
                      value === route.value
                        ? tabStyle.active_tab
                        : tabStyle.default_tab
                    }
                    label={<span className="text-sm">{route.label}</span>}
                  />
                ))}
              </Tabs>
            </div>
          </div>
          <div className="flex justify-center w-full px-4">{children}</div>
        </div>
      </div>
    </section>
  )
}
