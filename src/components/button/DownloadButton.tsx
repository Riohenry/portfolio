import { Link } from "react-router-dom";
import "./button.css";

type Props = {
  name: string;
  to?: string;
};

function Button({ name, to }: Props) {
  return (
    <div>
      {/* <Link to={`${to}`} target="_blank" download>
      </Link> */}
        <button className="button__btn">{name}</button>
    </div>
  );
}

export default Button;
