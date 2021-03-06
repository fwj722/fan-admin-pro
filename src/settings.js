/*
 * @Description:
 * @Author: fanwenjing
 * @LastEditors: fanwenjing
 * @Date: 2020-11-02 10:20:16
 * @LastEditTime: 2020-11-26 10:31:20
 */
module.exports = {
  title: 'vue-vfanui-pro',

  /**
   * @type {boolean} true | false
   * @description 是否显示设置右面板
   */
  showSettings: true,

  /**
   * @type {boolean} true | false
   * @description 是否使用tagsView
   */

  tagsView: true,
  /**
   * @type {object} top：在顶部   bottom：在navbar下面
   * @description tags的位置，当为top时，tags在顶部navbar位置，为bottom时在navbar下面
   */
  tagsViewPos: 'top',

  /**
   * @type {boolean} true | false
   * @description 是否固定 header
   */
  fixedHeader: true,

  /**
   * @type {boolean} true | false
   * @description 是否在侧边栏中显示logo
   */
  sidebarLogo: true,

  /**
   * @type {string | array} 'production' | ['production', 'development']
   * @description 显示错误日志.
   * 默认值仅在生产环境中使用 production env
   * 如果还想在dev中使用它，可以使用 ['production', 'development']
   */
  errorLog: 'production',
  /* 颜色默认设置 */
  logoBgColor: 'black'
}
