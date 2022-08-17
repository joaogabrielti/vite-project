export default function Card({ page }) {
  return (
    <div className="bg-white bg-opacity-40 backdrop-blur rounded drop-shadow-lg p-2">
      <h2 className="font-bold text-center text-4xl mb-4">{page.title}</h2>
      {page.paragraphs.map((paragraph, index) => <p className="text-center mb-2" key={index}>{paragraph}</p>)}
      {page.list && (
        <ul className="list-decimal list-inside mx-2 mt-4 mb-2">
          {page.list.map((item, index) => <li key={index}>{item}</li>)}
        </ul>
      )}
    </div>
  )
}
