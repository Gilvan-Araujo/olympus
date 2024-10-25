type SkillProps = {
  name: string;
  src: string;
};

export function Skill({ name, src }: SkillProps) {
  return (
    <div className="group flex shrink-0 grow-0 flex-col items-center">
      <button
        className={`box-content flex size-16 items-center justify-center rounded-full border-4 border-transparent bg-gray bg-clip-content hover:border-collapse hover:animate-pulsate hover:border-4 hover:border-solid hover:border-blue xl:size-20 2xl:size-28 2xl:border-8 2xl:hover:border-8`}
      >
        <img
          src={src}
          alt={name}
          className="size-8 fill-white xl:size-12 2xl:size-16"
        />
      </button>

      <h3 className="max-w-18 relative top-1 text-wrap text-center text-sm text-blue opacity-0 group-hover:opacity-100 xl:max-w-20 xl:text-xl 2xl:max-w-28">
        Hard Skill: <br /> {name}
      </h3>
    </div>
  );
}
