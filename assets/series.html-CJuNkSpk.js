import{_ as s,o as n,c as a,e}from"./app-BEQIFcJr.js";const p={},t=e(`<p>In <code>vuepress-theme-reco@2.x</code>, <code>sidebar</code> was changed to <code>series</code> for two reasons:</p><ol><li>In <code>vuepress-theme-reco@1.x</code>, the sidebar is split into <code>left sidebar&#39; and </code>right sidebar&#39;, multiple documents can be aggregated in the left sidebar Together, to express the connection between them, the right sidebar shows the directory structure of the current page, because considering the <code>vuepress</code> default theme, putting them all on the left sidebar will make it unfocused, but by <code>sidebar</code> and <code>subSidebar</code> to represent <code>left sidebar</code> and <code>right sidebar</code>, the semantics are not very good;</li><li>Considering that the documents that need to be put together must be a &quot;series&quot; of documents, such as tutorials, anthologies, etc., <code>series</code> is used.</li></ol><h2 id="configure" tabindex="-1"><a class="header-anchor" href="#configure"><span>Configure</span></a></h2><p><strong>general</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// .vuepress/config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;usage&#39;</span> <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>group</strong></p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// .vuepress/config.js</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;base&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;usage&#39;</span> <span class="token punctuation">]</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">collapsible</span><span class="token operator">:</span> <span class="token boolean">true</span> <span class="token comment">// expand by default, true is collapsible</span></span>
<span class="line">        <span class="token punctuation">}</span><span class="token punctuation">,</span></span>
<span class="line">        <span class="token punctuation">{</span></span>
<span class="line">          <span class="token literal-property property">text</span><span class="token operator">:</span> <span class="token string">&#39;advanced&#39;</span><span class="token punctuation">,</span></span>
<span class="line">          <span class="token literal-property property">children</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;home&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;series&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;comments&#39;</span> <span class="token punctuation">]</span></span>
<span class="line">        <span class="token punctuation">}</span></span>
<span class="line">      <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>error</strong></p><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>If the name of the article on the left shows the path to the document, you can turn children into full mode.</p></div><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token comment">// omit mode</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;usage&#39;</span> <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span>
<span class="line"><span class="token comment">// full mode</span></span>
<span class="line">module<span class="token punctuation">.</span>exports <span class="token operator">=</span> <span class="token punctuation">{</span></span>
<span class="line">  <span class="token literal-property property">themeConfig</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">    <span class="token literal-property property">series</span><span class="token operator">:</span> <span class="token punctuation">{</span></span>
<span class="line">      <span class="token string-property property">&#39;/vuepress-theme-reco/&#39;</span><span class="token operator">:</span> <span class="token punctuation">[</span> <span class="token string">&#39;/vuepress-theme-reco/introduce&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;/vuepress-theme-reco/usage&#39;</span> <span class="token punctuation">]</span></span>
<span class="line">    <span class="token punctuation">}</span></span>
<span class="line">  <span class="token punctuation">}</span></span>
<span class="line"><span class="token punctuation">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,10),l=[t];function i(o,c){return n(),a("div",null,l)}const u=s(p,[["render",i],["__file","series.html.vue"]]),d=JSON.parse('{"path":"/en/docs/theme/series.html","title":"Series","lang":"en-US","frontmatter":{"title":"Series","date":"2021-11-06T23:36:01.000Z"},"headers":[{"level":2,"title":"Configure","slug":"configure","link":"#configure","children":[]}],"git":{"createdTime":1719510409000,"updatedTime":1719510409000,"contributors":[{"name":"reco_luan","email":"recoluan@qq.com","commits":1}]},"filePathRelative":"en/docs/theme/series.md"}');export{u as comp,d as data};
