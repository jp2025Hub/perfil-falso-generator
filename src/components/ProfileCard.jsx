import React from 'react'
import Field from './Field'
import './ProfileCard.css'

function ProfileCard({ profile, onRefreshField }) {
  return (
    <div className="profile-card">
      <h2>👤 Perfil Gerado</h2>
      {Object.entries(profile).map(([key, value]) => (
        <Field
          key={key}
          fieldKey={key}
          label={formatLabel(key)}
          value={String(value)}
          onRefresh={onRefreshField}
        />
      ))}
    </div>
  )
}

// Formata chaves como "data_nascimento" → "Data de Nascimento"
function formatLabel(chave) {
  return chave
    .replace(/_/g, ' ')
    .replace(/\b\w/g, (l) => l.toUpperCase())
}

export default ProfileCard
