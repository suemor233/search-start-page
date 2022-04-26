import {defineComponent} from 'vue'
import {useNow} from "@vueuse/core";
import useTimeNow from "@/hooks/time";

export default defineComponent({
    setup(props, ctx) {
        const time = useTimeNow()
        return () => (
            <>
                <div>
                    <p class={'text-white text-6xl font-mono select-none'}>{time.value}</p>
                </div>
            </>
        );
    }
})
