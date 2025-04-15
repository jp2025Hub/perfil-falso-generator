export function exportAsJSON(data) {
    const blob = new Blob([JSON.stringify(data, null, 2)], {
      type: 'application/json',
    })
    const url = URL.createObjectURL(blob)
    downloadFile(url, 'perfil-falso.json')
  }
  
  export function exportAsTXT(data) {
    const content = Object.entries(data)
      .map(([key, value]) => `${formatKey(key)}: ${value}`)
      .join('\n')
  
    const blob = new Blob([content], {
      type: 'text/plain',
    })
    const url = URL.createObjectURL(blob)
    downloadFile(url, 'perfil-falso.txt')
  }
  
  function formatKey(key) {
    return key.replace(/_/g, ' ').replace(/\b\w/g, (l) => l.toUpperCase())
  }
  
  function downloadFile(url, filename) {
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.click()
    URL.revokeObjectURL(url)
  }
  