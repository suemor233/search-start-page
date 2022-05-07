import {defineComponent, ref} from 'vue'
import Search from "@/components/Search";
import Time from "@/components/Time";
import Weather from "@/components/Weather";

export default defineComponent({
    setup(props, ctx) {
        const isFocus = ref(false)
        return () => (
            <>
                <div class={'fixed inset-0 z-10'}>
                    <Weather isFocus={isFocus}/>
                    <div class={'flex h-full flex-col items-center mt-36'}>
                            <Time/>
                            <Search onIsFocus={(state)=>isFocus.value = state}/>
                    </div>
                </div>
                <div class={`h-screen bg-main-bk bg-no-repeat bg-center bg-cover overflow-hidden transition duration-500 ease-in-out ${isFocus.value ? 'blur-md' : ''}`}/>
            </>
        );
    }
})
