import Image from 'next/image'
import Link from 'next/link'
import jsonUser from '../../../../public/temp-data/user.json'
import { User } from '../../../models/user.model'
import { useEffect, useState } from 'react'
import Button from '../../../components/button'
import { useRouter } from 'next/router'

export default function Settings() {
  const [user, setUser] = useState<User>({})
  const router = useRouter()

  useEffect(() => {
    setUser(jsonUser.data)
  }, [])

  const logout = () => {
    router.push('/auth/login')
  }

  return (
    <div>
      <div className={'text-center pt-16 mb-16'}>
        <Link href="/account">
          <Image
            src="/assets/illustrations/arrow.svg"
            width={12}
            height={28}
            alt="logo"
            className="ml-2"
          />
        </Link>

        <Image
          src="/assets/img/LOGO_TYPO_BLANC.png"
          width={70}
          height={80}
          alt="logo"
          className="m-auto mt-1"
        />
      </div>

      <div className="w-56 mx-auto">
        <div className={' text-3xl flex items-center justify-center mt-10'}>
          <Image
            src="/assets/illustrations/user.svg"
            width={51}
            height={54}
            alt="logo"
            className="mr-8"
          />
          <h1 className="font-chillax font-semibold text-3xl">COMPTE</h1>
        </div>

        <div className="grid text-base grid-rows-3 gap-5 w-max mx-auto mt-8">
          <div className="font-chillax font-medium">{user.lastName || '-'}</div>

          <div className="font-chillax font-medium">
            {user.firstName || '-'}
          </div>

          <div className="font-chillax font-medium">
            {user.filiere?.name || '-'}
          </div>
        </div>

        <Button additionalClasses={'mt-8'} onClick={() => logout()}>
          SE DÉCONNECTER
        </Button>

        <div className="mt-28 flex justify-center gap-6 flex-col">
          <Button
            style="link"
            additionalClasses="font-medium text-center"
            href="/account/delete-confirmation"
          >
            SUPPRIMER MON COMPTE
          </Button>
          <Button
            style="link"
            additionalClasses="text-xs opacity-60 font-light"
            className="text-xs"
          >
            Mentions légales
          </Button>
        </div>
      </div>
    </div>
  )
}
