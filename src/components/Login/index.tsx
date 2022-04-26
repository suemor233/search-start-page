import {defineComponent} from 'vue'
import classes from "./index.module.scss"
export default defineComponent({
    name: 'Login',
    setup(props, ctx) {
        return () => (
            <>
                <div class={classes.Test}>
                    <h1>Vue3 + TSX</h1>
                </div>
            </>
        );
    }
})
