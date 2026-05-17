export default function ArtworkCard(props) {
  return (
    <div className="border p-4 rounded-xl">
      
      <img
        src={props.image}
        alt={props.title}
        className="rounded-lg"
      />

      <h2 className="text-xl font-bold mt-3">
        {props.title}
      </h2>

      <p className="mt-2">
        ${props.price}
      </p>

    </div>
  )
}