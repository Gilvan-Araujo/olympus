export function Profile() {
  return (
    <div className="group my-0 mb-[-1.75rem] flex shrink-0 flex-col items-center">
      <button
        className={
          "group box-content flex size-12 items-center justify-center rounded-full border-4 border-transparent bg-clip-content hover:border-collapse hover:animate-pulsate hover:border-4 hover:border-solid hover:border-blue xl:size-16 2xl:size-24 2xl:border-8 2xl:hover:border-8"
        }
      >
        <img
          src="https://github.com/Gilvan-Araujo.png"
          alt=""
          className="rounded-full"
        />
      </button>

      <h3 className="relative top-1 text-sm text-blue opacity-0 group-hover:opacity-100 2xl:text-xl">
        Gilvan Araújo
      </h3>
    </div>
  );
}
