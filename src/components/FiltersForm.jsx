import React from 'react'
import './FiltersForm.css'

function FiltersForm({ filters, onChange, onGenerate }) {
  const handleChange = (e) => {
    const { name, value } = e.target
    onChange({ [name]: value })
  }

  return (
    <div className="filters-form">
      <h2> Opções de Geração</h2>

      <label>
        Género:
        <select name="gender" value={filters.gender} onChange={handleChange}>
          <option value="aleatorio">Aleatório</option>
          <option value="masculino">Masculino</option>
          <option value="feminino">Feminino</option>
        </select>
      </label>

      <label>
        Faixa etária:
        <select name="faixaEtaria" value={filters.faixaEtaria} onChange={handleChange}>
          <option value="jovem">18–25</option>
          <option value="adulto">26–50</option>
          <option value="sénior">50+</option>
        </select>
      </label>

      <label>
        Idioma:
        <select name="idioma" value={filters.idioma} onChange={handleChange}>
          <option value="pt">Português</option>
          <option value="en">Inglês</option>
        </select>
      </label>

      <button className="generate-btn" onClick={onGenerate}>🎲 Gerar Perfil</button>
    </div>
  )
}

export default FiltersForm
