import {defineComponent, ref} from 'vue'
import Search from "@/components/Search";
import Time from "@/components/Time";
import {NButton} from "naive-ui";

export default defineComponent({
    setup(props, ctx) {
        const isFocus = ref(false)
        return () => (
            <>

                <div class={'fixed inset-0 z-10'}>
                    <Time/>
                    <Search onIsFocus={(state)=>isFocus.value = state}/>
                </div>
                <div class={`h-screen bg-main-bk bg-no-repeat bg-center bg-cover overflow-hidden transition duration-500 ease-in-out ${isFocus.value ? 'blur-md' : ''}`}/>
            </>
        );
    }
})
