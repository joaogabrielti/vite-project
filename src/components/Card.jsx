export default function Card({ page }) {
  return (
    <div className="bg-white bg-opacity-40 backdrop-blur rounded drop-shadow-lg p-2">
      <h2 className="font-bold text-center text-2xl mb-4">{page.title}</h2>
      {page.paragraphs.map((paragraph, index) => <p className="text-center mb-2" key={index}>{paragraph}</p>)}
    </div>
  )
}
