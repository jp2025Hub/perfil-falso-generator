import React, { useState } from 'react'
import './styles/layout.css'
import './styles/theme.css'

import FiltersForm from './components/FiltersForm'
import ProfileCard from './components/ProfileCard'
import ExportButtons from './components/ExportButtons'

import { generateProfile } from './utils/profileGenerator'

function App() {
  const [filters, setFilters] = useState({
    gender: 'aleatorio',
    faixaEtaria: 'adulto',
    idioma: 'pt',
  })

  const [profile, setProfile] = useState(null)

  const handleGenerateProfile = () => {
    const novoPerfil = generateProfile(filters)
    setProfile(novoPerfil)
  }

  const handleFieldRefresh = (campo) => {
    if (!profile) return
    const atualizado = generateProfile(filters, profile, campo)
    setProfile(atualizado)
  }

  const handleFilterChange = (updatedFilters) => {
    setFilters((prev) => ({ ...prev, ...updatedFilters }))
  }

  return (
    <div className="app-container">
      <header>
        <h1> Gerador de Perfil Falso</h1>
        <p>Simula uma identidade com dados realistas para testes ou privacidade online.</p>
      </header>

      <main>
        <FiltersForm filters={filters} onChange={handleFilterChange} onGenerate={handleGenerateProfile} />

        {profile && (
          <>
            <ProfileCard profile={profile} onRefreshField={handleFieldRefresh} />
            <ExportButtons profile={profile} />
          </>
        )}
      </main>

      <footer>
        <small>© {new Date().getFullYear()} João Cabral • Projeto educativo</small>
      </footer>
    </div>
  )
}

export default App
