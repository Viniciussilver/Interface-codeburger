import BathroomIcon from '@mui/icons-material/Bathroom'
import CloudDownloadIcon from '@mui/icons-material/CloudDownload'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag'

const list = [
  {
    id: 1,
    label: 'Pedidos',
    nav: '/pedidos',
    icon: ShoppingBagIcon,
  },
  {
    id: 2,
    label: 'Produtos',
    nav: '/listar-produtos',
    icon: BathroomIcon,
  },
  {
    id: 3,
    label: 'Novo Produto',
    nav: '/novo-produto',
    icon: CloudDownloadIcon,
  },
]

export default list
