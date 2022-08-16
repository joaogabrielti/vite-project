export default function Button({ children, onClick }) {
  return (
    <button className="bg-white bg-opacity-40 backdrop-blur-sm rounded drop-shadow-lg hover:bg-opacity-80 hover:backdrop-blur transition-all p-2" onClick={onClick}>
      <span className="font-semibold">{children}</span>
    </button>
  )
}
