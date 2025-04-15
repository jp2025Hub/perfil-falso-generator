export function formatDate(date) {
    if (!date) return ''
    const d = new Date(date)
    return d.toLocaleDateString('pt-PT', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    })
  }
  
  export function formatName(name) {
    return name
      .split(' ')
      .map((p) => p.charAt(0).toUpperCase() + p.slice(1).toLowerCase())
      .join(' ')
  }
  