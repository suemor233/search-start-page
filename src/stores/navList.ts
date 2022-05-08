import {acceptHMRUpdate, defineStore} from "pinia";
import {useStorage} from "@vueuse/core";
import {NavDefaultConfigs} from "@/configs.default";

export const useNavList = defineStore('navList', () => {
    const navList = useStorage('navList',NavDefaultConfigs)

    return {
        navList
    }
})

if (import.meta.hot)
    import.meta.hot.accept(acceptHMRUpdate(useNavList, import.meta.hot))
