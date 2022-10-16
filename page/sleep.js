import { Sleep } from '@zos/sensor'
import { createWidget, widget, align, text_style } from '@zos/ui'
import { replace } from '@zos/router'

Page({
    state: {
        wakeStage: 0,
        remStage: 0,
        lightStage: 0,
        deepStage: 0
    },
  build() {
    const sleep = new Sleep()
    const { score } = sleep.getInfo()
    const sleepStageConstants = sleep.getStageConstantObj()
    const stage = sleep.getStage()

    stage.forEach((i) => {
        const { model, start, stop } = i

        if (model === sleepStageConstants.WAKE_STAGE) {
            this.state.wakeStage += (stop-start)
        }

        if (model === sleepStageConstants.REM_STAGE) {
            this.state.remStage += (stop-start)
        }

        if (model === sleepStageConstants.LIGHT_STAGE) {
            this.state.lightStage += (stop-start)
        }

        if (model === sleepStageConstants.DEEP_STAGE) {
            this.state.deepStage += (stop-start)
        }
    })

    createWidget(widget.TEXT, {
        x: 0,
        y: 0,
        w: 600,
        h: 200,
        color: 0xffffff,
        text_size: 36,
        text_style: text_style.NONE,
        text: "Sleep score: " + score + " / 100",
    })

    createWidget(widget.TEXT, {
        x: 0,
        y: 100,
        w: 600,
        h: 200,
        color: 0xffffff,
        text_size: 36,
        text_style: text_style.NONE,
        text: "Wake stage: " + this.state.wakeStage + " minutes"
    })

    createWidget(widget.TEXT, {
        x: 0,
        y: 200,
        w: 600,
        h: 200,
        color: 0xffffff,
        text_size: 36,
        text_style: text_style.NONE,
        text: `REM stage: ${this.state.remStage}` + " minutes"
    })
    
    createWidget(widget.TEXT, {
        x: 0,
        y: 300,
        w: 600,
        h: 200,
        color: 0xffffff,
        text_size: 36,
        text_style: text_style.NONE,
        text: `Light stage: ${this.state.lightStage}` + " minutes"
    })

    createWidget(widget.TEXT, {
        x: 0,
        y: 400,
        w: 600,
        h: 200,
        color: 0xffffff,
        text_size: 36,
        text_style: text_style.NONE,
        text: `Deep stage: ${this.state.deepStage}` + " minutes"
    })

    // Navigation

    createWidget(widget.BUTTON, {
        x: 0,
        y: 500,
        w: 100,
        h: 50,
        radius: 12,
        normal_color: 0xfc6950,
        press_color: 0xfeb4a8,
        text: "See Shower",
        click_func: () => {
          replace({
            url: 'page/index',
          })
        }
      })

    createWidget(widget.BUTTON, {
        x: 300,
        y: 500,
        w: 100,
        h: 50,
        radius: 12,
        normal_color: 0xfc6950,
        press_color: 0xfeb4a8,
        text: "See Recommendation",
        click_func: () => {
          replace({
            url: 'page/recommendation',
          })
        }
      })

  },
})