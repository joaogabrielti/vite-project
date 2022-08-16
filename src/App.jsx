import { useCallback, useState } from 'react'
import Button from './components/Button'
import Card from './components/Card'
import pages from './assets/pages'

export default function App() {
  const [page, setPage] = useState(0)

  const hasPreviousPage = page > 0
  const hasNextPage = page < pages.length - 1

  const nextPage = useCallback(() => {
    if (hasNextPage) {
      setPage(page + 1)
    }
  }, [page])

  const previousPage = useCallback(() => {
    if (hasPreviousPage) {
      setPage(page - 1)
    }
  } , [page])

  return (
    <div className="relative flex flex-col h-screen">
      <img src={pages[page].img} alt="Imagem de Fundo" className="absolute h-full z-0" />
      <header className="p-2 z-10">
        <h1 className="font-bold text-white text-shadow text-3xl">Aliment' Art</h1>
      </header>
      <main className="flex flex-col flex-1 justify-center p-2 z-10">
        <Card page={pages[page]} />
      </main>
      <footer className="flex items-center justify-between p-2 z-10">
        { hasPreviousPage && <Button onClick={previousPage}>Voltar</Button> }
        <div></div>
        { hasNextPage && <Button onClick={nextPage}>Continuar</Button> }
      </footer>
    </div>
  )
}
