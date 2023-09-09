import CopyIcon from "../assets/icon-copy.svg";

interface PasswordOutputProps {
    children?:string;
}

function PasswordOutput({ children = '' } : PasswordOutputProps) {
  return (
    <h2 className="password-output">
      <span>{children}</span>
      <img src={CopyIcon} alt="copy" />
    </h2>
  )
}

export default PasswordOutput
