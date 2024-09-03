import Logo from "../../assets/images/storeLogo1.png";

export default function Footer() {
  return (
    <>
      <div className="flex flex-col sm:flex-row items-center justify-between h-30 sm:h-20 overflow-hidden py-2 px-4">
        <img
          src={Logo}
          alt="logo image"
          className="w-34 h-24 sm:w-44 sm:h-22"
        />
        <p className="text-center text-md font-bold">
          <span className="text-md font-normal">Coypyright 2024 by </span>
          Mohamed Ashraf Ali
        </p>
      </div>
    </>
  );
}
