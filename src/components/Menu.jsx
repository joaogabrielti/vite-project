import menu from '../assets/menu'
import detalhe1 from '../assets/images/s.png'
import detalhe2 from '../assets/images/t.png'

export default function Menu() {
  return (
    <>
      <img src={detalhe1} alt="Imagem de Detalhe" className="absolute rotate-180" style={{ width: 300, right: -100, top: -50 }}/>
      <img src={detalhe2} alt="Imagem de Detalhe" className="absolute " style={{ width: 200, right: -30, bottom: 0 }}/>
      <div className="flex flex-col menu p-4 z-10">
        <h1 className="text-8xl mb-4">Menu</h1>
        {menu.map((item, index) => (
          <div className="ml-2" key={index}>
            <h2 className="text-4xl mb-4">{item.name}</h2>
            <ul className="ml-2 mb-8">
              {item.items.map((item, index) => <li className="font-light" key={index}>{item}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </>
  )
}
