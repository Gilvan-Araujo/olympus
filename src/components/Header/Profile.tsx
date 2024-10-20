export function Profile() {
  return (
    <div className="group my-0 flex flex-col items-center shrink-0 mb-[-1.75rem]">
      <button
        className={
          "border-transparent h-24 w-24 box-content flex items-center justify-center border-8 bg-clip-content hover:border-collapse hover:border-8 hover:border-solid hover:border-blue rounded-full hover:animate-pulsate group"
        }
      >
        <img
          src="https://github.com/Gilvan-Araujo.png"
          alt=""
          className="rounded-full"
        />
      </button>

      <h3 className="opacity-0 group-hover:opacity-100 relative top-1 text-blue text-xl">
        Gilvan Araújo
      </h3>
    </div>
  );
}
