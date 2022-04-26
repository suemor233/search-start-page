import {defineComponent} from 'vue'

export default defineComponent({
    name: '404',
    setup(props, ctx) {
        return () => (
            <>
                <h1>404</h1>
            </>
        );
    }
})
