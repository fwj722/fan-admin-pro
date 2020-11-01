import defaultSettings from '@/settings'

const title = defaultSettings.title || 'vue-vfanui-pro'

export default function getPageTitle (pageTitle) {
  if (pageTitle) {
    return `${pageTitle} - ${title}`
  }
  return `${title}`
}