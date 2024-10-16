# 前言



## 简介

[VitePress](https://vitepress.dev/zh/) 使用 Markdown 编写的源内容，生成可以轻松部署在任何地方的静态 HTML 页面

VitePress 作为 [VuePress](https://v2.vuepress.vuejs.org/zh/) 的孪生兄弟，借助 [Vue 3](https://cn.vuejs.org/) 和 [vite](https://vitejs.cn/)，VitePress 提供了明显更好的 DX、更好的生产性能、更精致的默认主题以及更灵活的定制 API

::: details 基于vitepress的网站
[Vite](https://cn.vitejs.dev/)、[Rollup](https://rollupjs.org/)、[Pinia](https://pinia.vuejs.org/)、[VueUse](https://vueuse.org/)、[Vitest](https://vitest.dev/)、[D3](https://d3js.org/)、[UnoCSS](https://unocss.dev/)、[Iconify](https://iconify.design/) 等 [其他文档](https://www.vuetelescope.com/explore?framework.slug=vitepress)
:::


## 官方

它是搭建文档的 静态站点生成器(SSG) 最佳利器之一

* VitePress官网：https://vitepress.dev/zh/

* vite官网：https://cn.vitejs.dev/

::: details 其他静态站点生成器
[VuePress](https://v2.vuepress.vuejs.org/zh/)、[Docusaurus](https://docusaurus.io/)、[Astro](https://astro.build/)、[Modern.js](https://modernjs.dev/)、[docsify](https://docsify.js.org/)、[Docz](https://www.docz.site/)、[Nuxt](https://nuxt.com/)、[Jekyll](https://jekyllrb.com/)、[Hexo](https://hexo.io/zh-cn/)、[Hugo](https://gohugo.io/)、[idoc](https://wangchujiang.com/idoc/)、[Styleguidist](https://react-styleguidist.js.org/)、[Storybook](https://storybook.js.org/)、[Gatsby](https://www.gatsbyjs.com/)、[Eleventy](https://www.11ty.dev/)、[Publii](https://getpublii.com/)
:::

::: tip 说明
VitePress是一个仅支持ESM的软件包。不要使用 `require()` 来导入它，请参考 [Vite的故障排除指南](https://cn.vitejs.dev/guide/troubleshooting#this-package-is-esm-only) 

---

当使用 `require` 导入一个仅支持 ESM 的包时，会出现以下错误且文件无法被 require 加载

建议你通过以下方式将你的配置文件转换为 ESM 格式：

* 在邻近的 `package.json` 中添加 `"type": "module"`

* `vite.config.js/vite.config.ts` 重命名为 `vite.config.mjs/vite.config.mts`
:::

## 参考网站

* [GitHub仓库](https://github.com/vuejs/vitepress)

* [vite备用官网](https://vitejs.cn/)

* [Vuepress的主题](https://github.com/alex8088/vitepress-theme-vue)



# Markdown 语法大全

## 一、标题
使用 `#` 符号表示不同级别的标题，`#` 的数量对应标题级别。
例如：
```md
# 一级标题
## 二级标题
### 三级标题
```

## 二、段落
直接输入文本即可形成段落，段落之间用空行分隔。

## 三、强调
1. **斜体**：使用 `*` 或 `_` 包裹文本。
   - 例如：`*斜体文本*` 或 `_斜体文本_`。
2. **粗体**：使用 `**` 或 `__` 包裹文本。
   - 例如：`**粗体文本**` 或 `__粗体文本__`。
3. **粗斜体**：使用 `***` 或 `___` 包裹文本。
   - 例如：`***粗斜体文本***` 或 `___粗斜体文本___`。

## 四、列表
1. **有序列表**：使用数字加 `.` 开头。
   - 例如：
   ```md
   1. 第一项
   2. 第二项
   3. 第三项
   ```
2. **无序列表**：使用 `-`、`*` 或 `+` 开头。
   - 例如：
   ```md
   - 第一项
   * 第二项
   + 第三项
   ```

## 五、链接
1. **内联链接**：使用 `[链接文本](链接地址)` 的格式。
   - 例如：`[百度](https://www.baidu.com)`。
2. **参考式链接**：先在文档中定义链接，然后在需要使用的地方引用。
   - 例如：
   ```md
   [百度][1]
   [1]: https://www.baidu.com
   ```

## 六、图片
使用 `![图片描述](图片地址)` 的格式。
例如：`![美丽的风景](/path/to/image.jpg)`。

## 七、引用
使用 `>` 符号表示引用内容。
例如：
```md
> 这是一段引用的话。
```

## 八、代码块
1. **行内代码**：使用 ` `包裹代码。
   - 例如：`这是一段行内代码`。
2. **代码块**：使用三个反引号包裹代码，并可在开头反引号后指定代码语言。
   - 例如：
   ```
   ```python
   print("Hello, World!")
   ```
   ```

## 九、表格
使用 `|` 分隔列，`-` 分隔表头和内容，并且可以使用 `:` 来对齐列。
例如：
```md
| 列 1 | 列 2 | 列 3 |
| ---- | ---- | ---- |
| 内容 1 | 内容 2 | 内容 3 |
| 左对齐 | 居中 | 右对齐 |
| :---- | :----: | ----: |
```

## 十、分割线
使用三个或以上的 `-`、`*` 或 `_` 表示分割线。
例如：
```md
---
***
___
```

## 十一、任务列表
使用 `- [ ]` 表示未完成的任务，`- [x]` 表示已完成的任务。
例如：
```md
- [ ] 任务 1
- [x] 任务 2
```

## 十二、Emoji
直接输入 Emoji 代码即可显示 Emoji。
例如：`:tada:` 显示 🎉。

## 十三、折叠内容
使用 `<details>` 和 `<summary>` 标签。
例如：
```md
<details>
  <summary>点我展开</summary>
  折叠的内容。
</details>
```

## 十四、容器
使用 `:::` 包裹内容，并在开头指定容器类型。
例如：
```md
::: tip
这是一个提示容器。
:::
::: warning
这是一个警告容器。
:::

## 十五、脚注
使用 `[^脚注编号]` 定义脚注，在文档末尾使用 `[^脚注编号]: 脚注内容` 来解释脚注。
例如：
```md
这是一段带有脚注的文本[^1]。

[^1]: 这是脚注的内容。
```

## 十六、数学公式
使用 `$` 包裹行内数学公式，使用 `$$` 包裹块级数学公式。
例如：
```md
$E = mc^2$

$$\int_{a}^{b} f(x)dx$$