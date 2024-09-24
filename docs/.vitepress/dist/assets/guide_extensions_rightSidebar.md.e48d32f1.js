import{_ as s,o as n,c as a,a as e}from"./app.40ba1749.js";const h=JSON.parse('{"title":"\u53F3\u4FA7\u8FB9\u680F\u6269\u5C55","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u53F3\u4FA7\u8FB9\u680F\u6269\u5C55","slug":"\u53F3\u4FA7\u8FB9\u680F\u6269\u5C55-1","link":"#\u53F3\u4FA7\u8FB9\u680F\u6269\u5C55-1","children":[{"level":3,"title":"\u65B0\u5EFA designer-extensions/sidebar/index.vue","slug":"\u65B0\u5EFA-designer-extensions-sidebar-index-vue","link":"#\u65B0\u5EFA-designer-extensions-sidebar-index-vue","children":[]},{"level":3,"title":"\u65B0\u5EFAdesigner-extensions/index.ts(\u6269\u5C55\u51FD\u6570)","slug":"\u65B0\u5EFAdesigner-extensions-index-ts-\u6269\u5C55\u51FD\u6570","link":"#\u65B0\u5EFAdesigner-extensions-index-ts-\u6269\u5C55\u51FD\u6570","children":[]},{"level":3,"title":"main.ts \u6DFB\u52A0\u6267\u884C\u6269\u5C55\u51FD\u6570","slug":"main-ts-\u6DFB\u52A0\u6267\u884C\u6269\u5C55\u51FD\u6570","link":"#main-ts-\u6DFB\u52A0\u6267\u884C\u6269\u5C55\u51FD\u6570","children":[]}]},{"level":2,"title":"\u5982\u4F55\u4FEE\u6539\u8986\u76D6\u539F\u6765\u7684\u6A21\u5757","slug":"\u5982\u4F55\u4FEE\u6539\u8986\u76D6\u539F\u6765\u7684\u6A21\u5757","link":"#\u5982\u4F55\u4FEE\u6539\u8986\u76D6\u539F\u6765\u7684\u6A21\u5757","children":[]}],"relativePath":"guide/extensions/rightSidebar.md"}'),l={name:"guide/extensions/rightSidebar.md"},o=e(`<h1 id="\u53F3\u4FA7\u8FB9\u680F\u6269\u5C55" tabindex="-1">\u53F3\u4FA7\u8FB9\u680F\u6269\u5C55 <a class="header-anchor" href="#\u53F3\u4FA7\u8FB9\u680F\u6269\u5C55" aria-hidden="true">#</a></h1><div class="tip custom-block"><p class="custom-block-title">\u53F3\u4FA7\u8FB9\u680F\u6269\u5C55</p><p><code>pluginManager</code> \u63D0\u4F9B\u4E86registerRightSidebar\u65B9\u6CD5\u6269\u5C55\u53F3\u4FA7\u8FB9\u680F\u529F\u80FD\u6A21\u5757</p></div><p>\u53C2\u8003demo\u4ED3\u5E93\uFF1A <a href="https://gitee.com/kcz66/k-designer-demo" target="_blank" rel="noreferrer">https://gitee.com/kcz66/k-designer-demo</a></p><h2 id="\u53F3\u4FA7\u8FB9\u680F\u6269\u5C55-1" tabindex="-1">\u53F3\u4FA7\u8FB9\u680F\u6269\u5C55 <a class="header-anchor" href="#\u53F3\u4FA7\u8FB9\u680F\u6269\u5C55-1" aria-hidden="true">#</a></h2><p>\u5728src\u76EE\u5F55\u4E0B\u65B0\u5EFAdesigner-extensions \u6587\u4EF6\u76EE\u5F55\uFF0C\u4E0B\u9762\u662F\u4E00\u4E2A\u7B80\u5355\u6269\u5C55\u793A\u4F8B</p><h3 id="\u65B0\u5EFA-designer-extensions-sidebar-index-vue" tabindex="-1">\u65B0\u5EFA designer-extensions/sidebar/index.vue <a class="header-anchor" href="#\u65B0\u5EFA-designer-extensions-sidebar-index-vue" aria-hidden="true">#</a></h3><div class="language-vue"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#A6ACCD;">        \u6211\u662F\u4E00\u4E2A\u6269\u5C55\u6A21\u5757</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">div</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"><span style="color:#89DDFF;">&lt;/</span><span style="color:#F07178;">template</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre></div><h3 id="\u65B0\u5EFAdesigner-extensions-index-ts-\u6269\u5C55\u51FD\u6570" tabindex="-1">\u65B0\u5EFAdesigner-extensions/index.ts(\u6269\u5C55\u51FD\u6570) <a class="header-anchor" href="#\u65B0\u5EFAdesigner-extensions-index-ts-\u6269\u5C55\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">pluginManager</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">front-design</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u5B89\u88C5\u6269\u5C55</span></span>
<span class="line"><span style="color:#89DDFF;">export</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">function</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">setupDesignerExtensions</span><span style="color:#89DDFF;">():</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">  </span><span style="color:#676E95;">// \u6DFB\u52A0\u53F3\u4FA7\u6A21\u5757</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#A6ACCD;">pluginManager</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">registerRightSidebar</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#F07178;">    id</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">test_view</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    title</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">\u6269\u5C55</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">    </span><span style="color:#82AAFF;">component</span><span style="color:#89DDFF;">:</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">async</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">()</span><span style="color:#F07178;"> </span><span style="color:#C792EA;">=&gt;</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">await</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">import</span><span style="color:#F07178;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./sidebar/index.vue</span><span style="color:#89DDFF;">&quot;</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#F07178;">  </span><span style="color:#89DDFF;">}</span><span style="color:#F07178;">)</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre></div><h3 id="main-ts-\u6DFB\u52A0\u6267\u884C\u6269\u5C55\u51FD\u6570" tabindex="-1">main.ts \u6DFB\u52A0\u6267\u884C\u6269\u5C55\u51FD\u6570 <a class="header-anchor" href="#main-ts-\u6DFB\u52A0\u6267\u884C\u6269\u5C55\u51FD\u6570" aria-hidden="true">#</a></h3><div class="language-ts"><button title="Copy Code" class="copy"></button><span class="lang">ts</span><pre class="shiki"><code><span class="line"><span style="color:#89DDFF;">import</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span><span style="color:#F07178;"> </span><span style="color:#A6ACCD;">setupDesignerExtensions</span><span style="color:#F07178;"> </span><span style="color:#89DDFF;">}</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">from</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./designer-extensions</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;">// \u6267\u884C\u6269\u5C55\u51FD\u6570</span></span>
<span class="line"><span style="color:#82AAFF;">setupDesignerExtensions</span><span style="color:#A6ACCD;">()</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span></code></pre></div><h2 id="\u5982\u4F55\u4FEE\u6539\u8986\u76D6\u539F\u6765\u7684\u6A21\u5757" tabindex="-1">\u5982\u4F55\u4FEE\u6539\u8986\u76D6\u539F\u6765\u7684\u6A21\u5757 <a class="header-anchor" href="#\u5982\u4F55\u4FEE\u6539\u8986\u76D6\u539F\u6765\u7684\u6A21\u5757" aria-hidden="true">#</a></h2><p>\u5728\u6269\u5C55\u7EC4\u4EF6\u65F6\uFF0C\u9700\u8981\u4F20\u5165\u7684\u914D\u7F6Eid\u662F\u552F\u4E00\u7684\uFF0C\u5982\u679Cid\u4E00\u6837\u5219\u540E\u6CE8\u518C\u7EC4\u4EF6\u4F1A\u66FF\u6362\u539F\u6765\u7684\u7EC4\u4EF6\uFF0C\u6240\u4EE5\u6211\u4EEC\u53EF\u4EE5\u901A\u8FC7\u8BBE\u7F6Eid\u6765\u8986\u76D6\u539F\u6765\u53F3\u4FA7\u8FB9\u680F\u6A21\u5757</p><table><thead><tr><th>\u6A21\u5757\u540D</th><th>id</th></tr></thead><tbody><tr><td>\u5C5E\u6027</td><td>attribute_view</td></tr><tr><td>\u6837\u5F0F</td><td>style_view</td></tr><tr><td>\u4E8B\u4EF6</td><td>event_view</td></tr></tbody></table>`,14),p=[o];function t(r,c,i,d,F,D){return n(),a("div",null,p)}const g=s(l,[["render",t]]);export{h as __pageData,g as default};
