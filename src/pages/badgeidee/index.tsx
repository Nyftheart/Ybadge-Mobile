// Importer les modules nécessaires
import React, { useEffect, useState } from 'react'
import Link from 'next/link'

// Component fonctionnel
const MyForm = () => {
  // États pour les champs du formulaire
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  // Gérer la soumission du formulaire
  const handleSubmit = (e) => {
    e.preventDefault()
    // Vous pouvez traiter les données du formulaire ici, par exemple, les envoyer à un serveur
    console.log('Titre:', title)
    console.log('Description:', description)
  }

  return (
    <div className="bg-background min-h-screen">
      <img
        src="/assets/img/LOGO_TYPO_BLANC.png"
        width={125}
        height={80}
        alt="logo"
        className="m-auto pt-16 pb-8"
      />
      <div style={containerStyle}>
        <Link href="https://docs.google.com/forms/d/1sBSiOYbaEqXdTRjQXNlFzoWZXXWMfj5Xe0tg-M1Q6V8/edit">
          <button style={buttonStyle}>Une idée ?</button>
        </Link>
      </div>
    </div>
  )
}
const containerStyle = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  minHeight: '20vh', // Pour occuper au moins la hauteur de la fenêtre visible
}
const buttonStyle = {
  padding: '10px 20px',
  fontSize: '16px',
  backgroundColor: '#8c52ff',
  color: '#fff',
  border: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
}

export default MyForm
