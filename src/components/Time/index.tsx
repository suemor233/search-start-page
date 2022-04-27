import {defineComponent} from 'vue'
import {useNow} from "@vueuse/core";
import useTimeNow from "@/hooks/time";

export default defineComponent({
    setup(props, ctx) {
        const time = useTimeNow()
        return () => (
            <>
                <div class={'absolute left-1/2 -translate-x-1/2 top-18'}>
                    <p class={'text-white text-6xl font-mono select-none '}>{time.value}</p>
                </div>
            </>
        );
    }
})
