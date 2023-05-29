<template>
  <span @click="handleDownload">
    <slot />
  </span>
</template>

<script>
export default {
  name: 'GyDownload',
  props: {
    fullUrl: {
      type: String,
      default: '',
      require: true
    },
    fileName: {
      type: String,
      default: 'download'
    }
  },
  methods: {
    handleDownload() {
      try {
        if (!this.fullUrl) {
          console.log('未传入fullUrl')
          return
        }
        console.log('正在下载文件，请稍候...')
        // let realUrl = `${network}/dp${this.url}`
        let x = new XMLHttpRequest()
        x.open('GET', this.fullUrl, true)
        x.responseType = 'blob'
        x.onload = () => {
          let url = window.URL.createObjectURL(x.response)
          let a = document.createElement('a')
          a.href = url
          a.download = this.fileName
          a.click()
        }
        x.send()
      } catch (error) {
        console.error('下载文件失败')
      }
    }
  }
}
</script>

<style lang="less" scoped></style>
