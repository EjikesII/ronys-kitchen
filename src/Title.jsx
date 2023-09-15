import App from "./App"

function Title({text}) {
    return (
        <div className="title">
            <h2> {text || 'Max Kitchen'}</h2>
        <div className="title-underline"> </div>
        </div>
    )
}

export default Title