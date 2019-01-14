webpackJsonp([0xa815315a84b8],{496:function(a,e){a.exports={data:{markdownRemark:{html:'<p><img src="https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/adaf3a4c976806d3983a27734e42749d/Ruby_On_Rails_Logo.svg.png" alt="Rails"></p>\n<p>Rails 에서 Static Page 처리를 위해서는 간단하게 <code class="language-text">controller</code> 내에 <code class="language-text">action</code> 을 지정한 뒤 <code class="language-text">action</code> 명으로 <code class="language-text">template</code> 파일을 만들고, <code class="language-text">router</code> 에 등록을 하면 됩니다.</p>\n<p>하지만, 이런 파일들이 상당히 많다면 어떻게 관리되어야 할까요? 하나하나씩 <code class="language-text">router</code> 에 등록하고 <code class="language-text">action</code> 을 위한 <code class="language-text">method</code> 를 만들고 <code class="language-text">template</code> 을 연결하기엔 많이 비효율적인 것 같습니다.</p>\n<p>이런 경우를 위해 <a href="https://github.com/thoughtbot/high_voltage">High Voltage Gem</a> 을 사용하는 경우도 있습니다만, 회사 내 프론트엔드와 백엔드를 넘나들고 있는 임모 개발자가 좋은 방법을 찾아서 공유해 주었습니다.</p>\n<hr>\n<h3 id="lookup_context"><a href="#lookup_context" aria-hidden="true" class="anchor"><svg aria-hidden="true" height="16" version="1.1" viewBox="0 0 16 16" width="16"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg></a>lookup_context</h3>\n<p>먼저, 라우트에 다음과 같이 설정했다고 가정합니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby">get <span class="token string">\'ip/:id\'</span> <span class="token operator">=</span><span class="token operator">></span> <span class="token string">"pages#ip"</span><span class="token punctuation">,</span> as<span class="token punctuation">:</span> <span class="token symbol">:ip_landing</span></code></pre>\n      </div>\n<p>이제 <code class="language-text">pages_controller</code> 내의 <code class="language-text">ip</code> action method 에 <code class="language-text">params[:id]</code> 값이 page 명으로 전달이 됩니다.</p>\n<p>처음에 고민했었던 구문은 아주 심플하게 action method 내에서 </p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby"><span class="token keyword">def</span> ip\n  render params<span class="token punctuation">[</span><span class="token symbol">:id</span><span class="token punctuation">]</span>\n<span class="token keyword">end</span></code></pre>\n      </div>\n<p>형태로 처리하는 것이었습니다. 하지만, 이런게 작성이 될 경우 <code class="language-text">params[:id]</code> 에 어떤 값이 넘어오는지에 대한 검증을 할 수 없기 때문에 때로는 예상치 못한 오류를 발생시키기도 합니다.</p>\n<p>임모 개발자를 통해 공유된 방법은 다음과 같습니다.</p>\n<div class="gatsby-highlight">\n      <pre class="language-ruby"><code class="language-ruby"><span class="token keyword">def</span> ip\n  <span class="token keyword">if</span> lookup_context<span class="token punctuation">.</span>exists<span class="token operator">?</span><span class="token punctuation">(</span>params<span class="token punctuation">[</span><span class="token symbol">:id</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">"path1/path2"</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">true</span><span class="token punctuation">)</span>\n    render params<span class="token punctuation">[</span><span class="token symbol">:id</span><span class="token punctuation">]</span>\n  <span class="token keyword">else</span>\n    render 404_path\n  <span class="token keyword">end</span>\n<span class="token keyword">end</span></code></pre>\n      </div>\n<p>위 구문에서 <code class="language-text">params[:id]</code> 값이 <code class="language-text">about</code> 이었다면  <code class="language-text">path1/path2/_about.html.erb</code> 파일이 존재할 경우 <code class="language-text">true</code> 가 되고 해당 파일을 rendering 하게 됩니다. 만약, 존재하지 않는 값으로 <code class="language-text">params[:id]</code> 가 넘어왔다면 <code class="language-text">404 page not found</code> 페이지를 출력하게 됩니다.</p>\n<p>너무 심플해서 약간은 이상한 구문인듯 합니다만, 상당히 깔끔한 방법인 것 같기도 합니다. Route 파일에서 <code class="language-text">:id</code> 에 대한 <code class="language-text">constraint</code> 구문만 강화하면 훨씬 좋은 구문이 될 것 같습니다.</p>\n<p>임모 개발자님에게 감사드립니다.</p>',timeToRead:1,excerpt:"Rails 에서 Static Page…",frontmatter:{title:"Rails에서 template 파일이 존재할 경우에만 render 수행",cover:"https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover7.jpg",date:"2019-01-14T16:12:00.000Z",category:"tech",tags:["rails","helper","controller"],author:"wecanooo"},fields:{slug:"/rails에서-template-파일이-존재할-경우에만-render-수행"}},prev:{excerpt:" 이번 에피소드에서는  Github Pages 의 기능을 이용하여 간단한 블로그를 제작하는 방법을 알아보고자 한다. 많은 사람들이 블로그를 운영하기 위해서  Wordpress…",frontmatter:{title:"Github와 Jekyll을 이용한 무료 블로그 만들기 - 1",cover:"https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover7.jpg",date:"2016-04-29"},fields:{slug:"/github와-jekyll을-이용한-무료-블로그-만들기-1"}},next:{excerpt:"Rails 에서   과   은 어떤 차이점이 있을까요? Model 과 Model 간의   관계에서   과   을 설정했을 경우 아래와 같은 형태로 동작을 하게 됩니다. dependent…",frontmatter:{title:"Rails에서 destroy_all 과 delete_all 의 차이점",cover:"https://st-kr-tutor.s3-ap-northeast-2.amazonaws.com/got/87836b5eb053590be9fc6d495e7858fc/cover6.jpg",date:"2019-01-10T21:12:00.000Z"},fields:{slug:"/rails에서-destroy-all-과-delete-all-의-차이점"}},authors:{edges:[{node:{id:"casper",name:"Casper User",image:"https://api.adorable.io/avatars/150/test.png",url:"http://gatsbyjs.org/",bio:"Yeah, I like animals better than people sometimes... Especially dogs. Dogs are the best. Every time you come home, they act like they haven't seen you in a year. And the good thing about dogs... is they got different dogs for different people."}},{node:{id:"wecanooo",name:"Eric Jang",image:"https://api.adorable.io/avatars/150/wecanooo@adorable.io.png",url:"http://about.me/wecanooo",bio:"루비온레일즈를 좋아하고, 여행을 좋아하는 개발자입니다."}}]}},pathContext:{slug:"/rails에서-template-파일이-존재할-경우에만-render-수행",total:12,prev:"/github와-jekyll을-이용한-무료-블로그-만들기-1",next:"/rails에서-destroy-all-과-delete-all-의-차이점"}}}});
//# sourceMappingURL=path---rails에서-template-파일이-존재할-경우에만-render-수행-c807e9ff3821c7ddcd25.js.map