import { createWidget, widget, align, prop, text_style } from '@zos/ui'

import { Time } from '@zos/sensor'
import { replace } from '@zos/router'
Page({
  state: {
    isShowering: false,
    showerTemperature: 0,
    showerDuration: 0,
    startTime: 0,
    endTime: 0,
  },
  build() {
    const time = new Time()

    const text = createWidget(widget.TEXT, {
      x: 80,
      y: 100,
      w: 600,
      h: 200,
      color: 0xffffff,
      text_size: 36,
      text_style: text_style.NONE,
      text: "Start Shower"
    })

    createWidget(widget.BUTTON, {
      x: (480 - 400) / 2,
      y: 240,
      w: 400,
      h: 100,
      radius: 12,
      normal_color: 0x004aad,
      press_color: 0x5ce1e6,
      text: "Start",
      click_func: (button_widget) => {
        const currentTime = time.getTime()
        if (!this.state.isShowering) {
          this.state.startTime = currentTime
          this.state.endTime = currentTime
          text.setProperty(prop.MORE, {
            x: 80,
            y: 100,
            w: 600,
            h: 200,
            text: "Showering..."
          })
        } else {
          this.state.endTime = currentTime
          this.state.showerDuration = (this.state.endTime - this.state.startTime) / 1000
          this.state.showerTemperature = this.getBodyTemperature()
          text.setProperty(prop.MORE, {
            x: 80,
            y: 100,
            w: 600,
            h: 200,
            text: `Shower lasted ${this.state.showerDuration} seconds\n Body Temperature: ${this.state.showerTemperature} °C`,
            text_size: 20,
          })
        }

        this.state.isShowering = !this.state.isShowering
        button_widget.setProperty(prop.MORE, {
          x: (480 - 400) / 2,
          y: 240,
          w: 400,
          h: 100,
          radius: 12,
          text: this.state.isShowering ? "Stop" : "Start"
        })
      }
    })

    createWidget(widget.BUTTON, {
      x: 300,
      y: 400,
      w: 100,
      h: 50,
      radius: 12,
      normal_color: 0x004aad,
      press_color: 0x5ce1e6,
      text: "See Sleep",
      click_func: () => {
        replace({
          url: 'page/sleep',
        })
      }
    })


  },
  getBodyTemperature() {
    return 38
  }
})