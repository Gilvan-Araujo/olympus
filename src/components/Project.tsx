type ProjectProps = {
  name: number;
};

export function Project({ name }: ProjectProps) {
  return (
    <div className="group my-2 flex h-72 w-72 shrink-0 flex-col items-center 2xl:h-[22rem] 2xl:w-[22rem]">
      <h3 className="relative bottom-2 text-3xl text-blue opacity-0 group-hover:opacity-100">
        {name}
      </h3>

      <button
        className={
          "group box-content flex items-center justify-center rounded-2xl border-8 border-transparent bg-gray bg-clip-content p-2 hover:animate-pulsate group-hover:border-collapse group-hover:border-8 group-hover:border-solid group-hover:border-blue 2xl:rounded-3xl"
        }
      >
        <div className="h-64 w-64 rounded-md bg-[url('https://placehold.co/300')] bg-contain 2xl:h-80 2xl:w-80 2xl:rounded-xl">
          {name}
        </div>
      </button>
    </div>
  );
}
