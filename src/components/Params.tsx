interface ParamsProps {
    length?:number;
}

function Params({ length = 0 }: ParamsProps) {
  return (
    <section>
        <div>
            <p>Character  Length</p>
            <p>{length}</p>
        </div>
        <input type="range" />
    </section>
  )
}

export default Params
