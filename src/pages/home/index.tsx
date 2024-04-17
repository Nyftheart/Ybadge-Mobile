import * as React from 'react'
import IconButton from '@mui/material/IconButton'
import Carousel from '../../components/carousel'
import MenuIcon from '@mui/icons-material/Menu'
import SettingsIcon from '@mui/icons-material/Settings'
import { styled } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'
import Image from 'next/image'
import Box from '@mui/material/Box'
import Modal from '@mui/material/Modal'

const BorderLinearProgress = styled(LinearProgress)(() => ({
  height: 7,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor: '#440E82',
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
    backgroundColor: '#BA36EE',
  },
}))

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 280,
  color: '#000',
  bgcolor: '#fff',
  boxShadow: 24,
  borderRadius: 8,
  p: 4,
}

export default function Home() {
  const [open, setOpen] = React.useState(false)
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <div className="min-h-screen ">
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <div className="flex flex-col items-center">
            <Image
              className="my-3 mx-3"
              src="/assets/img/nextLevel.svg"
              width={150}
              height={110}
              alt="level"
            />
            <span className="text-center text-black text-sm font-bold">
              Félicitations, niveau 1 atteint !
            </span>
            <span className="mt-2 text-xs text-black text-center">
              Tu viens de réussir le défi pour avoir le badge
            </span>
            <span className="mt-7 text-xs text-black text-center">
              Continue tes efforts, tu es sur la bonne voie !
            </span>
          </div>
        </Box>
      </Modal>
      <div className="pt-7 pb-5 flex flex-row justify-between">
        <IconButton>
          {/* <MenuIcon /> */}
        </IconButton>
        <IconButton onClick={handleOpen}>
          <SettingsIcon />
        </IconButton>
      </div>
      <div className="flex flex-col">
        <div className="text-sm text-center font-semibold mb-5">
          Nos dernières activité !
        </div>
        <Carousel autoScroll={true} />
      </div>
      <div className="my-5 flex flex-col">
        <div className="text-sm my-5">Ta progression:</div>
        <div>
          <div className="flex flex-row items-end">
            <div className="relative">
              <Image
                className="my-3 mx-3"
                src="/assets/img/level.svg"
                width={50}
                height={50}
                alt="level"
              />
              <div className="w-9 h-10 absolute opacity-80 top-1 right-2 rounded-full bg-[#733CA2] mix-blend-color-dodge -rotate-[24deg]"></div>
            </div>

            <div className="flex flex-col pb-6">
              <span className="text-sm font-bold leading-5">Niveau 1</span>
              <span className="text-xs">Novice</span>
            </div>
          </div>
          <div className="w-full my-3 flex flex-col">
            <div className="flex flex-row justify-between text-sm">
              <span>0</span>
              <span>2</span>
            </div>
            <BorderLinearProgress variant="determinate" value={50} />
            <span className="self-end text-sm">500xp</span>
          </div>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-col">
              <span className="text-sm font-bold leading-5">
                Encore 40 xp pour le prochain niveau !
              </span>
              <span className="text-xs">
                Niveau 2 : 100 points - Apprenti Collecteur
              </span>
            </div>
            <Image
              className="my-3 mx-3"
              src="/assets/img/nextLevel.svg"
              width={60}
              height={70}
              alt="level"
            />
          </div>
          <div className="flex flex-row justify-between py-3">
            <Image
              src="/assets/img/level.svg"
              width={38}
              height={42}
              alt="level"
            />
            <Image
              src="/assets/img/emptyLevel.svg"
              width={38}
              height={42}
              alt="level"
            />
            <Image
              src="/assets/img/emptyLevel.svg"
              width={38}
              height={42}
              alt="level"
            />
            <Image
              src="/assets/img/emptyLevel.svg"
              width={38}
              height={42}
              alt="level"
            />
          </div>
        </div>
      </div>
      <div className="mb-5 flex flex-col"></div>
    </div>
  )
}
