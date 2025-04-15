import { Faker, pt_PT, en } from '@faker-js/faker'
import { formatDate } from './formatUtils'

const fakerEN = new Faker({ locale: [en] })

const fakerMap = {
  pt: new Faker({ locale: [pt_PT, en] }),
  en: fakerEN,
}

export function generateProfile(filtros, anterior = null, campoAlvo = null) {
  const faker = fakerMap[filtros.idioma] || fakerEN

  if (anterior && campoAlvo) {
    const novo = { ...anterior }
    novo[campoAlvo] = gerarCampo(faker, filtros, campoAlvo)
    return novo
  }

  const perfil = {
    nome: gerarNome(faker, filtros.gender),
    genero: filtros.gender === 'aleatorio' ? faker.person.sex() : filtros.gender,
    data_nascimento: gerarDataNascimento(filtros.faixaEtaria),
    idade: gerarIdade(filtros.faixaEtaria),
    nacionalidade: filtros.idioma === 'pt' ? 'Português(a)' : 'Portuguese',
    email: faker.internet.email(),
    telefone: faker.phone.number('+351 9## ### ###'),
    morada: `${faker.location.street()}, ${faker.location.buildingNumber()}`,
    codigo_postal: faker.location.zipCode(),
    cidade: faker.location.city(),
    pais: faker.location.country(),

    username: faker.internet.username(),
    github: `github.com/${faker.internet.username()}`,
    twitter: `twitter.com/${faker.internet.username()}`,
    instagram: `instagram.com/${faker.internet.username()}`,

    profissao: fakerEN.person.jobTitle(),
    empresa: faker.company.name(),
    universidade: faker.company.name() + ' Institute',

    ip: faker.internet.ip(),
    localizacao: faker.location.city() + ', ' + faker.location.country(),
    isp: faker.company.name(),
    navegador: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64)', // versão fixa segura
    fuso_horario: 'GMT+1',
    idioma_sistema: filtros.idioma === 'pt' ? 'pt-PT' : 'en-US',

    ultima_atividade: new Date().toISOString(),
    origem: 'Gerado por Fake Profile Tool',
  }

  return perfil
}

function gerarCampo(faker, filtros, campo) {
  const perfilTemp = generateProfile(filtros)
  return perfilTemp[campo]
}

function gerarNome(faker, genero) {
  if (genero === 'masculino') return faker.person.firstName('male') + ' ' + faker.person.lastName()
  if (genero === 'feminino') return faker.person.firstName('female') + ' ' + faker.person.lastName()
  return faker.person.fullName()
}

function gerarDataNascimento(faixa) {
  const hoje = new Date()
  let minIdade = 20, maxIdade = 45

  if (faixa === 'jovem') [minIdade, maxIdade] = [18, 25]
  if (faixa === 'sénior') [minIdade, maxIdade] = [51, 75]

  const idadeAleatoria = fakerEN.number.int({ min: minIdade, max: maxIdade })
  const ano = hoje.getFullYear() - idadeAleatoria
  const mes = String(fakerEN.number.int({ min: 1, max: 12 })).padStart(2, '0')
  const dia = String(fakerEN.number.int({ min: 1, max: 28 })).padStart(2, '0')

  return formatDate(`${ano}-${mes}-${dia}`)
}

function gerarIdade(faixa) {
  if (faixa === 'jovem') return fakerEN.number.int({ min: 18, max: 25 })
  if (faixa === 'sénior') return fakerEN.number.int({ min: 51, max: 75 })
  return fakerEN.number.int({ min: 26, max: 50 })
}
