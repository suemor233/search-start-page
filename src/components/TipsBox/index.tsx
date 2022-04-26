import {defineComponent, PropType} from 'vue'
import {ITips} from "@/types/tips";

export default defineComponent({
    props:{
      tips:{
        type:Array as PropType<ITips[]>,
        required: true,
      }
    },
    setup(props, ctx) {
      const {tips} = props
        return () => (
            <>
              {
                tips.length > 0 ?(
                <div class={'bg-gray-500 w-full rounded-2xl bg-opacity-50 text-white absolute shadow-2xl  mt-3 transition duration-1000 ease-in-out'}>
                <ul>
              {
                tips.map(tip=>{
                return <li class={'font-sans text-lg hover:bg-gray-300 hover:-translate-x-1 p-2 transition duration-200 ease-in-out'} key={tip.q}>{tip.q}</li>
              })
              }
                </ul>
                </div>
                )
                  : null
              }

            </>
        );
    }
})
