import React from 'react'
import { exportAsJSON, exportAsTXT } from '../utils/exportUtils'
import './ExportButtons.css'

function ExportButtons({ profile }) {
  const handleExportJSON = () => {
    exportAsJSON(profile)
  }

  const handleExportTXT = () => {
    exportAsTXT(profile)
  }

  return (
    <div className="export-buttons">
      <h3>💾 Exportar Perfil</h3>
      <button onClick={handleExportJSON}> Exportar como JSON</button>
      <button onClick={handleExportTXT}> Exportar como TXT</button>
    </div>
  )
}

export default ExportButtons
