import { Box } from '@mui/material'
import type { NextPage } from 'next'
import { Professor } from '../src/@types/professor'
import Lista from '../src/components/Lista/Lista'



const Home: NextPage = () => {
  const professores: Professor[] = [
    {
      id: 1,
      nome: "professor 1",
      foto: "http://github.com/elton-fonseca.png",
      descricao: "Descrição professor 1",
      valor_hora: 100
    },

    {
      id: 2,
      nome: "professor 2",
      foto: "http://github.com/elton-fonseca.png",
      descricao: "Descrição professor 2",
      valor_hora: 200
    }
  ]

  return (
    <Box sx={{ backgroundColor: 'secondary.main'}}>
      <Lista professores={professores}/>
    </Box>
    
  )
}

export default Home
