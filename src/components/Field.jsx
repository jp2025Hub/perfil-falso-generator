import React from 'react'
import { FiRefreshCw } from 'react-icons/fi'
import CopyButton from './CopyButton'
import './Field.css'

function Field({ label, value, fieldKey, onRefresh }) {
  return (
    <div className="field">
      <div className="field-header">
        <strong>{label}</strong>
        <div className="field-actions">
          <CopyButton content={value} />
          <button className="refresh-btn" onClick={() => onRefresh(fieldKey)} title="Atualizar campo">
            <FiRefreshCw size={16} />
          </button>
        </div>
      </div>
      <div className="field-value">
        {value}
      </div>
    </div>
  )
}

export default Field
