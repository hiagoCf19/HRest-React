import { Link } from "react-router-dom"

const RotaNula = () => {
  return (
    <div className="h-screen flex flex-col items-center justify-center backCbol">
      <h1 className="text-4xl font-bold mb-4">Erro 404 - Página não encontrada</h1>
      <p className="text-lg text-gray-600">A página que você está procurando não existe.</p>
      <p className="text-lg text-gray-600">Por favor, verifique o URL ou <Link to={'/'} className="text-blue-500">retorne à página inicial</Link>.</p>
    </div>
  )
}
export default RotaNula