import { useLocation } from "react-router";

const useQuery = (param : string)  : string | null => (new URLSearchParams(useLocation().search)).get(param);

export default useQuery;