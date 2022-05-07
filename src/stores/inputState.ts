import {acceptHMRUpdate, defineStore} from "pinia";
import {ref} from "vue";

export const useInput = defineStore('input', () => {
    const showAny = ref<boolean>(true)

    return {
        showAny
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useInput, import.meta.hot))
