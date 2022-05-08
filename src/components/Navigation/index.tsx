import {defineComponent, watch} from 'vue'
import Icon from "@/components/Icon";
import {NavDefaultConfigs} from "@/configs.default";
import {INavItem} from "@/types/INavItem";
import './index.css'
import {useInput} from "@/stores/inputState";
export default defineComponent({
    setup(props, ctx) {
        const input = useInput()

        return () => (
            <>
                {
                    (input.showAny && !input.popSelectShow)?
                    <section class={['navi-items animate__animated animate__fadeIn']}>
                        {
                            NavDefaultConfigs.map((item: INavItem) => {
                                return (
                                    <div class={'flex flex-col'}>
                                        <a style={{backgroundColor: `${item.color}`}} href={item.url}
                                           target="view_window">
                                            <Icon name={item.icon}/>
                                        </a>
                                        <p>{item.name}</p>
                                    </div>
                                )

                            })
                        }
                    </section> :''
                }

            </>
        );
    }
})
