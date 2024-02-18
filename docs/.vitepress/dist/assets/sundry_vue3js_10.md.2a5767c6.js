import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.edbfdbf1.js";const d=JSON.parse('{"title":"配置自动导入Vue组件","description":"","frontmatter":{},"headers":[],"relativePath":"sundry/vue3js/10.md","filePath":"sundry/vue3js/10.md"}'),l={name:"sundry/vue3js/10.md"},o=p(`<h1 id="配置自动导入vue组件" tabindex="-1">配置自动导入Vue组件 <a class="header-anchor" href="#配置自动导入vue组件" aria-label="Permalink to &quot;配置自动导入Vue组件&quot;">​</a></h1><h2 id="插件安装" tabindex="-1">插件安装 <a class="header-anchor" href="#插件安装" aria-label="Permalink to &quot;插件安装&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">-D</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unplugin-auto-import</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">unplugin-vue-components</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">-D</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unplugin-auto-import</span><span style="color:#24292E;"> </span><span style="color:#032F62;">unplugin-vue-components</span></span></code></pre></div><h2 id="然后-在你的vite-config-ts或vite-config-js文件中添加相应的插件配置" tabindex="-1">然后，在你的vite.config.ts或vite.config.js文件中添加相应的插件配置： <a class="header-anchor" href="#然后-在你的vite-config-ts或vite-config-js文件中添加相应的插件配置" aria-label="Permalink to &quot;然后，在你的vite.config.ts或vite.config.js文件中添加相应的插件配置：&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> AutoImport </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { NaiveUiResolver } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 自动导入</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">AutoImport</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">      imports:[</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&#39;@vueuse/core&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#9ECBFF;">&quot;vue-router&quot;</span></span>
<span class="line"><span style="color:#E1E4E8;">      ],</span></span>
<span class="line"><span style="color:#E1E4E8;">      dts:</span><span style="color:#9ECBFF;">&#39;src/auto-import.d.ts&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 路径下自动生成文件夹存放全局指令</span></span>
<span class="line"><span style="color:#E1E4E8;">      resolvers: [NaiveUiResolver] </span><span style="color:#6A737D;">// 可以添加自定义resolver来自定义导入规则</span></span>
<span class="line"><span style="color:#E1E4E8;">    }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  ],</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> AutoImport </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unplugin-auto-import/vite&#39;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { NaiveUiResolver } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;unplugin-vue-components/resolvers&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// https://vitejs.dev/config/</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// ...</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 自动导入</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">AutoImport</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">      imports:[</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&#39;@vueuse/core&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#032F62;">&quot;vue-router&quot;</span></span>
<span class="line"><span style="color:#24292E;">      ],</span></span>
<span class="line"><span style="color:#24292E;">      dts:</span><span style="color:#032F62;">&#39;src/auto-import.d.ts&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 路径下自动生成文件夹存放全局指令</span></span>
<span class="line"><span style="color:#24292E;">      resolvers: [NaiveUiResolver] </span><span style="color:#6A737D;">// 可以添加自定义resolver来自定义导入规则</span></span>
<span class="line"><span style="color:#24292E;">    }),</span></span>
<span class="line"><span style="color:#24292E;">  ],</span></span>
<span class="line"><span style="color:#24292E;">})</span></span></code></pre></div>`,5),e=[o];function t(c,r,i,E,y,u){return n(),a("div",null,e)}const F=s(l,[["render",t]]);export{d as __pageData,F as default};
