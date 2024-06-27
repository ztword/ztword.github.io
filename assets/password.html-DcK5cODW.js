import{_ as a,r as e,o as l,c as t,d as p,e as s}from"./app-BEQIFcJr.js";const i={},c=s('<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>如果网站整体或者某篇文档具有私密性，不希望被公开，只有填入密钥登录后（关闭浏览器标签后登录失效），才能进入内容页面。</p><ul><li>密码位数只能是 6 个字符</li><li>密码可以通过数组设置多个</li></ul></div><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><ol><li>加密的安全性较低，请酌情使用；</li><li>如果设置了加密，锚点功能将失效。</li></ol></div><h2 id="获取密文" tabindex="-1"><a class="header-anchor" href="#获取密文"><span>获取密文</span></a></h2><p>如果你的密码明文是 <code>123456</code>，需要将其转化为密文，也就是 <code>e10adc3949ba59abbe56e057f20f883e</code>，使用密文去设置密码。</p><p>网站发布后，在密码输入框输入 <code>123456</code> 即可进入网站，他人也无法通过代码中的密文知道你的密码，但是你一定要记住自己的密码明文。</p><p>请在下面的输入框输入密码明文，以获取相应的密文：</p>',6),o=s(`<h2 id="设置加密" tabindex="-1"><a class="header-anchor" href="#设置加密"><span>设置加密</span></a></h2><h3 id="加密整个网站" tabindex="-1"><a class="header-anchor" href="#加密整个网站"><span>加密整个网站</span></a></h3><div class="language-typescript line-numbers-mode" data-highlighter="prismjs" data-ext="ts" data-title="ts"><pre class="language-typescript"><code><span class="line"><span class="token comment">// .vuepress/config.ts</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> defineUserConfig <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress&#39;</span></span>
<span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> recoTheme <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress-theme-reco&#39;</span></span>
<span class="line"></span>
<span class="line"><span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token function">defineUserConfig</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">  theme<span class="token operator">:</span> <span class="token function">recoTheme</span><span class="token punctuation">(</span><span class="token punctuation">{</span></span>
<span class="line">    <span class="token comment">// 设置单个密码</span></span>
<span class="line">    password<span class="token operator">:</span> <span class="token string">&#39;14e1b600b1fd579f47433b88e8d85291&#39;</span><span class="token punctuation">,</span></span>
<span class="line">    <span class="token comment">// 设置多个密码</span></span>
<span class="line">    password<span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">      <span class="token string">&#39;14e1b600b1fd579f47433b88e8d85291&#39;</span><span class="token punctuation">,</span></span>
<span class="line">      <span class="token string">&#39;f8de1968939dd4ac5992ce962993ac2b&#39;</span></span>
<span class="line">    <span class="token punctuation">]</span></span>
<span class="line">  <span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"><span class="token punctuation">}</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="加密单个页面" tabindex="-1"><a class="header-anchor" href="#加密单个页面"><span>加密单个页面</span></a></h3><div class="language-markdown line-numbers-mode" data-highlighter="prismjs" data-ext="md" data-title="md"><pre class="language-markdown"><code><span class="line"><span class="token front-matter-block"><span class="token punctuation">---</span></span>
<span class="line"><span class="token front-matter yaml language-yaml"><span class="token key atrule">title</span><span class="token punctuation">:</span> xxx</span>
<span class="line"><span class="token comment"># 设置单个密码</span></span>
<span class="line"><span class="token key atrule">password</span><span class="token punctuation">:</span> 14e1b600b1fd579f47433b88e8d85291</span>
<span class="line"><span class="token comment"># 设置多个密码</span></span>
<span class="line"><span class="token key atrule">password</span><span class="token punctuation">:</span> </span>
<span class="line"> <span class="token punctuation">-</span> 14e1b600b1fd579f47433b88e8d85291</span>
<span class="line"> <span class="token punctuation">-</span> f8de1968939dd4ac5992ce962993ac2b</span></span>
<span class="line"><span class="token punctuation">---</span></span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,5);function r(d,u){const n=e("md5");return l(),t("div",null,[c,p(n),o])}const v=a(i,[["render",r],["__file","password.html.vue"]]),k=JSON.parse('{"path":"/docs/theme/password.html","title":"加密","lang":"zh-CN","frontmatter":{"title":"加密","date":"2022-07-01T00:35:26.000Z"},"headers":[{"level":2,"title":"获取密文","slug":"获取密文","link":"#获取密文","children":[]},{"level":2,"title":"设置加密","slug":"设置加密","link":"#设置加密","children":[{"level":3,"title":"加密整个网站","slug":"加密整个网站","link":"#加密整个网站","children":[]},{"level":3,"title":"加密单个页面","slug":"加密单个页面","link":"#加密单个页面","children":[]}]}],"git":{"createdTime":1719510409000,"updatedTime":1719510409000,"contributors":[{"name":"reco_luan","email":"recoluan@qq.com","commits":1}]},"filePathRelative":"docs/theme/password.md"}');export{v as comp,k as data};
