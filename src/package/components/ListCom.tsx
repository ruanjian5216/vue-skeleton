import { Component } from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import Vue from 'vue'
import style from '../style/style.less'

@Component
class ListCom extends BaseComponent {
  public static componentName: string = 'ListCom'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(ListCom.componentName, ListCom)
  public name: string = 'Circle'
  public mounted() {
    // tslint:disable-next-line:no-console
    console.log('Circle')
  }
  public render(h) {
    const { type, title = false, options, loading = false, active = false, start = true, center = false, end = false } = this.$props
    const { row = 4, lineHight = 20, width = '100%', height = '20px' } = options
    const arr = Array(+row).fill(0)

    return (
      <div class={[style.listCom]}>
        <ul style="{width: 100%}">
            {
              arr.map((item, index) => (
                <li
                  key={index}
                  class={[active ? style.progActive : style.prog]}
                  style={{
                    height: height,
                    marginBottom: lineHight * 0.6 + 'px',
                    width: index === arr.length - 1 ? '60%' : '100%'
                  }}
                />
              ))
            }
          </ul>
      </div>
    )
  }
}

export default ListCom