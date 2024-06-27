import{_ as e,r as t,o as l,c as o,a as i,b as n,d as c,w as p,e as s}from"./app-BEQIFcJr.js";const u={},r=s(`<div class="custom-container tip"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8h.01"></path><path d="M11 12h1v4h1"></path></g></svg><p class="custom-container-title">TIP</p><p>In order to meet more usage scenarios of users, the theme has modularized the home page. Users can specify the content modules to be displayed and their display order in the <code>frontmatter</code> of the md file of the home page. More modules will be developed later for everyone to use , and supports users to customize the home page module as needed.</p></div><h2 id="configure" tabindex="-1"><a class="header-anchor" href="#configure"><span>Configure</span></a></h2><p>Currently, the built-in homepage modules include <code>Banner</code>, <code>BannerBrand</code>, <code>Features</code>, <code>Blog</code>, <code>MdContent</code>, <code>Comment</code>, <code>Footer</code>, and their configurations are as follows:</p><h3 id="modules" tabindex="-1"><a class="header-anchor" href="#modules"><span>modules</span></a></h3><ul><li>description: Specify the home page module</li><li>default: <code>[&#39;BannerBrand&#39;, &#39;Blog&#39;, &#39;Footer&#39;]</code></li><li>optional：<code>Banner</code>、<code>BannerBrand</code>、<code>Features</code>、<code>Blog</code>、<code>MdContent</code>、<code>Comment</code>、<code>Footer</code></li><li>configuration item: <ul><li>Banner: Huge display map, can display logo, title, brief description, background image, top and bottom layout</li><li>BannerBrand: Huge display map in brand format, which can display logo, title, brief description, background image, button, left and right layout</li><li>Blog: Blog module, two-column layout, showing the list of blogs as a rule, and displaying user information and blog-related content on the right</li><li>MdContent: The markdown text display module of the home page</li><li>Comment: Comment Module</li><li>Footer: Home Bottom Module</li></ul></li></ul><h3 id="banner" tabindex="-1"><a class="header-anchor" href="#banner"><span>banner</span></a></h3><ul><li>description: Used to configure the <code>Banner</code> module</li><li>frontmatter options: <ul><li>heroText: title</li><li>tagline: Briefly</li><li>heroImage: index logo</li><li>heroImageStyle: index logo style</li><li>bgImage: Background image</li><li>bgImageStyle: Background image style</li></ul></li><li>case: <ul><li><img width="600" alt="banner" src="https://user-images.githubusercontent.com/18067907/152644548-5606f75f-4739-47e5-8105-c11164fbae82.png"></li></ul></li></ul><h3 id="bannerbrand" tabindex="-1"><a class="header-anchor" href="#bannerbrand"><span>bannerBrand</span></a></h3><ul><li>description: Used to configure the <code>BannerBrand</code> module</li><li>frontmatter options: <ul><li>title: Title</li><li>descrition: Descrition</li><li>tagline: tagline</li><li>bgImage: Background image</li><li>bgImageStyle: Background image style</li><li>buttons: button <ul><li>text: button text</li><li>link: content link</li><li>type: content style, the default background color, if not needed, can be set to &#39;plain&#39;</li></ul></li><li>socialLinks: For social address, See <a href="/en/docs/guide/icon">here</a> for settings <ul><li>icon: icon</li><li>link: button link</li></ul></li></ul></li><li>case: <ul><li><img width="600" alt="bannerBrand" src="https://user-images.githubusercontent.com/18067907/214793265-d316133f-12c3-47a3-8f96-a34e5cca5087.png"></li></ul></li></ul><h3 id="blog" tabindex="-1"><a class="header-anchor" href="#blog"><span>blog</span></a></h3><ul><li>description: Used to configure the <code>Blog</code> module</li><li>frontmatter options: <ul><li>socialLinks: For social address, See <a href="/en/docs/guide/icon">here</a> for settings <ul><li>icon: icon</li><li>link: button link</li></ul></li></ul></li><li>themeConfig options: <ul><li>author: author name</li><li>authorAvatar: author avatar</li></ul></li><li>case: <ul><li><img width="600" alt="blog" src="https://user-images.githubusercontent.com/18067907/216823247-8aee08e1-2c24-45e5-8c2e-b9a919ed1c27.png"></li></ul></li></ul><h3 id="features" tabindex="-1"><a class="header-anchor" href="#features"><span>features</span></a></h3><ul><li>description: Used to configure the feature list of home page</li><li>frontmatter options: <ul><li>title：标题</li><li>details：详情</li></ul></li><li>case: <ul><li><img width="600" alt="footer" src="https://github.com/vuepress-reco/vuepress-theme-reco/assets/18067907/5b1ced88-606a-4088-b32d-4a9c6ed9cc66"></li></ul></li></ul><h3 id="footer" tabindex="-1"><a class="header-anchor" href="#footer"><span>footer</span></a></h3><ul><li>description: Used to configure the <code>Footer</code> module</li><li>frontmatter options: <ul><li>record: Domain name filing copy</li><li>recordLink: Domain name registration address</li><li>cyberSecurityRecord: Police record copy</li><li>cyberSecurityLink: Public security record address</li><li>startYear: Start time of this site</li></ul></li><li>case: <ul><li><img width="600" alt="footer" src="https://user-images.githubusercontent.com/18067907/152644689-f7fc1e34-6f43-44f5-86a0-fd26d4157bb1.png"></li></ul></li></ul><h3 id="mdcontent" tabindex="-1"><a class="header-anchor" href="#mdcontent"><span>MdContent</span></a></h3><ul><li>description: The markdown text display module of the home page</li><li>case: -</li></ul><h3 id="comment" tabindex="-1"><a class="header-anchor" href="#comment"><span>Comment</span></a></h3><ul><li>description: Comment function, if the site wants to put the comment function on the home page, you can configure this option</li><li>case: -</li></ul><h2 id="case" tabindex="-1"><a class="header-anchor" href="#case"><span>Case</span></a></h2><div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">modules</span><span class="token punctuation">:</span> <span class="token comment"># Designated homepage display module  - BannerBrand</span></span>
<span class="line">  <span class="token punctuation">-</span> Blog</span>
<span class="line">  <span class="token punctuation">-</span> MdContent</span>
<span class="line">  <span class="token punctuation">-</span> Features</span>
<span class="line">  <span class="token punctuation">-</span> Footer</span>
<span class="line"><span class="token key atrule">banner</span><span class="token punctuation">:</span> <span class="token comment"># banner module configuration</span></span>
<span class="line">  <span class="token key atrule">heroText</span><span class="token punctuation">:</span> 午后南杂</span>
<span class="line">  <span class="token key atrule">tagline</span><span class="token punctuation">:</span> Enjoy when you can<span class="token punctuation">,</span> and endure when you must.</span>
<span class="line">  <span class="token key atrule">heroImage</span><span class="token punctuation">:</span> /logo.png</span>
<span class="line">  <span class="token key atrule">heroImageStyle</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">maxWidth</span><span class="token punctuation">:</span> 200px</span>
<span class="line">    <span class="token key atrule">margin</span><span class="token punctuation">:</span> 0 auto 2rem</span>
<span class="line">  <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> /banner.jpg</span>
<span class="line">  <span class="token key atrule">bgImageStyle</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">height</span><span class="token punctuation">:</span> 450px</span>
<span class="line"><span class="token key atrule">bannerBrand</span><span class="token punctuation">:</span> <span class="token comment"># bannerBrand module configuration</span></span>
<span class="line">  <span class="token key atrule">title</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>reco</span>
<span class="line">  <span class="token key atrule">description</span><span class="token punctuation">:</span> A simple vuepress Blog &amp; Doc theme.</span>
<span class="line">  <span class="token key atrule">tagline</span><span class="token punctuation">:</span> vuepress<span class="token punctuation">-</span>theme<span class="token punctuation">-</span>reco 2.0 continues to adhere to the concise style<span class="token punctuation">,</span> all functions are out of the box<span class="token punctuation">,</span> the home page is assembled modularly<span class="token punctuation">,</span> the style is written with tailwindcss<span class="token punctuation">,</span> and Vite is used as the default compiler. You only need to be responsible for content creation<span class="token punctuation">,</span> please leave the rest to me.</span>
<span class="line">  <span class="token key atrule">bgImage</span><span class="token punctuation">:</span> /banner.jpg</span>
<span class="line">  <span class="token key atrule">bgImageStyle</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token key atrule">height</span><span class="token punctuation">:</span> 450px</span>
<span class="line">  <span class="token key atrule">buttons</span><span class="token punctuation">:</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Guide<span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;/docs/guide/introduce&#39;</span> <span class="token punctuation">}</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">text</span><span class="token punctuation">:</span> Default Style<span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;/docs/theme/introduce&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">type</span><span class="token punctuation">:</span> <span class="token string">&#39;plain&#39;</span> <span class="token punctuation">}</span></span>
<span class="line">  <span class="token key atrule">socialLinks</span><span class="token punctuation">:</span> <span class="token comment"># For social address</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;LogoGithub&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;https://github.com/recoluan&#39;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token key atrule">blog</span><span class="token punctuation">:</span> <span class="token comment"># blog module configuration</span></span>
<span class="line">  <span class="token key atrule">socialLinks</span><span class="token punctuation">:</span> <span class="token comment"># For social address</span></span>
<span class="line">    <span class="token punctuation">-</span> <span class="token punctuation">{</span> <span class="token key atrule">icon</span><span class="token punctuation">:</span> <span class="token string">&#39;LogoGithub&#39;</span><span class="token punctuation">,</span> <span class="token key atrule">link</span><span class="token punctuation">:</span> <span class="token string">&#39;https://github.com/recoluan&#39;</span> <span class="token punctuation">}</span></span>
<span class="line"><span class="token key atrule">features</span><span class="token punctuation">:</span></span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Past</span>
<span class="line">  <span class="token key atrule">details</span><span class="token punctuation">:</span> Develop a vuepress blog theme that looks happy and writes smoothly.</span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Present</span>
<span class="line">  <span class="token key atrule">details</span><span class="token punctuation">:</span> Help more friends save time to write content with heart<span class="token punctuation">,</span> instead of just configuring a blog to enjoy yourself.</span>
<span class="line"><span class="token punctuation">-</span> <span class="token key atrule">title</span><span class="token punctuation">:</span> Future</span>
<span class="line">  <span class="token key atrule">details</span><span class="token punctuation">:</span> Attract more friends to participate in the development and continue to have powerful functions.</span>
<span class="line"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token comment"># footer module configuration</span></span>
<span class="line">  <span class="token key atrule">record</span><span class="token punctuation">:</span> Domain name filing copy</span>
<span class="line">  <span class="token key atrule">recordLink</span><span class="token punctuation">:</span> Domain name registration address</span>
<span class="line">  <span class="token key atrule">cyberSecurityRecord</span><span class="token punctuation">:</span> Police record copy</span>
<span class="line">  <span class="token key atrule">cyberSecurityLink</span><span class="token punctuation">:</span> Public security record address</span>
<span class="line">  <span class="token key atrule">startYear</span><span class="token punctuation">:</span> <span class="token number">2018</span></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="custom-home-module" tabindex="-1"><a class="header-anchor" href="#custom-home-module"><span>Custom Home Module</span></a></h2><div class="custom-container warning"><svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24"><g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="9"></circle><path d="M12 8v4"></path><path d="M12 16h.01"></path></g></svg><p class="custom-container-title">WARNING</p><p>The css scheme of the reco theme is postcss + tailwindcss, which supports the latest CSS nesting proposal (class scss), you need to pay attention when writing styles for components.</p></div><p>As long as the component is registered globally, it can be used by the home page as a module of the home page.</p>`,24),d=s(`<div class="language-yaml line-numbers-mode" data-highlighter="prismjs" data-ext="yml" data-title="yml"><pre class="language-yaml"><code><span class="line"><span class="token punctuation">---</span></span>
<span class="line"><span class="token key atrule">home</span><span class="token punctuation">:</span> <span class="token boolean important">true</span></span>
<span class="line"><span class="token key atrule">modules</span><span class="token punctuation">:</span> <span class="token comment"># Designated homepage display module</span></span>
<span class="line">  <span class="token punctuation">-</span> CustomModule</span>
<span class="line">  <span class="token punctuation">-</span> Footer</span>
<span class="line"><span class="token key atrule">customModule</span><span class="token punctuation">:</span> <span class="token comment"># customModule module configuration</span></span>
<span class="line">  <span class="token key atrule">key</span><span class="token punctuation">:</span> value</span>
<span class="line"><span class="token key atrule">footer</span><span class="token punctuation">:</span> <span class="token comment"># footer module configuration</span></span>
<span class="line">  <span class="token key atrule">record</span><span class="token punctuation">:</span> Domain name filing copy</span>
<span class="line">  <span class="token key atrule">recordLink</span><span class="token punctuation">:</span> Domain name registration address</span>
<span class="line">  <span class="token key atrule">cyberSecurityRecord</span><span class="token punctuation">:</span> Police record copy</span>
<span class="line">  <span class="token key atrule">cyberSecurityLink</span><span class="token punctuation">:</span> Public security record address</span>
<span class="line">  <span class="token key atrule">startYear</span><span class="token punctuation">:</span> <span class="token number">2018</span></span>
<span class="line"><span class="token punctuation">---</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>When developing the front page module, you can get the <code>frontmatter</code> configuration by the following methods:</p><div class="language-javascript line-numbers-mode" data-highlighter="prismjs" data-ext="js" data-title="js"><pre class="language-javascript"><code><span class="line"><span class="token keyword">import</span> <span class="token punctuation">{</span> usePageFrontmatter<span class="token punctuation">,</span> withBase <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vuepress/utils&#39;</span></span>
<span class="line"><span class="token keyword">const</span> frontmatter <span class="token operator">=</span> <span class="token function">usePageFrontmatter</span><span class="token punctuation">(</span><span class="token punctuation">)</span></span>
<span class="line"></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div>`,3);function m(k,h){const a=t("RouteLink");return l(),o("div",null,[r,i("p",null,[n("First, you can refer to "),c(a,{to:"/docs/theme/register-components.html"},{default:p(()=>[n("Register Components")]),_:1}),n(" to register the homepage module component as a global component, and then configure it in the frontmatter of the homepage (if the custom module component is CustomModule):")]),d])}const v=e(u,[["render",m],["__file","frontmatter-home.html.vue"]]),b=JSON.parse('{"path":"/en/docs/theme/frontmatter-home.html","title":"Home Page","lang":"en-US","frontmatter":{"title":"Home Page","date":"2021-11-06T23:36:01.000Z"},"headers":[{"level":2,"title":"Configure","slug":"configure","link":"#configure","children":[{"level":3,"title":"modules","slug":"modules","link":"#modules","children":[]},{"level":3,"title":"banner","slug":"banner","link":"#banner","children":[]},{"level":3,"title":"bannerBrand","slug":"bannerbrand","link":"#bannerbrand","children":[]},{"level":3,"title":"blog","slug":"blog","link":"#blog","children":[]},{"level":3,"title":"features","slug":"features","link":"#features","children":[]},{"level":3,"title":"footer","slug":"footer","link":"#footer","children":[]},{"level":3,"title":"MdContent","slug":"mdcontent","link":"#mdcontent","children":[]},{"level":3,"title":"Comment","slug":"comment","link":"#comment","children":[]}]},{"level":2,"title":"Case","slug":"case","link":"#case","children":[]},{"level":2,"title":"Custom Home Module","slug":"custom-home-module","link":"#custom-home-module","children":[]}],"git":{"createdTime":1719510409000,"updatedTime":1719510409000,"contributors":[{"name":"reco_luan","email":"recoluan@qq.com","commits":1}]},"filePathRelative":"en/docs/theme/frontmatter-home.md"}');export{v as comp,b as data};
