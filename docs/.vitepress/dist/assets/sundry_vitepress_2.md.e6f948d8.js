import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.edbfdbf1.js";const C=JSON.parse('{"title":"项目结构配置解析","description":"","frontmatter":{},"headers":[],"relativePath":"sundry/vitepress/2.md","filePath":"sundry/vitepress/2.md"}'),l={name:"sundry/vitepress/2.md"},o=p(`<h1 id="项目结构配置解析" tabindex="-1">项目结构配置解析 <a class="header-anchor" href="#项目结构配置解析" aria-label="Permalink to &quot;项目结构配置解析&quot;">​</a></h1><blockquote><p>经过上一节的一通操作已经拥有了一个没有任何配置的vitepress项目了，你也发现了没有配置空空如也，接下来我们来配置丰富一下这个项目。</p></blockquote><p><strong>当前你的项目结构应该是这样：</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.vitepress</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">**</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.md</span></span>
<span class="line"><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node_modules</span></span>
<span class="line"><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package.json</span></span>
<span class="line"><span style="color:#B392F0;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn.lock</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.vitepress</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">└─</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">**</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.md</span></span>
<span class="line"><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node_modules</span></span>
<span class="line"><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package.json</span></span>
<span class="line"><span style="color:#6F42C1;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn.lock</span></span></code></pre></div><p>一个 VitePress 站点必要的配置文件是 <code>.vitepress/config.js</code>，它应当导出一个 JavaScript 对象。</p><p>动手吧！在<code>.vitepress</code>下创建一个<code>config.js</code>文件，并写入以下内容：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">mmodule.exports </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    title: </span><span style="color:#9ECBFF;">&#39;VitePress&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    description: </span><span style="color:#9ECBFF;">&#39;这是一句描述。&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    base: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    themeConfig: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        logo: </span><span style="color:#9ECBFF;">&#39;/images/avatar.jpg&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 主导航（顶部的导航）</span></span>
<span class="line"><span style="color:#E1E4E8;">        nav: [</span></span>
<span class="line"><span style="color:#E1E4E8;">            {</span></span>
<span class="line"><span style="color:#E1E4E8;">                text: </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                    { text: </span><span style="color:#9ECBFF;">&#39;vitepress&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;/vitepress/intro&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">                ]</span></span>
<span class="line"><span style="color:#E1E4E8;">            },</span></span>
<span class="line"><span style="color:#E1E4E8;">            { text: </span><span style="color:#9ECBFF;">&#39;我自己&#39;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&#39;&#39;</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">        ],</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 侧边导航</span></span>
<span class="line"><span style="color:#E1E4E8;">        sidebar: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            </span><span style="color:#9ECBFF;">&#39;/vitepress&#39;</span><span style="color:#E1E4E8;">: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                {</span></span>
<span class="line"><span style="color:#E1E4E8;">                    text: </span><span style="color:#9ECBFF;">&quot;VitePress搭建记录&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                    items: [</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            text: </span><span style="color:#9ECBFF;">&quot;什么是VitePress?&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            link: </span><span style="color:#9ECBFF;">&quot;/vitepress/intro&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            text: </span><span style="color:#9ECBFF;">&quot;快速上手&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            link: </span><span style="color:#9ECBFF;">&quot;/vitepress/1&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        },</span></span>
<span class="line"><span style="color:#E1E4E8;">                        {</span></span>
<span class="line"><span style="color:#E1E4E8;">                            text: </span><span style="color:#9ECBFF;">&quot;项目结构配置解析&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">                            link: </span><span style="color:#9ECBFF;">&quot;/vitepress/2&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">                        }</span></span>
<span class="line"><span style="color:#E1E4E8;">                    ],</span></span>
<span class="line"><span style="color:#E1E4E8;">                },</span></span>
<span class="line"><span style="color:#E1E4E8;">            ]</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 菜单中文化</span></span>
<span class="line"><span style="color:#E1E4E8;">        outlineTitle: </span><span style="color:#9ECBFF;">&#39;本页目录&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        darkModeSwitchLabel: </span><span style="color:#9ECBFF;">&#39;切换主题&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        sidebarMenuLabel: </span><span style="color:#9ECBFF;">&#39;菜单&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        returnToTopLabel: </span><span style="color:#9ECBFF;">&#39;回到顶部&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        docFooter: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            prev: </span><span style="color:#9ECBFF;">&#39;上一页&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">            next: </span><span style="color:#9ECBFF;">&#39;下一页&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 社交链接</span></span>
<span class="line"><span style="color:#E1E4E8;">        socialLinks: [{ icon: </span><span style="color:#9ECBFF;">&quot;github&quot;</span><span style="color:#E1E4E8;">, link: </span><span style="color:#9ECBFF;">&quot;https://github.com&quot;</span><span style="color:#E1E4E8;"> }]</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">mmodule.exports </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    title: </span><span style="color:#032F62;">&#39;VitePress&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    description: </span><span style="color:#032F62;">&#39;这是一句描述。&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    base: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    themeConfig: {</span></span>
<span class="line"><span style="color:#24292E;">        logo: </span><span style="color:#032F62;">&#39;/images/avatar.jpg&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 主导航（顶部的导航）</span></span>
<span class="line"><span style="color:#24292E;">        nav: [</span></span>
<span class="line"><span style="color:#24292E;">            {</span></span>
<span class="line"><span style="color:#24292E;">                text: </span><span style="color:#032F62;">&#39;vitepress&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                items: [</span></span>
<span class="line"><span style="color:#24292E;">                    { text: </span><span style="color:#032F62;">&#39;vitepress&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;/vitepress/intro&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">                ]</span></span>
<span class="line"><span style="color:#24292E;">            },</span></span>
<span class="line"><span style="color:#24292E;">            { text: </span><span style="color:#032F62;">&#39;我自己&#39;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&#39;&#39;</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">        ],</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 侧边导航</span></span>
<span class="line"><span style="color:#24292E;">        sidebar: {</span></span>
<span class="line"><span style="color:#24292E;">            </span><span style="color:#032F62;">&#39;/vitepress&#39;</span><span style="color:#24292E;">: [</span></span>
<span class="line"><span style="color:#24292E;">                {</span></span>
<span class="line"><span style="color:#24292E;">                    text: </span><span style="color:#032F62;">&quot;VitePress搭建记录&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                    items: [</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            text: </span><span style="color:#032F62;">&quot;什么是VitePress?&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            link: </span><span style="color:#032F62;">&quot;/vitepress/intro&quot;</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            text: </span><span style="color:#032F62;">&quot;快速上手&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            link: </span><span style="color:#032F62;">&quot;/vitepress/1&quot;</span></span>
<span class="line"><span style="color:#24292E;">                        },</span></span>
<span class="line"><span style="color:#24292E;">                        {</span></span>
<span class="line"><span style="color:#24292E;">                            text: </span><span style="color:#032F62;">&quot;项目结构配置解析&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">                            link: </span><span style="color:#032F62;">&quot;/vitepress/2&quot;</span></span>
<span class="line"><span style="color:#24292E;">                        }</span></span>
<span class="line"><span style="color:#24292E;">                    ],</span></span>
<span class="line"><span style="color:#24292E;">                },</span></span>
<span class="line"><span style="color:#24292E;">            ]</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 菜单中文化</span></span>
<span class="line"><span style="color:#24292E;">        outlineTitle: </span><span style="color:#032F62;">&#39;本页目录&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        darkModeSwitchLabel: </span><span style="color:#032F62;">&#39;切换主题&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        sidebarMenuLabel: </span><span style="color:#032F62;">&#39;菜单&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        returnToTopLabel: </span><span style="color:#032F62;">&#39;回到顶部&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        docFooter: {</span></span>
<span class="line"><span style="color:#24292E;">            prev: </span><span style="color:#032F62;">&#39;上一页&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">            next: </span><span style="color:#032F62;">&#39;下一页&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 社交链接</span></span>
<span class="line"><span style="color:#24292E;">        socialLinks: [{ icon: </span><span style="color:#032F62;">&quot;github&quot;</span><span style="color:#24292E;">, link: </span><span style="color:#032F62;">&quot;https://github.com&quot;</span><span style="color:#24292E;"> }]</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><p>tips: 所有自建文件都应该在<code>docs</code>文件夹下。静态文件（图片啥的）存放在 <code>docs/public/**</code> 下， 直接使用<code>/**</code>根目录访问。 例如logo。</p><p>自己动手 --&gt; 创建配置文件中的 <code>文件夹</code> 以及 <code>相关文件</code></p><p><strong>最后的项目结构应该是这样：</strong></p><div class="language-shell vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#79B8FF;">.</span></span>
<span class="line"><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">docs</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">.vitepress</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">config.js</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">**</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">public/images/</span><span style="color:#79B8FF;">*</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">vitepress</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">intro.md</span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">**</span><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#B392F0;">│</span><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">index.md</span></span>
<span class="line"><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">node_modules</span></span>
<span class="line"><span style="color:#B392F0;">├─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">package.json</span></span>
<span class="line"><span style="color:#B392F0;">└─</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">yarn.lock</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#005CC5;">.</span></span>
<span class="line"><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">docs</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">.vitepress</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">config.js</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">└─</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">**</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">public/images/</span><span style="color:#005CC5;">*</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">vitepress</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">intro.md</span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">└─</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">**</span><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6F42C1;">│</span><span style="color:#24292E;">  </span><span style="color:#032F62;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">index.md</span></span>
<span class="line"><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">node_modules</span></span>
<span class="line"><span style="color:#6F42C1;">├─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">package.json</span></span>
<span class="line"><span style="color:#6F42C1;">└─</span><span style="color:#24292E;"> </span><span style="color:#032F62;">yarn.lock</span></span></code></pre></div><p>想要了解更多请访问官网：<a href="https://vitepress.dev/" target="_blank" rel="noreferrer">https://vitepress.dev/</a></p><p>更多功能自定义请百度：<a href="www.baidu.com">www.baidu.com</a></p>`,13),e=[o];function c(t,r,E,y,i,F){return n(),a("div",null,e)}const u=s(l,[["render",c]]);export{C as __pageData,u as default};
