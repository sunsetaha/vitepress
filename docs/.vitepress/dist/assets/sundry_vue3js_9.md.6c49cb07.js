import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.edbfdbf1.js";const d=JSON.parse('{"title":"vue-router","description":"","frontmatter":{},"headers":[],"relativePath":"sundry/vue3js/9.md","filePath":"sundry/vue3js/9.md"}'),l={name:"sundry/vue3js/9.md"},o=p(`<h1 id="vue-router" tabindex="-1">vue-router <a class="header-anchor" href="#vue-router" aria-label="Permalink to &quot;vue-router&quot;">​</a></h1><h2 id="_1-安装" tabindex="-1">1. 安装 <a class="header-anchor" href="#_1-安装" aria-label="Permalink to &quot;1. 安装&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  npm install vue</span><span style="color:#F97583;">-</span><span style="color:#E1E4E8;">router</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  npm install vue</span><span style="color:#D73A49;">-</span><span style="color:#24292E;">router</span></span></code></pre></div><h2 id="_2-创建路由对象" tabindex="-1">2. 创建路由对象 <a class="header-anchor" href="#_2-创建路由对象" aria-label="Permalink to &quot;2. 创建路由对象&quot;">​</a></h2><blockquote><p>在src下创建router文件夹，并在router文件夹下创建index.js文件</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// /src/router/index.js</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 导入创建路由对象 和 创建hash对象</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createRouter, createWebHashHistory } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 2. 导入组件</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> Home </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../views/Home.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> About </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;../views/About.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 3. 配置路由映射关系表</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 路径和组件映射起来</span></span>
<span class="line"><span style="color:#E1E4E8;">  { path: </span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">, component: Home },</span></span>
<span class="line"><span style="color:#E1E4E8;">  { path: </span><span style="color:#9ECBFF;">&#39;/about&#39;</span><span style="color:#E1E4E8;">, component: About }</span></span>
<span class="line"><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 4. 创建路由对象</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">router</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createRouter</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 5. 配置路由跳转模式，这里使用 hash 模式</span></span>
<span class="line"><span style="color:#E1E4E8;">  history: </span><span style="color:#B392F0;">createWebHashHistory</span><span style="color:#E1E4E8;">(),</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 把映射表放入</span></span>
<span class="line"><span style="color:#E1E4E8;">  routes</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 5. 导出</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> router;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// /src/router/index.js</span></span>
<span class="line"><span style="color:#6A737D;">// 1. 导入创建路由对象 和 创建hash对象</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createRouter, createWebHashHistory } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 2. 导入组件</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> Home </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../views/Home.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> About </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;../views/About.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 3. 配置路由映射关系表</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 路径和组件映射起来</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">, component: Home },</span></span>
<span class="line"><span style="color:#24292E;">  { path: </span><span style="color:#032F62;">&#39;/about&#39;</span><span style="color:#24292E;">, component: About }</span></span>
<span class="line"><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 4. 创建路由对象</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">router</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createRouter</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 5. 配置路由跳转模式，这里使用 hash 模式</span></span>
<span class="line"><span style="color:#24292E;">  history: </span><span style="color:#6F42C1;">createWebHashHistory</span><span style="color:#24292E;">(),</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 把映射表放入</span></span>
<span class="line"><span style="color:#24292E;">  routes</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 5. 导出</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> router;</span></span></code></pre></div><h2 id="_3-在main-js中使用" tabindex="-1">3. 在main.js中使用 <a class="header-anchor" href="#_3-在main-js中使用" aria-label="Permalink to &quot;3. 在main.js中使用&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./App.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 1. 导入路由对象</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> router </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 2. 使用use调用一下</span></span>
<span class="line"><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App).</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(router).</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./App.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 1. 导入路由对象</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> router </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;"> </span></span>
<span class="line"><span style="color:#6A737D;">// 2. 使用use调用一下</span></span>
<span class="line"><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App).</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(router).</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><h2 id="_4-router路由属性" tabindex="-1">4. router路由属性 <a class="header-anchor" href="#_4-router路由属性" aria-label="Permalink to &quot;4. router路由属性&quot;">​</a></h2><ul><li>path：指定跳转的路由地址</li><li>component：指定路由地址对应的组件</li><li>name：路由记录的名称 <ul><li>可以使用name属性来跳转</li><li>可用来配置动态路由时给某个路由增加子路由</li></ul></li><li>meta : 自定义一些数据</li></ul><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      redirect: </span><span style="color:#9ECBFF;">&#39;/home&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      component: Home,</span></span>
<span class="line"><span style="color:#E1E4E8;">      meth: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;coderstar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        age: </span><span style="color:#79B8FF;">28</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;about&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/about&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      component: About</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      redirect: </span><span style="color:#032F62;">&#39;/home&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      component: Home,</span></span>
<span class="line"><span style="color:#24292E;">      meth: {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;coderstar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        age: </span><span style="color:#005CC5;">28</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;about&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/about&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      component: About</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ];</span></span></code></pre></div><h2 id="_5-notfound设置" tabindex="-1">5. notFound设置 <a class="header-anchor" href="#_5-notfound设置" aria-label="Permalink to &quot;5. notFound设置&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 如果匹配到任何一个不存在的路径，就显示这个组件</span></span>
<span class="line"><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;notFound&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/:pathMatch(.*)&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// =&gt; 地址一样的显示出来  =&gt; abc/erfsdf/gsa/e</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/:pathMatch(.*)*&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// =&gt; 如果遇到分级，会解析 / ，变成一个数组 =&gt; [&#39;abc&#39;,&#39;erfsdf&#39;,&#39;gsa&#39;,&#39;e&#39;]</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../views/NotFound.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 如果匹配到任何一个不存在的路径，就显示这个组件</span></span>
<span class="line"><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;notFound&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/:pathMatch(.*)&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// =&gt; 地址一样的显示出来  =&gt; abc/erfsdf/gsa/e</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/:pathMatch(.*)*&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// =&gt; 如果遇到分级，会解析 / ，变成一个数组 =&gt; [&#39;abc&#39;,&#39;erfsdf&#39;,&#39;gsa&#39;,&#39;e&#39;]</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../views/NotFound.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">}</span></span></code></pre></div><h2 id="_6-动态路由" tabindex="-1">6. 动态路由 <a class="header-anchor" href="#_6-动态路由" aria-label="Permalink to &quot;6. 动态路由&quot;">​</a></h2><blockquote><p>很多时候需要将给定匹配模式的路由映射到同一个组件</p></blockquote><ul><li>例如，有一个 User 组件，它应该对所有用户进行渲染，但是用户的ID是不同的</li><li>在Vue Router中，可以在路径中使用一个动态字段来实现，称之为 路径参数 <ol><li>路由设置</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">name</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 动态设定 id 和 name</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">path</span><span style="color:#E1E4E8;">: </span><span style="color:#9ECBFF;">&#39;/user/:id/:name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../views/User.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">name</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 动态设定 id 和 name</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">path</span><span style="color:#24292E;">: </span><span style="color:#032F62;">&#39;/user/:id/:name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../views/User.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span></code></pre></div><ol start="2"><li>跳转设置</li></ol><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/user/111111/coder&quot;</span><span style="color:#E1E4E8;">&gt;User =&gt; 1&lt;/</span><span style="color:#85E89D;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">br</span><span style="color:#E1E4E8;"> /&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">router-link</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">to</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;/user/222222/star&quot;</span><span style="color:#E1E4E8;">&gt;User =&gt; 2&lt;/</span><span style="color:#85E89D;">router-link</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/user/111111/coder&quot;</span><span style="color:#24292E;">&gt;User =&gt; 1&lt;/</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">br</span><span style="color:#24292E;"> /&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">to</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;/user/222222/star&quot;</span><span style="color:#24292E;">&gt;User =&gt; 2&lt;/</span><span style="color:#22863A;">router-link</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><ol start="3"><li>组件使用</li></ol><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">&lt;!-- 1. 在模版中获取 --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">    &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;我是用户user =&gt; {{ $route.params.id }} - {{ $route.params.name }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useRoute, onBeforeRouteUpdate } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue-router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 2. 在js中获取</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 第一次获取</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">route</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useRoute</span><span style="color:#E1E4E8;">();</span></span>
<span class="line"><span style="color:#E1E4E8;">  console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(route.params.id, route.params.name);</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 切换的时候获取</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">onBeforeRouteUpdate</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">from</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 当前</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;to:&#39;</span><span style="color:#E1E4E8;">, to.params.id, to.params.name);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 从哪里来</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// console.log(&#39;from:&#39;, from.params.id, from.params.name);</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">&lt;!-- 1. 在模版中获取 --&gt;</span></span>
<span class="line"><span style="color:#24292E;">    &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;我是用户user =&gt; {{ $route.params.id }} - {{ $route.params.name }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useRoute, onBeforeRouteUpdate } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue-router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 2. 在js中获取</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 第一次获取</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">route</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useRoute</span><span style="color:#24292E;">();</span></span>
<span class="line"><span style="color:#24292E;">  console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(route.params.id, route.params.name);</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 切换的时候获取</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">onBeforeRouteUpdate</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 当前</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;to:&#39;</span><span style="color:#24292E;">, to.params.id, to.params.name);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 从哪里来</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// console.log(&#39;from:&#39;, from.params.id, from.params.name);</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  &lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div></li></ul><h2 id="_7-路由嵌套" tabindex="-1">7. 路由嵌套 <a class="header-anchor" href="#_7-路由嵌套" aria-label="Permalink to &quot;7. 路由嵌套&quot;">​</a></h2><blockquote><p>路由嵌套 : 组件的内部可能有多个组件来回切换</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">routes</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      redirect: </span><span style="color:#9ECBFF;">&#39;/home&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../views/Home.vue&#39;</span><span style="color:#E1E4E8;">),</span></span>
<span class="line"><span style="color:#E1E4E8;">      meth: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        name: </span><span style="color:#9ECBFF;">&#39;coderstar&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">        age: </span><span style="color:#79B8FF;">28</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 配置子路由</span></span>
<span class="line"><span style="color:#E1E4E8;">      children: [</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 配置重定向，默认进去 home组件 中的 A组件</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&#39;/home&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          redirect: </span><span style="color:#9ECBFF;">&#39;/home/A&#39;</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 注 : 这里不需要写全称  =&gt;  /home/a</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&#39;a&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../views/HomeA.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        },</span></span>
<span class="line"><span style="color:#E1E4E8;">        {</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#6A737D;">// 注 : 这里不需要写全称  =&gt;  /home/b</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&#39;b&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../views/HomeB.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">        }</span></span>
<span class="line"><span style="color:#E1E4E8;">      ]</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;about&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/about&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../views/About.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;user&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/user/:id/:name&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../views/User.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">    {</span></span>
<span class="line"><span style="color:#E1E4E8;">      name: </span><span style="color:#9ECBFF;">&#39;notFound&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      path: </span><span style="color:#9ECBFF;">&#39;/:pathMatch(.*)&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">component</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;../views/NotFound.vue&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  ];</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">routes</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      redirect: </span><span style="color:#032F62;">&#39;/home&#39;</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../views/Home.vue&#39;</span><span style="color:#24292E;">),</span></span>
<span class="line"><span style="color:#24292E;">      meth: {</span></span>
<span class="line"><span style="color:#24292E;">        name: </span><span style="color:#032F62;">&#39;coderstar&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">        age: </span><span style="color:#005CC5;">28</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 配置子路由</span></span>
<span class="line"><span style="color:#24292E;">      children: [</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 配置重定向，默认进去 home组件 中的 A组件</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&#39;/home&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          redirect: </span><span style="color:#032F62;">&#39;/home/A&#39;</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 注 : 这里不需要写全称  =&gt;  /home/a</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&#39;a&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../views/HomeA.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        },</span></span>
<span class="line"><span style="color:#24292E;">        {</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6A737D;">// 注 : 这里不需要写全称  =&gt;  /home/b</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&#39;b&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../views/HomeB.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">        }</span></span>
<span class="line"><span style="color:#24292E;">      ]</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;about&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/about&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../views/About.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;user&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/user/:id/:name&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../views/User.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">    {</span></span>
<span class="line"><span style="color:#24292E;">      name: </span><span style="color:#032F62;">&#39;notFound&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      path: </span><span style="color:#032F62;">&#39;/:pathMatch(.*)&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">component</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">import</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;../views/NotFound.vue&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  ];</span></span></code></pre></div><h2 id="_8-路由守卫" tabindex="-1">8. 路由守卫 <a class="header-anchor" href="#_8-路由守卫" aria-label="Permalink to &quot;8. 路由守卫&quot;">​</a></h2><blockquote><p>vue-router 提供的导航守卫主要用来通过跳转或取消的方式守卫导航</p></blockquote><ol><li>全局前置守卫</li></ol><blockquote><p>全局的前置守卫 beforeEach 是在导航触发时会被回调的，进行任何的路由跳转之前, 传入的beforeEach中的函数都会被回调</p></blockquote><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 路由导航首位</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">  * to : 去哪个路由</span></span>
<span class="line"><span style="color:#6A737D;">  * from : 从哪里来</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 1. 设定需要登录才能进的页面</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">needLoginRoutePath</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> [</span><span style="color:#9ECBFF;">&#39;/about&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;/user/222222/star&#39;</span><span style="color:#E1E4E8;">];</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  router.</span><span style="color:#B392F0;">beforeEach</span><span style="color:#E1E4E8;">((</span><span style="color:#FFAB70;">to</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">from</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 2. 判断是否进入需要登录后才能进的页面</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (needLoginRoutePath.</span><span style="color:#B392F0;">includes</span><span style="color:#E1E4E8;">(to.path)) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 3. 获取登录状态</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> sessionStorage.</span><span style="color:#B392F0;">getItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;token&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#6A737D;">// 4. 判断 =&gt; 如果没登录，跳转到登录页面</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (</span><span style="color:#F97583;">!</span><span style="color:#E1E4E8;">token) {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 01. 返回登录页面的路径即可</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// return &#39;/login&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#6A737D;">// 02. 同时传递数据过去</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">          path: </span><span style="color:#9ECBFF;">&#39;/login&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">          query: {</span></span>
<span class="line"><span style="color:#E1E4E8;">            toPath: to.path</span></span>
<span class="line"><span style="color:#E1E4E8;">          }</span></span>
<span class="line"><span style="color:#E1E4E8;">        };</span></span>
<span class="line"><span style="color:#E1E4E8;">      }</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  });</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// 5. 导出</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> router;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 路由导航首位</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">/**</span></span>
<span class="line"><span style="color:#6A737D;">  * to : 去哪个路由</span></span>
<span class="line"><span style="color:#6A737D;">  * from : 从哪里来</span></span>
<span class="line"><span style="color:#6A737D;">  */</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 1. 设定需要登录才能进的页面</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">needLoginRoutePath</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> [</span><span style="color:#032F62;">&#39;/about&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;/user/222222/star&#39;</span><span style="color:#24292E;">];</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  router.</span><span style="color:#6F42C1;">beforeEach</span><span style="color:#24292E;">((</span><span style="color:#E36209;">to</span><span style="color:#24292E;">, </span><span style="color:#E36209;">from</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 2. 判断是否进入需要登录后才能进的页面</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (needLoginRoutePath.</span><span style="color:#6F42C1;">includes</span><span style="color:#24292E;">(to.path)) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 3. 获取登录状态</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">token</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> sessionStorage.</span><span style="color:#6F42C1;">getItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;token&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6A737D;">// 4. 判断 =&gt; 如果没登录，跳转到登录页面</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (</span><span style="color:#D73A49;">!</span><span style="color:#24292E;">token) {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 01. 返回登录页面的路径即可</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// return &#39;/login&#39;;</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#6A737D;">// 02. 同时传递数据过去</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">          path: </span><span style="color:#032F62;">&#39;/login&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">          query: {</span></span>
<span class="line"><span style="color:#24292E;">            toPath: to.path</span></span>
<span class="line"><span style="color:#24292E;">          }</span></span>
<span class="line"><span style="color:#24292E;">        };</span></span>
<span class="line"><span style="color:#24292E;">      }</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  });</span></span>
<span class="line"><span style="color:#24292E;">  </span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// 5. 导出</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> router;</span></span></code></pre></div>`,24),e=[o];function t(c,r,E,y,i,F){return n(),a("div",null,e)}const h=s(l,[["render",t]]);export{d as __pageData,h as default};
