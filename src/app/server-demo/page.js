async function getArtworks() {

  const res = await fetch(
    "https://jsonplaceholder.typicode.com/photos?_limit=6",
    {
      next: { revalidate: 30 },
    }
  )

  return res.json()
}

export default async function ServerDemo() {

  const artworks = await getArtworks()

  return (
    <div className="p-10">

      <h1 className="text-3xl font-bold mb-8">
        SSR Artworks
      </h1>

      <div className="grid grid-cols-3 gap-6">

        {artworks.map((art) => (
          <div
            key={art.id}
            className="border p-4 rounded-xl"
          >
            <img src={art.url} />

            <h2 className="mt-2">
              {art.title}
            </h2>
          </div>
        ))}

      </div>

    </div>
  )
}