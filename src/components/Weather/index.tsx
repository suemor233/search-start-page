import {defineComponent, PropType, Ref} from 'vue'

export default defineComponent({
    props:{
        isFocus:{
            type:Object as PropType<Ref<boolean>>,
            require:true
        }
    },
  setup(props, ctx) {
        const {isFocus} = props
    return () => (
      <>
          {
              !isFocus?.value ?
                  <div class={'absolute p-5 transition duration-200 animate__animated animate__backInDown'}>
                      <iframe width="160" height="100"
                              src="https://i.tianqi.com?c=code&id=81&color=%23FFFFFF&icon=1&site=10"></iframe>
                  </div>: ''
          }

      </>
    )
  },
})
