import {defineComponent} from 'vue'

export default defineComponent({
    name: 'Home',
    setup(props, ctx) {
        return () => (
            <>
                <h1>Home</h1>
            </>
        );
    }
})
