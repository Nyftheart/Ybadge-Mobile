import React, { useEffect, useState } from 'react'

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

export default function SwipeableEdgeDrawer({ open, toggleDrawer }) {
  const groupCategories = ['Classiques', 'Spéciaux', 'Event']
  const [selectedCategories, setSelectedCategories] = useState([])
  const [selectedAlpha, setSelectedAlpha] = useState(null)
  const [selectedDate, setSelectedDate] = useState(null)

  const groupAlpha = ['A à Z', 'Z à A']
  const groupDate = ['Récent', 'Ancien']

  const handleAlphaClick = (chipValue) => {
    setSelectedAlpha(chipValue === selectedAlpha ? null : chipValue)
  }

  const handleDateClick = (chipValue) => {
    setSelectedDate(chipValue === selectedDate ? null : chipValue)
  }

  const onSelectCategorie = (categorie) => {
    if (selectedCategories.includes(categorie)) {
      setSelectedCategories(
        selectedCategories.filter((chip) => chip !== categorie)
      )
    } else {
      setSelectedCategories([...selectedCategories, categorie])
    }
  }

  const drawerBleeding = 0

  const resetFilter = () => {
    setSelectedCategories([])
  }

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
        open={open}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={true}
        ModalProps={{
          keepMounted: false,
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
              onClick={resetFilter}
            >
              Reset
            </Button>
            <div className="flex flex-col mb-8">
              <span className="text-lg font-semibold mb-3">Catégorie</span>
              <div className="flex flex-row justify-between">
                {groupCategories.map((categorie, index) => (
                  <Chip
                    className="w-full mx-2 py-5 rounded-3xl border-2 border-white"
                    onClick={() => onSelectCategorie(categorie)}
                    key={index}
                    clickable={false}
                    label={categorie}
                    size="medium"
                    variant={
                      !selectedCategories.includes(categorie)
                        ? 'outlined'
                        : 'filled'
                    }
                    color={
                      selectedCategories.includes(categorie)
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
                    className="w-full mx-2 py-5 rounded-3xl border-2 border-white	"
                    key={index}
                    label={group}
                    size="medium"
                    clickable={false}
                    onClick={() => handleAlphaClick(group)}
                    variant={selectedAlpha === group ? 'filled' : 'outlined'}
                    color={selectedAlpha === group ? 'secondary' : 'default'}
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
                    className="w-full mx-2 py-5 rounded-3xl border-2 border-white	"
                    key={index}
                    label={group}
                    size="medium"
                    clickable={false}
                    onClick={() => handleDateClick(group)}
                    variant={selectedAlpha === group ? 'filled' : 'outlined'}
                    color={selectedDate === group ? 'secondary' : 'default'}
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
