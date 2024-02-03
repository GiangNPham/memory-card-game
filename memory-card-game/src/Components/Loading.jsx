import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSpinner } from "@fortawesome/free-solid-svg-icons";
import "../styles/Loading.css";
export default function Loading() {
  return (
    <div className="loading-container flex justify-center items-center animate-spin">
      <FontAwesomeIcon className="w-12 h-12 text-white" icon={faSpinner} />
    </div>
  );
}
