import { useEffect, useState } from "react"

type ServerResponse = {
  imageUrl: string
  listItems: string[]
}

function Fourth() {
  const [imageUrl, setImageUrl] = useState("")
  const [listItems, setListItems] = useState<string[]>([])
  const [isLoading, setIsLoading] = useState(true) 

  async function serverConnect() {
    try {
      const req = await fetch("http://127.1.1.1:3000/loadDatasTwo")

      if (!req.ok) {
        throw new Error(`Szerver hiba: ${req.status}`)
      }
      const res: ServerResponse = await req.json()
      setImageUrl(res.imageUrl)
      setListItems(res.listItems)
    } catch (err) {
      console.error("Error", err)
    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    serverConnect()
  }, [])

  if (isLoading) {
    return <p>Betöltés...</p>
  }
  return (
    <section>
      {imageUrl && <img src={imageUrl} alt="Szerverről töltött kép" className="img-fluid mb-3" />}
      <ol className="list-group list-group-numbered">
        {listItems.map((item, index) => (
          <li className="list-group-item" key={index}>
            {item}
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Fourth