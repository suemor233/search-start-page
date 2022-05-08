import {defineComponent, PropType, Ref} from 'vue'
import {useInput} from "@/stores/inputState";

export default defineComponent({
  setup(props, ctx) {
       const input = useInput()
    return () => (
      <>
          {
              input.showAny ?
                  <div class={'absolute p-5 transition duration-200 animate__animated animate__backInDown'}>
                      <iframe width="160" height="100"
                              src="https://i.tianqi.com?c=code&id=81&color=%23FFFFFF&icon=1&site=10"/>
                  </div>: ''
          }

      </>
    )
  },
})
