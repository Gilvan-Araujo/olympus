type ProjectProps = {
  name: string;
};

export function Project({ name }: ProjectProps) {
  const number = Number(name.split(" ")[1]);
  console.log(number);

  return (
    <div className="group my-2 flex size-72 shrink-0 flex-col items-center 2xl:size-[22rem]">
      <h3 className="relative bottom-2 text-2xl text-blue opacity-0 group-hover:opacity-100 xl:text-3xl">
        Project: {name}
      </h3>

      <button
        className={
          "group box-content flex items-center justify-center rounded-2xl border-8 border-transparent bg-gray bg-clip-content p-2 hover:animate-pulsate hover:border-solid hover:border-blue group-hover:border-collapse group-hover:border-8 2xl:rounded-3xl"
        }
      >
        <div
          className={`size-64 rounded-md bg-[url('https://placehold.co/${number}00')] bg-contain 2xl:size-80 2xl:rounded-xl`}
        >
          Project: {name}
        </div>
      </button>
    </div>
  );
}
