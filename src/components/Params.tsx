interface ParamsProps {
    length?:number;
}

function Params({ length = 0 }: ParamsProps) {
  return (
    <section>
        <form>
            <div>
                <p>Character  Length</p>
                <p>{length}</p>
            </div>
            <input type="range" />
        </form>
    </section>
  )
}

export default Params
