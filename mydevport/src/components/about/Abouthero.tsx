
export function AboutHero() {
  return (
    <section className="relative isolate min-h-screen overflow-hidden bg-gray-900 px-6 flex items-center">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,var(--color-indigo-500),transparent)] opacity-10" />
      <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-gray-900 shadow-xl ring-1 shadow-indigo-500/5 ring-white/5 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
      
      <div className="mx-auto max-w-2xl lg:max-w-4xl">

        <img
              alt=""
              src="https://images.unsplash.com/photo-1494790108377-be9c29b29330"
              className="mx-auto size-40 rounded-4xl shadow-lg mask-linear-120 mask-linear-from-60%  "
            />
        <figure className="mt-10">
          <blockquote className="text-center text-xl/8 font-semibold text-white sm:text-2xl/9">
            <p>
              “Sou um apaixonado por carros, no meu tempo livre gosto de alguns esportes.”
            </p>
          </blockquote>

          <figcaption className="mt-10">
            

            <div className="mt-4 flex items-center justify-center space-x-3 text-base">
              <div className="font-semibold text-white">Ramon Baier</div>
              <svg width={3} height={3} viewBox="0 0 2 2" aria-hidden="true" className="fill-white">
                <circle r={1} cx={1} cy={1} />
              </svg>
              <div className="text-gray-400">Dev Junior</div>
            </div>
          </figcaption>
        </figure>
         
      </div>
      
    </section>
  );
}
