import {defineComponent, ref, watch} from 'vue'
import Search from '@/components/Search'
import Time from '@/components/Time'
import Weather from '@/components/Weather'
import Navigation from '@/components/Navigation'

export default defineComponent({
  setup(props, ctx) {
    const isFocus = ref(false)

    return () => (
      <>
        <main class={'fixed inset-0 z-10'}>
          <Weather />
                <div class={'w-full h-full flex justify-center'}>
                    <div class={'w-9/12 max-w-4xl flex flex-col '}>
                        <div class={'flex-2 flex justify-center items-end'}>
                            <Time/>
                        </div>
                        <div class={'flex-1'}>
                            <Search onIsFocus={(state) => {isFocus.value = state}}/>
                        </div>
                        <div class={'flex-4'}>
                            <Navigation/>
                        </div>
                    </div>

                </div>

        </main>
        <div
          class={`h-screen bg-main-bk bg-no-repeat bg-center bg-cover overflow-hidden transition duration-500 ease-in-out ${
            isFocus.value ? 'blur-md' : ''
          }`}
        />
      </>
    )
  },
})
