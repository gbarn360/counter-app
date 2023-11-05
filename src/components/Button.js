export default function Button({ title, action }) {
    return (
        <div className="Button" onClick={() => { action() }}>
            <h1>{title}</h1>
        </div >
    )
}