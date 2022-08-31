import { timeFormatRegex } from "../config/constants";

const useFormatedSeconds = (seconds) => {
    let date = new Date(1970,0,1);
    date.setSeconds(seconds);
    return  date.toTimeString().replace(timeFormatRegex, "$1")
}
export default useFormatedSeconds