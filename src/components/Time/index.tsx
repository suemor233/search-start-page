import {defineComponent} from 'vue'
import {useNow} from "@vueuse/core";
import useTimeNow from "@/hooks/time";

export default defineComponent({
    setup(props, ctx) {
        const time = useTimeNow()
        return () => (
            <>
                    <p class={'animate__animated animate__bounceInDown text-white text-center text-6xl font-mono select-none '}>{time.value}</p>
            </>
        );
    }
})
