import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.edbfdbf1.js";const u=JSON.parse('{"title":"axios封装","description":"","frontmatter":{},"headers":[],"relativePath":"sundry/vue3js/7.md","filePath":"sundry/vue3js/7.md"}'),l={name:"sundry/vue3js/7.md"},o=p(`<h1 id="axios封装" tabindex="-1">axios封装 <a class="header-anchor" href="#axios封装" aria-label="Permalink to &quot;axios封装&quot;">​</a></h1><blockquote><p>封装axios库以实现统一处理HTTP请求，通常会创建一个单独的文件来集中管理网络请求相关的配置、拦截器和方法。</p></blockquote><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">axios</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">axios</span></span></code></pre></div><h2 id="基本封装示例" tabindex="-1">基本封装示例 <a class="header-anchor" href="#基本封装示例" aria-label="Permalink to &quot;基本封装示例&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// 在src/utils或src/http目录下创建一个名为axios.js（或者request.js）的文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> axios </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;axios&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建axios实例并设置基础URL和默认配置</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">instance</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> axios.</span><span style="color:#B392F0;">create</span><span style="color:#E1E4E8;">({</span></span>
<span class="line"><span style="color:#E1E4E8;">  baseURL: p<wbr>rocess.env.</span><span style="color:#79B8FF;">VUE_APP_API_BASE_URL</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;https://api.example.com&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 设置API的基本URL</span></span>
<span class="line"><span style="color:#E1E4E8;">  timeout: </span><span style="color:#79B8FF;">5000</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">// 请求超时时间</span></span>
<span class="line"><span style="color:#E1E4E8;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 请求拦截器：添加请求头等通用逻辑</span></span>
<span class="line"><span style="color:#E1E4E8;">instance.interceptors.request.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">config</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 比如从存储中获取token，并添加到headers</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">token</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> localStorage.</span><span style="color:#B392F0;">getItem</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userToken&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (token) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      config.headers.Authorization </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">\`Bearer \${</span><span style="color:#E1E4E8;">token</span><span style="color:#9ECBFF;">}\`</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> config;</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error),</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 响应拦截器：处理错误码、统一格式化数据等</span></span>
<span class="line"><span style="color:#E1E4E8;">instance.interceptors.response.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">response</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 对响应数据进行预处理</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">if</span><span style="color:#E1E4E8;"> (response.data </span><span style="color:#F97583;">&amp;&amp;</span><span style="color:#E1E4E8;"> response.data.code </span><span style="color:#F97583;">===</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">200</span><span style="color:#E1E4E8;">) {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> response.data.data;</span></span>
<span class="line"><span style="color:#E1E4E8;">    } </span><span style="color:#F97583;">else</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#F97583;">throw</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">new</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">Error</span><span style="color:#E1E4E8;">(response.data.message </span><span style="color:#F97583;">||</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;服务器响应异常&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  (</span><span style="color:#FFAB70;">error</span><span style="color:#E1E4E8;">) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;请求失败:&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// 可以在此处全局处理错误，比如显示提示信息</span></span>
<span class="line"><span style="color:#E1E4E8;">    ref.</span><span style="color:#B392F0;">error</span><span style="color:#E1E4E8;">(error.message); </span><span style="color:#6A737D;">// 假设有一个全局错误提示的状态ref</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">Promise</span><span style="color:#E1E4E8;">.</span><span style="color:#B392F0;">reject</span><span style="color:#E1E4E8;">(error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 封装GET请求</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">params</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> instance.</span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(url, { params });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 封装POST请求</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> (</span><span style="color:#FFAB70;">url</span><span style="color:#E1E4E8;">, </span><span style="color:#FFAB70;">data</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {}) </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> instance.</span><span style="color:#B392F0;">post</span><span style="color:#E1E4E8;">(url, data);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 其他HTTP方法也可以按照类似方式封装，例如put、delete等</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// 在src/utils或src/http目录下创建一个名为axios.js（或者request.js）的文件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> axios </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;axios&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 创建axios实例并设置基础URL和默认配置</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">instance</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> axios.</span><span style="color:#6F42C1;">create</span><span style="color:#24292E;">({</span></span>
<span class="line"><span style="color:#24292E;">  baseURL: p<wbr>rocess.env.</span><span style="color:#005CC5;">VUE_APP_API_BASE_URL</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;https://api.example.com&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 设置API的基本URL</span></span>
<span class="line"><span style="color:#24292E;">  timeout: </span><span style="color:#005CC5;">5000</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">// 请求超时时间</span></span>
<span class="line"><span style="color:#24292E;">});</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 请求拦截器：添加请求头等通用逻辑</span></span>
<span class="line"><span style="color:#24292E;">instance.interceptors.request.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">config</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 比如从存储中获取token，并添加到headers</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">token</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> localStorage.</span><span style="color:#6F42C1;">getItem</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;userToken&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (token) {</span></span>
<span class="line"><span style="color:#24292E;">      config.headers.Authorization </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#032F62;">\`Bearer \${</span><span style="color:#24292E;">token</span><span style="color:#032F62;">}\`</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> config;</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error),</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 响应拦截器：处理错误码、统一格式化数据等</span></span>
<span class="line"><span style="color:#24292E;">instance.interceptors.response.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">response</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 对响应数据进行预处理</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">if</span><span style="color:#24292E;"> (response.data </span><span style="color:#D73A49;">&amp;&amp;</span><span style="color:#24292E;"> response.data.code </span><span style="color:#D73A49;">===</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">200</span><span style="color:#24292E;">) {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> response.data.data;</span></span>
<span class="line"><span style="color:#24292E;">    } </span><span style="color:#D73A49;">else</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#D73A49;">throw</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">new</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">Error</span><span style="color:#24292E;">(response.data.message </span><span style="color:#D73A49;">||</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;服务器响应异常&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  (</span><span style="color:#E36209;">error</span><span style="color:#24292E;">) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    console.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;请求失败:&#39;</span><span style="color:#24292E;">, error);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// 可以在此处全局处理错误，比如显示提示信息</span></span>
<span class="line"><span style="color:#24292E;">    ref.</span><span style="color:#6F42C1;">error</span><span style="color:#24292E;">(error.message); </span><span style="color:#6A737D;">// 假设有一个全局错误提示的状态ref</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">Promise</span><span style="color:#24292E;">.</span><span style="color:#6F42C1;">reject</span><span style="color:#24292E;">(error);</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 封装GET请求</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">params</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> instance.</span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(url, { params });</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 封装POST请求</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">post</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> (</span><span style="color:#E36209;">url</span><span style="color:#24292E;">, </span><span style="color:#E36209;">data</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {}) </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> instance.</span><span style="color:#6F42C1;">post</span><span style="color:#24292E;">(url, data);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// 其他HTTP方法也可以按照类似方式封装，例如put、delete等</span></span></code></pre></div><h2 id="使用示例" tabindex="-1">使用示例 <a class="header-anchor" href="#使用示例" aria-label="Permalink to &quot;使用示例&quot;">​</a></h2><p>在main.js或应用初始化的地方引入这个封装好的模块</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createApp } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> App </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./App.vue&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> router </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./router&#39;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { get, post } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;./utils/axios&#39;</span><span style="color:#E1E4E8;">; </span><span style="color:#6A737D;">// 引入封装好的axios方法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">app</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createApp</span><span style="color:#E1E4E8;">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.config.globalProperties.$http </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">  get,</span></span>
<span class="line"><span style="color:#E1E4E8;">  post,</span></span>
<span class="line"><span style="color:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(router).</span><span style="color:#B392F0;">mount</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;#app&#39;</span><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createApp } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> App </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./App.vue&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> router </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./router&#39;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { get, post } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;./utils/axios&#39;</span><span style="color:#24292E;">; </span><span style="color:#6A737D;">// 引入封装好的axios方法</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">app</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createApp</span><span style="color:#24292E;">(App);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.config.globalProperties.$http </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">  get,</span></span>
<span class="line"><span style="color:#24292E;">  post,</span></span>
<span class="line"><span style="color:#24292E;">};</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(router).</span><span style="color:#6F42C1;">mount</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;#app&#39;</span><span style="color:#24292E;">);</span></span></code></pre></div><p>或者在需要使用的地方，直接调用封装好的方法即可</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// MyComponent.vue</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#E1E4E8;">import { get } from &#39;@/utils/axios&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">const users = ref([]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">async function fetchUsers() {</span></span>
<span class="line"><span style="color:#E1E4E8;">  try {</span></span>
<span class="line"><span style="color:#E1E4E8;">    const response </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">await</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">get</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;/users&#39;</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    users.value </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> response;</span></span>
<span class="line"><span style="color:#E1E4E8;">  } </span><span style="color:#B392F0;">catch</span><span style="color:#E1E4E8;"> (error) {</span></span>
<span class="line"><span style="color:#E1E4E8;">    console.error(</span><span style="color:#9ECBFF;">&#39;获取用户列表出错：&#39;</span><span style="color:#E1E4E8;">, error);</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">}</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// MyComponent.vue</span></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">import { ref } from &#39;vue&#39;;</span></span>
<span class="line"><span style="color:#24292E;">import { get } from &#39;@/utils/axios&#39;;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">const users = ref([]);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">async function fetchUsers() {</span></span>
<span class="line"><span style="color:#24292E;">  try {</span></span>
<span class="line"><span style="color:#24292E;">    const response </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">await</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">get</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;/users&#39;</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    users.value </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> response;</span></span>
<span class="line"><span style="color:#24292E;">  } </span><span style="color:#6F42C1;">catch</span><span style="color:#24292E;"> (error) {</span></span>
<span class="line"><span style="color:#24292E;">    console.error(</span><span style="color:#032F62;">&#39;获取用户列表出错：&#39;</span><span style="color:#24292E;">, error);</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">}</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span></code></pre></div>`,11),e=[o];function c(r,t,E,y,i,F){return n(),a("div",null,e)}const d=s(l,[["render",c]]);export{u as __pageData,d as default};
