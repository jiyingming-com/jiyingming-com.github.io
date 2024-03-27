import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "弘道者姬英明",
  description: "姬轩辕皇帝第183世孙，姬宗氏太王第119世主宗宗子、中华道统传承人、中华八千年文明史探源发起人、《姬氏祖传经》、《姬氏道德经》传承人",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '中华道统', link: '/dao-tong'},
      { text: '姬氏祖传经', link: '/zu-chuan-jing' },
      { text: '姬氏道德经', link: '/dao-de-jing' },
	    { text: '圣龙山黄酒', link: '/huang-jiu'},
      { text: '关于', link: '/about' }
    ],

    sidebar: [
      {
        text: '弘道者姬英明',
        items: [
          { text: '中华道统', link: '/dao-tong' },
          { text: '姬氏祖传经', link: '/zu-chuan-jing' },
          { text: '姬氏道德经', link: '/dao-de-jing' },
          { text: '圣龙山黄酒', link: '/huang-jiu'}
        ]
      }
    ],

    // socialLinks: [
    //   { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    // ]
  }
})
