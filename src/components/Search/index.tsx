import {computed, defineComponent, reactive, ref, watch} from 'vue'

import { SearchOutline } from '@vicons/ionicons5'
import { Icon } from '@vicons/utils'
import { getBaiduTip } from '@/api'
import TipsBox from "@/components/TipsBox";
import {ITips} from "@/types/tips";

export default defineComponent({
  setup(props, ctx) {
      const inputValue = ref<string>('')
      const tips = reactive<ITips[]>([])
      const tipsShow = ref<boolean>(false)
      let watchStart = true
           watch(inputValue,async ()=>{
               if (watchStart){
                   const res = await getBaiduTip({
                       ie: 'utf-8',
                       json: 1,
                       prod: 'pc',
                       wd: inputValue.value,
                   })
                   tips.length = 0
                   Object.assign(tips,res.g)
                   tipsShow.value = true
               }
               if (inputValue.value.length === 0){
                   tipsShow.value = false
               }

          })

        return () => (
          <>
                  <div  class={'flex relative max-w-3xl justify-start m-auto top-33'}>
                      <Icon color="#312C80" size="38" class={'z-10 box-border p-1 ml-1'}>
                          <SearchOutline/>
                      </Icon>
                      <input
                          type="text"
                          v-model={inputValue.value}
                          onBlur={()=>setTimeout(()=>{
                              tipsShow.value = false
                          },150) }
                          onFocus={()=>tipsShow.value = true}
                          onInput={()=>watchStart = true}
                          placeholder={'请输入内容'}
                          onKeydown={(e)=>e.code === 'Enter' ? window.open(`https://www.baidu.com/s?wd=${inputValue.value}`,'_blank') : ''}
                          class={
                              'placeholder-white pl-12 w-full max-w-3xl absolute border-2 bg-gray-500 border-opacity-80 bg-opacity-50 backdrop-blur-md text-2xl font-sans font-extralight text-white rounded-2xl box-border p-1 border-white border-opacity-90 focus:shadow-2xl focus:outline-none'
                          }
                      />
                      <TipsBox tips={tips} tipsShow={tipsShow} onTipsData={(tips:string)=>{
                          inputValue.value = tips
                          window.open(`https://www.baidu.com/s?wd=${inputValue.value}`,'_blank')
                      }}
                      onSelectTips={(tips:string)=>{
                          watchStart = false
                          inputValue.value = tips
                      }}
                      />
                  </div>


          </>
        )
  },
})


