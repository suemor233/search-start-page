import {defineComponent, ref} from 'vue'
import Search from "@/components/Search";
import Time from "@/components/Time";

export default defineComponent({
    setup(props, ctx) {
        return () => (
            <>
                <div class={'bg-main-bk h-screen bg-no-repeat bg-center bg-cover flex flex-col'}>
                    <Time/>
                    <Search />
                </div>
            </>
        );
    }
})
