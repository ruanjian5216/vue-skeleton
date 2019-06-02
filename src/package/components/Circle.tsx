import { Component } from 'vue-property-decorator'
import BaseComponent from '../BaseComponent'
import Vue from 'vue'
import style from '../style/style.less'

@Component
class CircleCom extends BaseComponent {
  public static componentName: string = 'Circle'
  // tslint:disable-next-line:no-shadowed-variable
  public static install = Vue => Vue.component(CircleCom.componentName, CircleCom)
  public name: string = 'Circle'
  public mounted() {
    // tslint:disable-next-line:no-console
    console.log('Circle')
  }
  public render(h) {
    const { type, title = false, options, loading = false, active = false, start = true, center = false, end = false } = this.$props
    const { width = '100%', size='default' } = options

    this.$nextTick(() => {
      console.log(this.$el.clientWidth)
    })
    const styleC = {
      width: width,
      height: width,
      // margin: '15%',
      background: '#ebebeb',
      'border-radius': '50%',
      overflow: 'hidden',
      margin: 'auto'
    }
    return (
      <div class={[style.circle]}>
        <div style={[styleC]} class={[active ? style.progActive : style.prog]}></div>
        {/* <div style={[flag === 'center' ? styleC : '']} class={[active ? style.progActive : style.prog]}></div>
        <div style={[flag === 'end' ? styleC : '']} class={[active ? style.progActive : style.prog]}></div> */}
      </div>
    )
    
  }
}

export default CircleCom
