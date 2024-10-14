export function Profile() {
  return (
    <button
      className={
        "border-transparent h-24 w-24 box-content flex items-center justify-center border-8 bg-clip-content hover:border-collapse hover:border-8 hover:border-solid hover:border-blue rounded-full hover:animate-pulsate"
      }
    >
      <img
        src="https://github.com/Gilvan-Araujo.png"
        alt=""
        className="rounded-full"
      />
    </button>
  );
}
