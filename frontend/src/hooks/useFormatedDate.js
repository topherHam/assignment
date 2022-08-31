const useFormatedSeconds = (seconds) => {
    let date = new Date(1970,0,1);
    date.setSeconds(seconds);
    return  date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1")
}
export default useFormatedSeconds