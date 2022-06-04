import { defineComponent, reactive, ref, watch } from 'vue'
import Icon from '@/components/Icon'
import { NavDefaultConfigs } from '@/configs.default'
import { INavItem } from '@/types/INavItem'
import './index.css'
import { useInput } from '@/stores/inputState'
import { FormInst, useMessage } from 'naive-ui'
import { useNavList } from '@/stores/navList'

export default defineComponent({
  setup(props, ctx) {
    const input = useInput()
    const navData = useNavList()
    const modelShow = ref<boolean>(false)
    const formRef = ref<FormInst | null>(null)
    const toast = useMessage()
    let inputValue = reactive<INavItem>({
      name: '',
      url: '',
      icon: '',
      color: '',
    })
    const handleAdd = (name: string) => {
      if (name === '自定义') {
        toast.info('抱歉目前暂不支持自定义，如需自定义请提交 issues',  { duration: 5000 })
      }
    }

    return () => (
      <>
        {input.showAny && !input.popSelectShow ? (
          <section class={['navi-items animate__animated animate__fadeIn']}>
            {navData.navList.map((item) => {
              return (
                <div class={'flex flex-col'} key={item.name}>
                  <a
                    style={{ backgroundColor: `${item.color}` }}
                    onClick={() => handleAdd(item.name)}
                    href={item.url}
                    target="_blank"
                  >
                    <Icon name={item.icon} />
                  </a>
                  <p>{item.name}</p>
                </div>
              )
            })}
          </section>
        ) : (
          ''
        )}
      </>
    )
  },
})
