import moment from "moment";
import {ref} from "vue";

function useTimeNow() {
    const time = ref(moment().locale('zh-cn').format('HH:mm:ss'))

    const init = () => {
        setTime()
    }

    function setTime() {
        setTimeout(()=>{
           time.value =  moment().locale('zh-cn').format('HH:mm:ss')
            setTime()
        },1000)
    }

    init()

    return time
}

export default useTimeNow
