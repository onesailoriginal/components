import {useState} from "react"
import reactDefLogo from "../assets/react.svg"

function Second(){
    const [shown, setShown] = useState(false)

    function showPicture():void {
        setShown(true)
    }

    function hidePicture():void{
        setShown(false)
    }
    return(
        <section>
            <img  src={reactDefLogo} className={shown ? "" : "hidden"}/>
            <button onClick={showPicture}>Megjelenítés</button>
            <button onClick={hidePicture}>Elrejtés</button>

        </section>
    )
}

export default Second;


// AI KÓD, csak azért kell hogy tudjam, hogy így is meg lehetne oldani egyszerűbben:
// export default function Second() {
//   const [shown, setShown] = useState(false)

//   return (
//     <section>
//       <img src={reactDefLogo} className={shown ? "" : "hidden"} alt="" />
//       <button onClick={() => setShown(true)}>Megjelenítés</button>
//       <button onClick={() => setShown(false)}>Elrejtés</button>
//     </section>
//   )
// }
