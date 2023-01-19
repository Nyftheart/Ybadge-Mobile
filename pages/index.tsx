import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import styles from '../styles/Home.module.css'
import Login from "./Login";
import PageBadges from "./PageBadges";
import PageBadgesRecherche from "./PageBadgesRecherche";
import PageBadgesNoResults from "./PageBadgesNoResults";
import PageBadgesDefinition from "./PageBadgesDefinition";
import PageBadgesCompteDeco from "./PageBadgesCompteDeco";
import PageBadgesCompte from "./PageBadgesCompte";

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
      <>
          <Login />
      </>
  )
}
