import { Link } from "react-router-dom";
import "./button.css";

type Props = {
  name: string;
  to?: string;
  downloadable?: boolean;
};

function Button({ name, to, downloadable }: Props) {
  return (
    <div>
      <Link to={`${to}`}>
        <button className="button__btn">{name}</button>
      </Link>
    </div>
  );
}

export default Button;
