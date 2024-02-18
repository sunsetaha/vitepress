import{_ as s,o as n,c as a,Q as p}from"./chunks/framework.edbfdbf1.js";const d=JSON.parse('{"title":"pinia使用","description":"","frontmatter":{},"headers":[],"relativePath":"sundry/vue3js/8.md","filePath":"sundry/vue3js/8.md"}'),l={name:"sundry/vue3js/8.md"},o=p(`<h1 id="pinia使用" tabindex="-1">pinia使用 <a class="header-anchor" href="#pinia使用" aria-label="Permalink to &quot;pinia使用&quot;">​</a></h1><blockquote><p>Pinia提供了一个简单、灵活和高效的方式来管理Vue 3应用程序中的状态。</p></blockquote><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pinia</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pinia</span></span></code></pre></div><h2 id="创建pinia实例并在main-js中挂在" tabindex="-1">创建pinia实例并在main.js中挂在 <a class="header-anchor" href="#创建pinia实例并在main-js中挂在" aria-label="Permalink to &quot;创建pinia实例并在main.js中挂在&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPinia } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pinia&#39;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pinia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPinia</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#E1E4E8;">app.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(pinia)</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPinia } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pinia&#39;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pinia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPinia</span><span style="color:#24292E;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#6A737D;">// main.js</span></span>
<span class="line"><span style="color:#24292E;">app.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(pinia)</span></span></code></pre></div><h2 id="counter-示例" tabindex="-1">counter 示例 <a class="header-anchor" href="#counter-示例" aria-label="Permalink to &quot;counter 示例&quot;">​</a></h2><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#6A737D;">// store/counter.js</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { ref, computed } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;vue&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;pinia&quot;</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 选项式写法</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">useCounterStore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineStore</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;counter&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({ count: </span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;"> }),</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// state: () =&gt; {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">//   return { count: 0 }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#E1E4E8;">    actions: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      </span><span style="color:#B392F0;">increment</span><span style="color:#E1E4E8;">() {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#79B8FF;">this</span><span style="color:#E1E4E8;">.count</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">      },</span></span>
<span class="line"><span style="color:#E1E4E8;">    },</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 组合式写法 </span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">useCounterStore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineStore</span><span style="color:#E1E4E8;">(</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#9ECBFF;">&quot;counter&quot;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">count</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">ref</span><span style="color:#E1E4E8;">(</span><span style="color:#79B8FF;">0</span><span style="color:#E1E4E8;">);</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">increment</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count.value</span><span style="color:#F97583;">++</span><span style="color:#E1E4E8;">;</span></span>
<span class="line"><span style="color:#E1E4E8;">    }</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">return</span><span style="color:#E1E4E8;"> {</span></span>
<span class="line"><span style="color:#E1E4E8;">      count,</span></span>
<span class="line"><span style="color:#E1E4E8;">      increment</span></span>
<span class="line"><span style="color:#E1E4E8;">    };</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">//...更多配置</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"><span style="color:#E1E4E8;">);</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6A737D;">// store/counter.js</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { ref, computed } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;vue&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pinia&quot;</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#6A737D;">// 选项式写法</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">useCounterStore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineStore</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;counter&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({ count: </span><span style="color:#005CC5;">0</span><span style="color:#24292E;"> }),</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// state: () =&gt; {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">//   return { count: 0 }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#6A737D;">// },</span></span>
<span class="line"><span style="color:#24292E;">    actions: {</span></span>
<span class="line"><span style="color:#24292E;">      </span><span style="color:#6F42C1;">increment</span><span style="color:#24292E;">() {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#005CC5;">this</span><span style="color:#24292E;">.count</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">      },</span></span>
<span class="line"><span style="color:#24292E;">    },</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#6A737D;">// 组合式写法 </span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">useCounterStore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineStore</span><span style="color:#24292E;">(</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#032F62;">&quot;counter&quot;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">count</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">ref</span><span style="color:#24292E;">(</span><span style="color:#005CC5;">0</span><span style="color:#24292E;">);</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">increment</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      count.value</span><span style="color:#D73A49;">++</span><span style="color:#24292E;">;</span></span>
<span class="line"><span style="color:#24292E;">    }</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">return</span><span style="color:#24292E;"> {</span></span>
<span class="line"><span style="color:#24292E;">      count,</span></span>
<span class="line"><span style="color:#24292E;">      increment</span></span>
<span class="line"><span style="color:#24292E;">    };</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">//...更多配置</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"><span style="color:#24292E;">);</span></span></code></pre></div><p>由于Pinia支持Composition API 所以平时会用组合式写法。 在上面代码中defineStore有三个参数：</p><ul><li>第一个参数：storeName 类型：String 描述：store的名称。标识该store的唯一性</li><li>第二个参数：setup 类型: () =&gt; StoreDefinition&lt;State, Getters, Actions, StoreOptions&gt; 描述：类似Vue组件中setup()函数</li><li>第三个参数：storestoreOptions（可选） 类型：StoreOptions 描述：一个对象，包含一些 store 的选项</li></ul><p>简单来说 第一个参数像是一个id 给某个store绑定上，给这个仓库唯一化。 第二个参数规定了仓库里面的初始值以及变化值。第三个参数 是个配置选项，例如 persist（是否启用持久化存储）、devtools（是否启用开发工具）等。 最后使用export 抛出useCounterStore 方法</p><h2 id="使用" tabindex="-1">使用 <a class="header-anchor" href="#使用" aria-label="Permalink to &quot;使用&quot;">​</a></h2><div class="language-vue vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">vue</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">&lt;!-- 直接从 store 中访问 state --&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;Current Count: {{ counter.count }}&lt;/</span><span style="color:#85E89D;">div</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  &lt;</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">@click</span><span style="color:#E1E4E8;">=</span><span style="color:#9ECBFF;">&quot;clickHanlde&quot;</span><span style="color:#E1E4E8;">&gt;加1&lt;/</span><span style="color:#85E89D;">button</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">template</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">setup</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { useCounterStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;@/store/counter&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">counter</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">useCounterStore</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">clickHanlde</span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;">()</span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;">{</span></span>
<span class="line"><span style="color:#E1E4E8;">    counter.</span><span style="color:#B392F0;">increment</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">script</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#E1E4E8;">&lt;</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">scoped</span><span style="color:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="color:#E1E4E8;">&lt;/</span><span style="color:#85E89D;">style</span><span style="color:#E1E4E8;">&gt;</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">&lt;!-- 直接从 store 中访问 state --&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;Current Count: {{ counter.count }}&lt;/</span><span style="color:#22863A;">div</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  &lt;</span><span style="color:#22863A;">button</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">@click</span><span style="color:#24292E;">=</span><span style="color:#032F62;">&quot;clickHanlde&quot;</span><span style="color:#24292E;">&gt;加1&lt;/</span><span style="color:#22863A;">button</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">template</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">script</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">setup</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { useCounterStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;@/store/counter&#39;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">counter</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">useCounterStore</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">clickHanlde</span><span style="color:#D73A49;">=</span><span style="color:#24292E;">()</span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;">{</span></span>
<span class="line"><span style="color:#24292E;">    counter.</span><span style="color:#6F42C1;">increment</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">  }</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">script</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#24292E;">&lt;</span><span style="color:#22863A;">style</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">scoped</span><span style="color:#24292E;">&gt;</span></span>
<span class="line"><span style="color:#24292E;">&lt;/</span><span style="color:#22863A;">style</span><span style="color:#24292E;">&gt;</span></span></code></pre></div><h2 id="数据持久化" tabindex="-1">数据持久化 <a class="header-anchor" href="#数据持久化" aria-label="Permalink to &quot;数据持久化&quot;">​</a></h2><blockquote><p>示例刷新会发现count会变成0，因为数据没有持久化处理，而pinia本身没有提供数据持久化，因此需要安装插件pinia-plugin-persistedstate。</p></blockquote><ol><li>安装</li></ol><div class="language-sh vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">install</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">pinia-plugin-persistedstate</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">install</span><span style="color:#24292E;"> </span><span style="color:#032F62;">pinia-plugin-persistedstate</span></span></code></pre></div><ol start="2"><li>在store/index.js中挂载</li></ol><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { createPinia } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;pinia&quot;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//引入pinia</span></span>
<span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> piniaPluginPersistedstate </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&#39;pinia-plugin-persistedstate&#39;</span><span style="color:#E1E4E8;"> </span><span style="color:#6A737D;">//引入持久化插件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">pinia</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">createPinia</span><span style="color:#E1E4E8;">() </span><span style="color:#6A737D;">//创建pinia实例</span></span>
<span class="line"><span style="color:#E1E4E8;">pinia.</span><span style="color:#B392F0;">use</span><span style="color:#E1E4E8;">(piniaPluginPersistedstate) </span><span style="color:#6A737D;">//将插件添加到 pinia 实例上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> pinia </span><span style="color:#6A737D;">//导出pinia用于main.js注册</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { createPinia } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pinia&quot;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//引入pinia</span></span>
<span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> piniaPluginPersistedstate </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&#39;pinia-plugin-persistedstate&#39;</span><span style="color:#24292E;"> </span><span style="color:#6A737D;">//引入持久化插件</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">pinia</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">createPinia</span><span style="color:#24292E;">() </span><span style="color:#6A737D;">//创建pinia实例</span></span>
<span class="line"><span style="color:#24292E;">pinia.</span><span style="color:#6F42C1;">use</span><span style="color:#24292E;">(piniaPluginPersistedstate) </span><span style="color:#6A737D;">//将插件添加到 pinia 实例上</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> pinia </span><span style="color:#6A737D;">//导出pinia用于main.js注册</span></span></code></pre></div><ol start="3"><li>在store/counter.js中使用 1. 基本使用</li></ol><pre><code>&gt; 创建 Store 时，将 persist 选项设置为 true，整个 Store 将使用默认持久化配置保存。
**默认持久化配置：**
  - 使用 localStorage进行存储
  - store.$id作为 storage 默认的 key
  - 使用 JSON.stringify / JSON.parse进行序列化/反序列化
  - 整个 state 默认将被持久化
</code></pre><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;pinia&quot;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">useUserInfoStore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineStore</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userInfo&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// defineStore(&#39;userInfo&#39;,{})  userInfo就是这个仓库的名称name</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">    username:</span><span style="color:#9ECBFF;">&#39;赫赫&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    age: </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    like: </span><span style="color:#9ECBFF;">&#39;girl&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">.........</span><span style="color:#E1E4E8;">..</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  action：{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">.........</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  persist: </span><span style="color:#79B8FF;">true</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> useUserInfoStore</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pinia&quot;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">useUserInfoStore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineStore</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;userInfo&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// defineStore(&#39;userInfo&#39;,{})  userInfo就是这个仓库的名称name</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">    username:</span><span style="color:#032F62;">&#39;赫赫&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    age: </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    like: </span><span style="color:#032F62;">&#39;girl&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">  }),</span></span>
<span class="line"><span style="color:#24292E;">  getters: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">.........</span><span style="color:#24292E;">..</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  action：{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">.........</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  persist: </span><span style="color:#005CC5;">true</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> useUserInfoStore</span></span></code></pre></div><pre><code>2. 高级使用
&gt; 如何你不想使用默认的配置，那么可以将一个对象传递给 Store 的 persist 属性来配置持久化
**三个常用属性：**
- key：存储名称。
- storage：存储方式。
- path：用于指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state。
</code></pre><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">import</span><span style="color:#E1E4E8;"> { defineStore } </span><span style="color:#F97583;">from</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">&quot;pinia&quot;</span></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">useUserInfoStore</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> </span><span style="color:#B392F0;">defineStore</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;userInfo&#39;</span><span style="color:#E1E4E8;">, {</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#6A737D;">// defineStore(&#39;userInfo&#39;,{})  userInfo就是这个仓库的名称name</span></span>
<span class="line"><span style="color:#E1E4E8;">  </span><span style="color:#B392F0;">state</span><span style="color:#E1E4E8;">: () </span><span style="color:#F97583;">=&gt;</span><span style="color:#E1E4E8;"> ({</span></span>
<span class="line"><span style="color:#E1E4E8;">    username:</span><span style="color:#9ECBFF;">&#39;赫赫&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    age: </span><span style="color:#79B8FF;">23</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    like: </span><span style="color:#9ECBFF;">&#39;girl&#39;</span><span style="color:#E1E4E8;">,</span></span>
<span class="line"><span style="color:#E1E4E8;">    obj:{ money:</span><span style="color:#79B8FF;">100</span><span style="color:#E1E4E8;">,friend:</span><span style="color:#79B8FF;">10</span><span style="color:#E1E4E8;"> }</span></span>
<span class="line"><span style="color:#E1E4E8;">  }),</span></span>
<span class="line"><span style="color:#E1E4E8;">  getters: {</span></span>
<span class="line"><span style="color:#E1E4E8;">        </span><span style="color:#F97583;">.........</span><span style="color:#E1E4E8;">..</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  action：{</span></span>
<span class="line"><span style="color:#E1E4E8;">    </span><span style="color:#F97583;">.........</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">  persist: {</span></span>
<span class="line"><span style="color:#E1E4E8;">      key: </span><span style="color:#9ECBFF;">&#39;piniaStore&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#6A737D;">//存储名称</span></span>
<span class="line"><span style="color:#E1E4E8;">      storage: sessionStorage, </span><span style="color:#6A737D;">// 存储方式</span></span>
<span class="line"><span style="color:#E1E4E8;">      paths: [</span><span style="color:#9ECBFF;">&#39;username&#39;</span><span style="color:#E1E4E8;">, </span><span style="color:#9ECBFF;">&#39;like&#39;</span><span style="color:#E1E4E8;">,</span><span style="color:#9ECBFF;">&#39;obj&#39;</span><span style="color:#E1E4E8;">], </span><span style="color:#6A737D;">//指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state</span></span>
<span class="line"><span style="color:#E1E4E8;">  },</span></span>
<span class="line"><span style="color:#E1E4E8;">})</span></span>
<span class="line"><span style="color:#F97583;">export</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">default</span><span style="color:#E1E4E8;"> useUserInfoStore</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">import</span><span style="color:#24292E;"> { defineStore } </span><span style="color:#D73A49;">from</span><span style="color:#24292E;"> </span><span style="color:#032F62;">&quot;pinia&quot;</span></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">useUserInfoStore</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> </span><span style="color:#6F42C1;">defineStore</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;userInfo&#39;</span><span style="color:#24292E;">, {</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6A737D;">// defineStore(&#39;userInfo&#39;,{})  userInfo就是这个仓库的名称name</span></span>
<span class="line"><span style="color:#24292E;">  </span><span style="color:#6F42C1;">state</span><span style="color:#24292E;">: () </span><span style="color:#D73A49;">=&gt;</span><span style="color:#24292E;"> ({</span></span>
<span class="line"><span style="color:#24292E;">    username:</span><span style="color:#032F62;">&#39;赫赫&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    age: </span><span style="color:#005CC5;">23</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    like: </span><span style="color:#032F62;">&#39;girl&#39;</span><span style="color:#24292E;">,</span></span>
<span class="line"><span style="color:#24292E;">    obj:{ money:</span><span style="color:#005CC5;">100</span><span style="color:#24292E;">,friend:</span><span style="color:#005CC5;">10</span><span style="color:#24292E;"> }</span></span>
<span class="line"><span style="color:#24292E;">  }),</span></span>
<span class="line"><span style="color:#24292E;">  getters: {</span></span>
<span class="line"><span style="color:#24292E;">        </span><span style="color:#D73A49;">.........</span><span style="color:#24292E;">..</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  action：{</span></span>
<span class="line"><span style="color:#24292E;">    </span><span style="color:#D73A49;">.........</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">  persist: {</span></span>
<span class="line"><span style="color:#24292E;">      key: </span><span style="color:#032F62;">&#39;piniaStore&#39;</span><span style="color:#24292E;">, </span><span style="color:#6A737D;">//存储名称</span></span>
<span class="line"><span style="color:#24292E;">      storage: sessionStorage, </span><span style="color:#6A737D;">// 存储方式</span></span>
<span class="line"><span style="color:#24292E;">      paths: [</span><span style="color:#032F62;">&#39;username&#39;</span><span style="color:#24292E;">, </span><span style="color:#032F62;">&#39;like&#39;</span><span style="color:#24292E;">,</span><span style="color:#032F62;">&#39;obj&#39;</span><span style="color:#24292E;">], </span><span style="color:#6A737D;">//指定 state 中哪些数据需要被持久化。[] 表示不持久化任何状态，undefined 或 null 表示持久化整个 state</span></span>
<span class="line"><span style="color:#24292E;">  },</span></span>
<span class="line"><span style="color:#24292E;">})</span></span>
<span class="line"><span style="color:#D73A49;">export</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">default</span><span style="color:#24292E;"> useUserInfoStore</span></span></code></pre></div>`,24),e=[o];function t(c,r,E,y,i,u){return n(),a("div",null,e)}const g=s(l,[["render",t]]);export{d as __pageData,g as default};
