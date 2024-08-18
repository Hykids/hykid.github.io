import{_ as a,o as n,c as t,a7 as s}from"./chunks/framework.euTsEaZO.js";const m=JSON.parse('{"title":"git提交规范","description":"git commit message规范","frontmatter":{"title":"git提交规范","description":"git commit message规范","tag":["git"],"sidebar":false},"headers":[],"relativePath":"tools/git提交规范.md","filePath":"tools/git提交规范.md","lastUpdated":null}'),e={name:"tools/git提交规范.md"},i=s(`<h1 id="git-提交规范" tabindex="-1">git 提交规范 <a class="header-anchor" href="#git-提交规范" aria-label="Permalink to &quot;git 提交规范&quot;">​</a></h1><p>说明提交功能，修改位置。过滤 commit，方便后续查找。ChangeLog 可直接从 commit 生成。</p><h2 id="提交格式" tabindex="-1">提交格式 <a class="header-anchor" href="#提交格式" aria-label="Permalink to &quot;提交格式&quot;">​</a></h2><ul><li>feat - 新功能 feature</li><li>fix - 修复 bug</li><li>docs - 文档注释</li><li>style - 代码格式(不影响代码运行的变动)</li><li>refactor - 重构、优化(既不增加新功能，也不是修复 bug)</li><li>perf - 性能优化</li><li>test - 增加测试</li><li>chore - 构建过程或辅助工具的变动</li><li>revert - 回退</li><li>build - 打包</li></ul><h2 id="规范工具" tabindex="-1">规范工具 <a class="header-anchor" href="#规范工具" aria-label="Permalink to &quot;规范工具&quot;">​</a></h2><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fmarionebl.github.io%2Fcommitlint%2F%23%2F" title="https://marionebl.github.io/commitlint/#/" target="_blank" rel="noreferrer">commitlint</a> 检查 git message 提交，当执行<code>git commit</code>时会在对应的 git 钩子上做校验，只有符合格式的 Commit message 才能提交成功</p><p>全局安装</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm install commitizen -g</span></span></code></pre></div><p>项目引入</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>commitizen init cz-conventional-changelog --pnpm --save-dev --save-exact</span></span></code></pre></div><p>上述命令会添加 commitizen 到 package.json devDependencies 依赖中，同时添加配置 config 到 package.json 根目录</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span> &quot;config&quot;: {</span></span>
<span class="line"><span>    &quot;commitizen&quot;: {</span></span>
<span class="line"><span>      &quot;path&quot;: &quot;cz-conventional-changelog&quot;</span></span>
<span class="line"><span>    }</span></span>
<span class="line"><span>  }</span></span></code></pre></div><p>完成安装后，在项目目录下新建 commitlint.config.js 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>module.exports = {</span></span>
<span class="line"><span>	extends: [&#39;@commitlint/config-conventional&#39;],</span></span>
<span class="line"><span>	rules: { // \btype 类型定义</span></span>
<span class="line"><span>	&#39;type-enum&#39;: [2, &#39;always&#39;, [</span></span>
<span class="line"><span>		&quot;feat&quot;, // 新功能 feature</span></span>
<span class="line"><span>		&quot;fix&quot;, // 修复 bug</span></span>
<span class="line"><span>		&quot;docs&quot;, // 文档注释</span></span>
<span class="line"><span>		&quot;style&quot;, // 代码格式(不影响代码运行的变动)</span></span>
<span class="line"><span>		&quot;refactor&quot;, // 重构(既不增加新功能，也不是修复bug)</span></span>
<span class="line"><span>		&quot;perf&quot;, // 性能优化</span></span>
<span class="line"><span>		&quot;test&quot;, // 增加测试</span></span>
<span class="line"><span>		&quot;chore&quot;, // 构建过程或辅助工具的变动</span></span>
<span class="line"><span>		&quot;revert&quot;, // 回退</span></span>
<span class="line"><span>		&quot;build&quot; // 打包 ]],</span></span>
<span class="line"><span>	&#39;subject-case&#39;: [0] } };</span></span></code></pre></div><h2 id="change-log" tabindex="-1">Change Log <a class="header-anchor" href="#change-log" aria-label="Permalink to &quot;Change Log&quot;">​</a></h2><p>Change Log 是发布新版本时，用来说明与上一个版本差异的文档。</p><h3 id="工具" tabindex="-1">工具 <a class="header-anchor" href="#工具" aria-label="Permalink to &quot;工具&quot;">​</a></h3><p><a href="https://link.juejin.cn/?target=https%3A%2F%2Fgithub.com%2Fconventional-changelog%2Fconventional-changelog%23conventional-changelog" title="https://github.com/conventional-changelog/conventional-changelog#conventional-changelog" target="_blank" rel="noreferrer">Conventional Changelog</a> 自动生成 Change Log 文件</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>npm i conventional-changelog-cli --save-dev</span></span></code></pre></div><p>在 scripts 添加</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>&quot;scripts&quot;: { &quot;changelog&quot;: &quot;conventional-changelog -p angular -i CHANGELOG.md -s&quot; }</span></span></code></pre></div><p>引入后可使使用<code>npm run changelog</code>自动生成 CHANGELOG.md 文件</p><h2 id="参考链接" tabindex="-1">参考链接 <a class="header-anchor" href="#参考链接" aria-label="Permalink to &quot;参考链接&quot;">​</a></h2><p><a href="ttps://juejin.cn/post/6844903793033756680" target="_blank" rel="noreferrer">超详细的 Git 提交规范引入指南</a><a href="https://ruanyifeng.com/blog/2016/01/commit_message_change_log.html" target="_blank" rel="noreferrer">阮一峰 - Commit message 和 Change log 编写指南</a></p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span></span></span></code></pre></div>`,25),o=[i];function l(p,c,g,h,r,d){return n(),t("div",null,o)}const b=a(e,[["render",l]]);export{m as __pageData,b as default};
