type SkillProps = {
  name: string;
  src: string;
};

export function Skill({ name, src }: SkillProps) {
  return (
    <div className="group flex shrink-0 flex-col items-center">
      <button
        className={`box-content flex h-20 w-20 items-center justify-center rounded-full border-4 border-transparent bg-gray bg-clip-content hover:border-collapse hover:animate-pulsate hover:border-4 hover:border-solid hover:border-blue 2xl:h-28 2xl:w-28 2xl:border-8 2xl:hover:border-8`}
      >
        <img src={src} alt={name} className="w-12 fill-white 2xl:w-16" />
      </button>

      <h3 className="relative top-1 text-xl text-blue opacity-0 group-hover:opacity-100">
        {name}
      </h3>
    </div>
  );
}
