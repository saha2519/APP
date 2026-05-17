export default async function ArtworkPage({ params }) {

  const resolvedParams = await params

  return (

    <div className="p-10">

      <h1 className="text-4xl font-bold">
        Artwork Details
      </h1>

      <p className="mt-4">
        Artwork ID: {resolvedParams.id}
      </p>

    </div>
  )
}