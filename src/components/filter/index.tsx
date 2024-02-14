import React, { useEffect } from 'react'

import { Global } from '@emotion/react'
import { styled } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'
import Chip from '@mui/material/Chip'
import SwipeableDrawer from '@mui/material/SwipeableDrawer'
import RefreshIcon from '@mui/icons-material/Refresh'

const Root = styled('div')(({ theme }) => ({
  height: '100%',
}))

const Puller = styled('div')(({ theme }) => ({
  width: 130,
  height: 6,
  backgroundColor: 'white',
  borderRadius: 5,
  position: 'absolute',
  bottom: 8,
  left: '50%',
  transform: 'translate(-50%, -50%)',
}))

export default function SwipeableEdgeDrawer({ open }) {
  const [openDrawer, setOpen] = React.useState(true)
  const groupCategories = ['Classiques', 'Spéciaux', 'Event']
  const selectedCategories = []
  const groupAlpha = ['A à Z', 'Z à A']
  const groupDate = ['Récent', 'Ancien']

  useEffect(() => {
    setOpen(open)
  }, [open])

  function toggleDrawer(newOpen) {
    setOpen(newOpen)
  }
  function onSelectCategorie(categorie) {
    if (!selectedCategories.includes(categorie)) {
      selectedCategories.push(categorie)
    }
    console.log(selectedCategories)
  }

  const drawerBleeding = 0

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          '.MuiDrawer-root > .MuiPaper-root': {
            position: 'relative',
            height: `calc(60% - ${drawerBleeding}px)`,
            overflow: 'visible',
            borderBottomLeftRadius: '80px',
            borderBottomRightRadius: '80px',
            '&::before': {
              position: 'absolute',
              content: '""',
              zIndex: -1,
              width: '100%',
              height: '100%',
              borderTopLeftRadius: '80px',
              borderTopRightRadius: '80px',
              backgroundPosition: 'bottom 75% right 0px',
              backgroundImage: `url(${'/assets/img/background/bg.jpg'})`,
              backgroundSize: `100%, 50%, contain`,
              transform: 'rotate(180deg)',
            },
          },
        }}
      />
      <SwipeableDrawer
        anchor="top"
        open={openDrawer}
        onClose={() => setOpen(false)}
        onOpen={() => setOpen(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Box
          sx={{
            position: 'absolute',
            bottom: -drawerBleeding,
            borderBottomLeftRadius: '80px',
            borderBottomRightRadius: '80px',
            visibility: 'visible',
            right: 0,
            left: 0,
          }}
        >
          <Puller />
        </Box>
        <Box
          sx={{
            px: 2,
            pb: 2,
            height: '100%',
            overflow: 'auto',
            borderBottomLeftRadius: '80px',
            borderBottomRightRadius: '80px',
          }}
        >
          <div className="pt-10 px-2 flex flex-col">
            <Button
              className="float-right w-fit self-end"
              variant="text"
              size="large"
              endIcon={<RefreshIcon />}
            >
              Reset
            </Button>
            <div className="flex flex-col mb-8">
              <span className="text-lg font-semibold mb-3">Catégorie</span>
              <div className="flex flex-row justify-between">
                {groupCategories.map((categorie, index) => (
                  <Chip
                    className="w-full mx-2 py-5 rounded-3xl"
                    onClick={() => onSelectCategorie(categorie)}
                    key={index}
                    label={categorie}
                    size="medium"
                    color={
                      selectedCategories.includes(categorie) === true
                        ? 'secondary'
                        : 'default'
                    }
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col mb-8">
              <span className="text-lg font-semibold mb-3">
                Ordre alphabétique
              </span>
              <div className="flex flex-row justify-between">
                {groupAlpha.map((group, index) => (
                  <Chip
                    className="w-full mx-2 py-5 rounded-3xl"
                    key={index}
                    label={group}
                    size="medium"
                  />
                ))}
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-semibold mb-3">
                Date d&apos; ajout
              </span>
              <div className="flex flex-row justify-between">
                {groupDate.map((group, index) => (
                  <Chip
                    className="w-full mx-2 py-5 rounded-3xl"
                    key={index}
                    label={group}
                    size="medium"
                  />
                ))}
              </div>
            </div>
          </div>
        </Box>
      </SwipeableDrawer>
    </Root>
  )
}
