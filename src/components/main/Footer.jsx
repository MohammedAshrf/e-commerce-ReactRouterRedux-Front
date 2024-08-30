import Logo from "../../assets/images/logo.png";

export default function Footer() {
  return (
    <>
      <div className="flex items-center justify-between h-20 overflow-hidden py-2 px-4">
        <img src={Logo} alt="logo image" />
        <p className="text-md font-bold">
          <span className="font-normal">Coypyright 2024 by </span>Mohamed Ashraf
          Ali
        </p>
      </div>
    </>
  );
}
