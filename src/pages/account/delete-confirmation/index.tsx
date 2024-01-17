import Image from 'next/image'
import Button from '../../../components/button'

export default function DeleteConfirmation() {
  return (
    <div id="delete_account">
      <Image
        src="/assets/img/LOGO_TYPO_BLANC.png"
        width={240}
        height={266}
        alt="logo"
        className="m-auto pt-20 pb-8"
      />

      <div className="flex flex-col items-center gap-10 mt-20">
        <Button style="outline">SUPPRIMER MON COMPTE</Button>

        <Button style="link" href="/account/settings">
          ANNULER
        </Button>
      </div>
    </div>
  )
}
