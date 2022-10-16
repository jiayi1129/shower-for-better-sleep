import { createWidget, widget, align, text_style } from '@zos/ui'
import { replace } from '@zos/router'

Page({
  build() {

    createWidget(widget.TEXT, {
        x: 0,
        y: 100,
        w: 600,
        h: 200,
        color: 0xffffff,
        text_size: 20,
        text_style: text_style.NONE,
        text: "You should shower at 11pm tonight",
    })

    createWidget(widget.TEXT, {
        x: 0,
        y: 200,
        w: 600,
        h: 200,
        color: 0xffffff,
        text_size: 20,
        text_style: text_style.NONE,
        text: "You should shower at 40-41 °C"
    })

    createWidget(widget.TEXT, {
        x: 0,
        y: 300,
        w: 600,
        h: 200,
        color: 0xffffff,
        text_size: 20,
        text_style: text_style.NONE,
        text: "You should sleep at 12am"
    })

    createWidget(widget.BUTTON, {
        x: 0,
        y: 400,
        w: 100,
        h: 50,
        radius: 12,
        normal_color: 0xfc6950,
        press_color: 0xfeb4a8,
        text: "See Sleep",
        click_func: () => {
          replace({
            url: 'page/sleep',
          })
        }
      })


  },
})