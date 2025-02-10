var rule = {
    title: '皮皮影视',
    host: 'https://www.pipiys1.com',
    url: '/vodshow/fyclass--------fypage---.html',
    searchUrl: '/vodsearch/**----------fypage---.html',
    searchable: 2,//是否启用全局搜索,
    quickSearch: 0,//是否启用快速搜索,
    filterable: 0,//是否启用分类筛选,
    headers: {
                'User-Agent':'MOBILE_UA', // "Cookie":"searchneed=ok"
            },
    编码: 'utf-8',
    timeout: 5000,
    class_name:'电影&电视剧&综艺&动漫&短剧',
  class_url:'1&2&3&4&38',
  tab_exclude: '深夜福利|美女成人直播|日更新|热搜榜',
    play_parse: true,
     lazy: `js:
            if(/\\.(m3u8|mp4)/.test(input)){
                input = {parse:0,url:input}
            }else{
                if(rule.parse_url.startsWith('json:')){
                    let purl = rule.parse_url.replace('json:','')+input;
                    let html = request(purl);
                    input = {parse:0,url:JSON.parse(html).url}
                }else{
                    input= rule.parse_url+input; 
                }`,
    limit: 6,
    double: true,
    推荐: '*',
一级: 'div&&.module-poster-item.module-item;a&&title;img&&data-original;.module-item-note&&Text;a&&href',
    二级: {
        "title": "h1&&Text",
        "img": "img&&src",
        "desc": ".module-info-content&&Text",
        "content": ".module-info-introduction-content&&Text",
        "tabs": ".module-tab-item.tab-item",
        "lists": ".module-play-list-content:eq(#id)&&a"
            },
            搜索:'.module-card-item;img&&alt;img&&data-original;.module-info-item-content&&Text;a&&href',
        }