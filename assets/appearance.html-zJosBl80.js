import{_ as a,o as n,c as s,e}from"./app-BEQIFcJr.js";const t={},o=e(`<h2 id="introduction" tabindex="-1"><a class="header-anchor" href="#introduction"><span>Introduction</span></a></h2><p>The theme automatically changes its appearance color according to the appearance color of the system by default, but allows users to set the default appearance color. Available values are <code>dark</code>, <code>light</code>, <code>auto</code>, default <code>auto</code>.</p><h2 id="usage" tabindex="-1"><a class="header-anchor" href="#usage"><span>Usage</span></a></h2><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    colorMode<span class="token operator">:</span> <span class="token string">&#39;dark&#39;</span><span class="token punctuation">,</span> <span class="token comment">// dark, light, default auto</span></span>
<span class="line">    colorModeSwitch<span class="token operator">:</span> <span class="token boolean">false</span> <span class="token comment">// if show color mode switch，default true</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4),c=[o];function p(l,i){return n(),s("div",null,c)}const d=a(t,[["render",p],["__file","appearance.html.vue"]]),u=JSON.parse('{"path":"/en/docs/theme/appearance.html","title":"Appearance","lang":"en-US","frontmatter":{"title":"Appearance","date":"2023-02-14T00:00:00.000Z"},"headers":[{"level":2,"title":"Introduction","slug":"introduction","link":"#introduction","children":[]},{"level":2,"title":"Usage","slug":"usage","link":"#usage","children":[]}],"git":{"createdTime":1719510409000,"updatedTime":1719510409000,"contributors":[{"name":"reco_luan","email":"recoluan@qq.com","commits":1}]},"filePathRelative":"en/docs/theme/appearance.md"}');export{d as comp,u as data};
