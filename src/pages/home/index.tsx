import IconButton from '@mui/material/IconButton'
import MenuIcon from '@mui/icons-material/Menu'
import Carousel from '../../components/carousel'
import { styled } from '@mui/material/styles'
import Avatar from '@mui/material/Avatar'
import MilitaryTechIcon from '@mui/icons-material/MilitaryTech'
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress'

export default function Home() {
  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 20,
    borderRadius: 20,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: theme.palette.grey[800],
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 20,
      boxShadow: '0 0 6px 0 rgba(0, 0, 0, 0.75)',
      background:
        'linear-gradient(90deg, #1E0E69 0%, #5A28B1 42.53%, #8043B3 87.67%, #9968B2 139.76%, rgba(255, 255, 255, 0.00) 166.67%)',
    },
  }))

  return (
    <div className="min-h-screen ">
      <div className="py-5">
        <IconButton>
          <MenuIcon />
        </IconButton>
      </div>
      <div className="flex flex-col">
        <div className="text-sm text-center font-semibold mb-5">
          Nos dernières activité !
        </div>
        <Carousel autoScroll={true} />
      </div>
      <div className="my-5 flex flex-col">
        <div className="text-sm my-5">Ta progression</div>
        <div className="w-full h-48 bg-[#2e1065] rounded-lg py-3 pl-3">
          <div className="flex flex-row items-center mb-5">
            <Avatar className="mr-4" sx={{ width: 56, height: 56 }}>
              <MilitaryTechIcon />
            </Avatar>
            <div className="flex flex-col">
              <span className="text-lg">400 Points</span>
              <span className="text-[10px] text-[#9333ea]">Niveau 3</span>
            </div>
          </div>
        </div>
      </div>
      <div className="mb-5 flex flex-col"></div>
    </div>
  )
}
