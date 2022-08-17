import menu from '../assets/menu'
import detalhe1 from '../assets/images/s.png'
import detalhe2 from '../assets/images/t.png'

export default function Menu({ closeMenu }) {
  return (
    <>
      <img src={detalhe1} alt="Imagem de Detalhe" className="absolute rotate-180" style={{ width: 300, right: -100, top: -50 }}/>
      <img src={detalhe2} alt="Imagem de Detalhe" className="absolute " style={{ width: 200, right: -30, bottom: 0 }}/>
      <button className="fixed bottom-4 right-4 rounded-full bg-white bg-opacity-40 backdrop-blur-sm drop-shadow-lg hover:bg-opacity-80 hover:backdrop-blur transition-all z-20" type="button" onClick={closeMenu}>
        <svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 40 8 24 24 8l2.1 2.1-12.4 12.4H40v3H13.7l12.4 12.4Z"/></svg>
      </button>
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
