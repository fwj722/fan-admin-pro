<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">个性化设置</h3>

      <div class="drawer-item">
        <span>主题色</span>
        <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="themeChange" />
      </div>

      <div class="drawer-item">
        <span>开启Tags</span>
        <el-switch v-model="tagsView" class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>Tags位置</span>
        <el-radio-group v-model="tagsViewPos" :disabled="!tagsView" size="mini" style="float:right;">
          <el-radio-button label="top">top</el-radio-button>
          <el-radio-button label="bottom">bottom</el-radio-button>
        </el-radio-group>
      </div>

      <div class="drawer-item">
        <span>顶部固定</span>
        <el-switch v-model="fixedHeader" class="drawer-switch" />
      </div>

      <div class="drawer-item">
        <span>显示Logo</span>
        <el-switch v-model="sidebarLogo" class="drawer-switch" />
      </div>

      <el-divider></el-divider>

       <div class="drawer-item">
        <span>主题色</span>
        <theme-picker style="float: right;height: 26px;margin: -3px 8px 0 0;" @change="themeChange" />
      </div>

    </div>
  </div>
</template>

<script>
import ThemePicker from '@/components/ThemePicker'

export default {
  components: { ThemePicker },
  data () {
    return {}
  },
  computed: {
    fixedHeader: {
      get () {
        return this.$store.state.settings.fixedHeader
      },
      set (val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'fixedHeader',
          value: val
        })
      }
    },
    tagsView: {
      get () {
        return this.$store.state.settings.tagsView
      },
      set (val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'tagsView',
          value: val
        })
      }
    },
    tagsViewPos: {
      get () {
        return this.$store.state.settings.tagsViewPos
      },
      set (val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'tagsViewPos',
          value: val
        })
      }
    },
    sidebarLogo: {
      get () {
        return this.$store.state.settings.sidebarLogo
      },
      set (val) {
        this.$store.dispatch('settings/changeSetting', {
          key: 'sidebarLogo',
          value: val
        })
      }
    }
  },
  methods: {
    themeChange (val) {
      this.$store.dispatch('settings/changeSetting', {
        key: 'theme',
        value: val
      })
    },
    logoBgColorChange (val) {
      this.$store.dispatch('settings/changeLogoBgColorSetting', {
        key: 'logoBgColor',
        value: val
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, .85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, .65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right
  }
}
</style>
