import{_ as s,o as a,c as n,Q as p}from"./chunks/framework.edbfdbf1.js";const u=JSON.parse('{"title":"src别名、css预处理scss配置(Vite自2.6.0版本起已内置对sass的支持)","description":"","frontmatter":{},"headers":[],"relativePath":"sundry/vue3js/4.md","filePath":"sundry/vue3js/4.md"}'),l={name:"sundry/vue3js/4.md"},o=p(`<h1 id="src别名、css预处理scss配置-vite自2-6-0版本起已内置对sass的支持" tabindex="-1">src别名、css预处理scss配置(Vite自2.6.0版本起已内置对sass的支持) <a class="header-anchor" href="#src别名、css预处理scss配置-vite自2-6-0版本起已内置对sass的支持" aria-label="Permalink to &quot;src别名、css预处理scss配置(Vite自2.6.0版本起已内置对sass的支持)&quot;">​</a></h1><h2 id="别名配置" tabindex="-1">别名配置 <a class="header-anchor" href="#别名配置" aria-label="Permalink to &quot;别名配置&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> path </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;path&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 如果是TypeScript项目，确保正确导入path模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  resolve: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    alias: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#9ECBFF;">&#39;@&#39;</span><span style="color:#E1E4E8;">: path.</span><span style="color:#B392F0;">resolve</span><span style="color:#E1E4E8;">(__dirname, </span><span style="color:#9ECBFF;">&#39;src&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> path </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;path&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 如果是TypeScript项目，确保正确导入path模块</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  resolve: {</span></span>
<span class="line"><span style="color:#24292E;">    alias: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#032F62;">&#39;@&#39;</span><span style="color:#24292E;">: path.</span><span style="color:#6F42C1;">resolve</span><span style="color:#24292E;">(__dirname, </span><span style="color:#032F62;">&#39;src&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div><h2 id="css预处理scss配置" tabindex="-1">css预处理scss配置 <a class="header-anchor" href="#css预处理scss配置" aria-label="Permalink to &quot;css预处理scss配置&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineConfig } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vite&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> vue </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@vitejs/plugin-vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineConfig</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  css: {</span></span>
<span class="line"><span style="color:#E1E4E8;">    preprocessorOptions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      scss: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        additionalData: </span><span style="color:#9ECBFF;">\`\`</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">// 可在此处添加全局变量等</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  plugins: [</span><span style="color:#B392F0;">vue</span><span style="color:#E1E4E8;">()],</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineConfig } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vite&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> vue </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@vitejs/plugin-vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineConfig</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  css: {</span></span>
<span class="line"><span style="color:#24292E;">    preprocessorOptions: {</span></span>
<span class="line"><span style="color:#24292E;">      scss: {</span></span>
<span class="line"><span style="color:#24292E;">        additionalData: </span><span style="color:#032F62;">\`\`</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">// 可在此处添加全局变量等</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  plugins: [</span><span style="color:#6F42C1;">vue</span><span style="color:#24292E;">()],</span></span>
<span class="line"><span style="color:#24292E;">});</span></span></code></pre></div>`,5),e=[o];function c(t,r,E,i,y,d){return a(),n("div",null,e)}const F=s(l,[["render",c]]);export{u as __pageData,F as default};
