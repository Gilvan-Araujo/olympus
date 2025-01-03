export function Footer() {
  return (
    <div className="flex flex-row items-center justify-between border-t px-5 pt-5 xl:px-9 xl:pt-3 2xl:border-t-2 2xl:px-14 2xl:pt-4">
      <div className="flex flex-col items-center gap-1 2xl:gap-2">
        <div className="flex flex-row items-center justify-between gap-1 2xl:gap-2">
          <div className="size-1 bg-green xl:size-2 2xl:size-3" />
          <div className="size-[0.1875rem] bg-gray xl:size-[0.375rem] 2xl:size-2" />
          <div className="size-[0.1875rem] bg-gray xl:size-[0.375rem] 2xl:size-2" />
          <div className="size-[0.1875rem] bg-gray xl:size-[0.375rem] 2xl:size-2" />
        </div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="#000000"
          viewBox="0 0 256 256"
          className="size-6 fill-white xl:size-11 2xl:size-16"
        >
          <path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm0,144H32V64H224V192Zm-16-64a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,128Zm0-32a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16H200A8,8,0,0,1,208,96ZM72,160a8,8,0,0,1-8,8H56a8,8,0,0,1,0-16h8A8,8,0,0,1,72,160Zm96,0a8,8,0,0,1-8,8H96a8,8,0,0,1,0-16h64A8,8,0,0,1,168,160Zm40,0a8,8,0,0,1-8,8h-8a8,8,0,0,1,0-16h8A8,8,0,0,1,208,160Z"></path>
        </svg>
      </div>

      <div className="flex flex-row gap-6 xl:gap-11 2xl:gap-16">
        <a
          className="flex flex-row items-center gap-3 2xl:gap-4"
          href="https://www.linkedin.com/in/gilvan-araujo-jr/"
          target="_blank"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 256 256"
            className="size-7 fill-white 2xl:size-10"
          >
            <path d="M216,24H40A16,16,0,0,0,24,40V216a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V40A16,16,0,0,0,216,24Zm0,192H40V40H216V216ZM96,112v64a8,8,0,0,1-16,0V112a8,8,0,0,1,16,0Zm88,28v36a8,8,0,0,1-16,0V140a20,20,0,0,0-40,0v36a8,8,0,0,1-16,0V112a8,8,0,0,1,15.79-1.78A36,36,0,0,1,184,140ZM100,84A12,12,0,1,1,88,72,12,12,0,0,1,100,84Z"></path>
          </svg>
          <p className="hidden text-xl xl:block 2xl:text-2xl">
            gilvan-araujo-jr
          </p>
        </a>

        <a
          className="flex flex-row items-center gap-3 2xl:gap-4"
          href="mailto:gilvanjunior@pm.me"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 256 256"
            className="size-7 fill-white 2xl:size-10"
          >
            <path d="M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z"></path>
          </svg>
          <p className="hidden text-xl xl:block 2xl:text-2xl">
            gilvanjunior@pm.me
          </p>
        </a>

        <span className="flex flex-row items-center gap-3 2xl:gap-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="#000000"
            viewBox="0 0 256 256"
            className="size-7 fill-white 2xl:size-10"
          >
            <path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,8.12,8.12,0,0,0-.75.56L134.87,160c-15.42-7.49-31.34-23.29-38.83-38.51l20.78-24.71c.2-.25.39-.5.57-.77a16,16,0,0,0,1.32-15.06l0-.12L97.54,33.64a16,16,0,0,0-16.62-9.52A56.26,56.26,0,0,0,32,80c0,79.4,64.6,144,144,144a56.26,56.26,0,0,0,55.88-48.92A16,16,0,0,0,222.37,158.46ZM176,208A128.14,128.14,0,0,1,48,80,40.2,40.2,0,0,1,82.87,40a.61.61,0,0,0,0,.12l21,47L83.2,111.86a6.13,6.13,0,0,0-.57.77,16,16,0,0,0-1,15.7c9.06,18.53,27.73,37.06,46.46,46.11a16,16,0,0,0,15.75-1.14,8.44,8.44,0,0,0,.74-.56L168.89,152l47,21.05h0s.08,0,.11,0A40.21,40.21,0,0,1,176,208Z"></path>
          </svg>
          <p className="hidden text-xl xl:block 2xl:text-2xl">
            +55 (83) 9 9648-1242
          </p>
        </span>
      </div>
    </div>
  );
}
