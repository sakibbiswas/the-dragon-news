import { useEffect } from "react"

const useTitle = title => {
    useEffect(() => {
        document.title=`${title} - DragonNews`
    },[title])
}
export default useTitle;