import {defineComponent} from 'vue'

export default defineComponent({
    name: 'App',
    setup(props, ctx) {
        return () => (
            <>

                <router-view/>
            </>
        );
    }
})
