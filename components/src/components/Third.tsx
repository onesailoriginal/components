import {useState} from "react"
type Props = {
    data: string
    data2: string
}
function Third(){
    const [content, setContent] = useState<Props | null>(null)
    async function serverConnect(){
        try{
            const req = await fetch('http://127.1.1.1:3000/loadDatas')
            if(!req.ok){
                throw new Error(`Szerver hiba: ${req.status}`)
            }
            const res: Props = await req.json()
            setContent(res)
        }catch(err){
            console.error("Error", err)
        } 
    }
    return(
        <section>
           <p>{content?.data || "Betöltés..."}</p>
           <p>{content?.data2 || "Betöltés..."}</p>
           <button onClick={serverConnect}>Lekérdezés</button> 
        </section>
    )
}

export default Third