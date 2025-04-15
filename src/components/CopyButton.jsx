import React, { useState } from 'react'
import { FiClipboard, FiCheck } from 'react-icons/fi'
import './CopyButton.css'

function CopyButton({ content }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(content)
      setCopied(true)
      setTimeout(() => setCopied(false), 1500)
    } catch (err) {
      console.error('Erro ao copiar:', err)
    }
  }

  return (
    <button onClick={handleCopy} title="Copiar">
      {copied ? <FiCheck size={16} /> : <FiClipboard size={16} />}
    </button>
  )
}

export default CopyButton
