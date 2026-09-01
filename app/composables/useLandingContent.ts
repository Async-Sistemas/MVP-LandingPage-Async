export interface NavLink {
  label: string
  href: string
}

export interface Prototipo {
  nome: string
  segmento: string
  descricao: string
  icone: string
  corDestaque: string
}

export interface Passo {
  numero: string
  titulo: string
  texto: string
}

// TODO: trocar pelo número real da Async Sistemas (formato "55DDXXXXXXXXX").
const WHATSAPP_NUMBER = '5531973228027'

const navLinks: NavLink[] = [
  { label: 'Modelos', href: '#modelos' },
  { label: 'Como funciona', href: '#como-funciona' },
  { label: 'Contato', href: '#contato' }
]

const prototipos: Prototipo[] = [
  {
    nome: 'Padaria do Bairro',
    segmento: 'padaria',
    descricao: 'Cardápio do dia, encomendas de bolo e horário de funcionamento em destaque.',
    icone: 'i-lucide-croissant',
    corDestaque: 'var(--color-async-500)'
  },
  {
    nome: 'Barbearia Alfaiate',
    segmento: 'barbearia',
    descricao: 'Galeria de cortes, tabela de preços e agendamento direto pelo WhatsApp.',
    icone: 'i-lucide-scissors',
    corDestaque: 'var(--color-grafite-600)'
  },
  {
    nome: 'Floricultura Jardim',
    segmento: 'floricultura',
    descricao: 'Catálogo de buquês por ocasião e botão de entrega no mesmo dia.',
    icone: 'i-lucide-flower-2',
    corDestaque: 'var(--color-async-600)'
  },
  {
    nome: 'Pet Amigo',
    segmento: 'petshop',
    descricao: 'Serviços de banho e tosa, planos mensais e formulário de agendamento.',
    icone: 'i-lucide-dog',
    corDestaque: 'var(--color-grafite-500)'
  },
  {
    nome: 'Cafeteria Esquina',
    segmento: 'cafeteria',
    descricao: 'Menu de bebidas, ambiente em fotos e link para pedidos no delivery.',
    icone: 'i-lucide-coffee',
    corDestaque: 'var(--color-async-400)'
  },
  {
    nome: 'Salão Flor de Lis',
    segmento: 'salão de beleza',
    descricao: 'Portfólio de trabalhos, pacotes de serviço e avaliações de clientes.',
    icone: 'i-lucide-sparkles',
    corDestaque: 'var(--color-grafite-700)'
  }
]

const passos: Passo[] = [
  {
    numero: '01',
    titulo: 'Escolha o modelo',
    texto: 'Veja os protótipos por segmento e escolha o que mais parece com o jeito da sua loja.'
  },
  {
    numero: '02',
    titulo: 'Personalize com sua marca',
    texto: 'Envie fotos, cores e textos do seu negócio. A gente ajusta o modelo para a sua realidade.'
  },
  {
    numero: '03',
    titulo: 'Publique e comece a vender',
    texto: 'Sua página vai ao ar com link próprio, pronta para compartilhar no WhatsApp e nas redes.'
  }
]

/**
 * Conteúdo textual/estrutural compartilhado da landing page.
 *
 * Fica num só lugar porque `navLinks` é usado tanto no menu desktop quanto
 * no menu mobile do `AppHeader`, e o número de WhatsApp aparece em mais de
 * um componente (`AppHeader` e `LandingCta`) — assim só existe um ponto para
 * atualizar cada um deles.
 */
export function useLandingContent() {
  const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}`

  return { navLinks, prototipos, passos, whatsappUrl }
}
