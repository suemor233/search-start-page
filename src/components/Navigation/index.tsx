import { defineComponent, reactive, ref, watch } from 'vue'
import Icon from '@/components/Icon'
import { NavDefaultConfigs } from '@/configs.default'
import { INavItem } from '@/types/INavItem'
import './index.css'
import { useInput } from '@/stores/inputState'
import {
  FormInst,
  FormRules,
  NButton,
  NCard,
  NForm,
  NFormItem,
  NInput,
  NModal,
  NSpace, useMessage,
} from 'naive-ui'
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
        modelShow.value = true
      }
    }

    const rules: FormRules = {
      name: [
        {
          required: true,
          message: '请输入名称',
        },
      ],
      url: [
        {
          required: true,
          message: '请输入地址(如https://github.com)',
        },
      ],
      icon: [
        {
          required: true,
          message: '请输入图标(从iconfont获取，如 icon-twitter)',
        },
      ],
      color: [
        {
          required: true,
          message: '请输入16进制背景颜色(如#fff)',
        },
      ],
    }

    const handleValidateButtonClick = (e: MouseEvent) => {
      e.preventDefault()
      formRef.value?.validate(async (errors) => {
        if (errors) {
          return
        }
        navData.navList.splice(navData.navList.length - 1,0,inputValue)
        modelShow.value = false
        toast.success('添加成功')
        inputValue = reactive<INavItem>({
          name: '',
          url: '',
          icon: '',
          color: '',
        })

      })
    }


    return () => (
      <>
        {input.showAny && !input.popSelectShow ? (
          <section class={['navi-items animate__animated animate__fadeIn']}>
            {navData.navList.map((item: INavItem) => {
              return (
                <div class={'flex flex-col'} key={item.name}>
                  <a
                    style={{ backgroundColor: `${item.color}` }}
                    onClick={() => handleAdd(item.name)}
                    href={item.url}
                    target="view_window"
                  >
                    <Icon name={item.icon} />
                  </a>
                  <p>{item.name}</p>
                </div>
              )
            })}
            <NModal
              show={modelShow.value}
              class={'rounded-md'}
              positiveText={'确认'}
              negativeText={'取消'}
            >
              <NCard
                style={'width: 600px'}
                title="自定义导航"
                closable={true}
                onClose={() => (modelShow.value = false)}
              >
                <NForm
                  ref={formRef}
                  labelPlacement="left"
                  model={inputValue}
                  rules={rules}
                  labelAlign="right"
                >
                  <NFormItem path={'name'} label={'名称'}>
                    <NInput
                      v-model:value={inputValue.name}
                      placeholder={'请输入名称'}
                    />
                  </NFormItem>

                  <NFormItem path={'url'} label={'地址'}>
                    <NInput
                      v-model:value={inputValue.url}
                      placeholder={'请输入地址(如https://github.com)'}
                    />
                  </NFormItem>

                  <NFormItem path={'icon'} label={'图标'}>
                    <NInput
                      v-model:value={inputValue.icon}
                      placeholder={
                        '请输入图标(从iconfont获取，如 icon-twitter)'
                      }
                    />
                  </NFormItem>

                  <NFormItem path={'color'} label={'颜色'}>
                    <NInput
                      v-model:value={inputValue.color}
                      placeholder={'请输入16进制背景颜色(如#fff)'}
                    />
                  </NFormItem>

                  <NSpace justify={'end'}>
                    <NButton
                      type={'primary'}
                      onClick={handleValidateButtonClick}
                    >
                      确认
                    </NButton>
                  </NSpace>
                </NForm>
              </NCard>
            </NModal>
          </section>
        ) : (
          ''
        )}
      </>
    )
  },
})
