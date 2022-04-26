import {defineComponent} from 'vue'

import Login from "@/components/Login";

export default defineComponent({
    name: 'Login',
    setup(props, ctx) {
        return () => (
            <>
                <Login/>
            </>
        );
    }
})
