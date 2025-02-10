var rule={
    title: '爱上电影',
    host: 'https://23dyw.cn',
    url: 'vod/index.html?page=fypage&type_id=fyclass',
    searchUrl: '/public/auto/search1.html?keyword=**',
    searchable: 2,
    quickSearch: 0,
    filterable: 0,
    headers: {
                'User-Agent':'Mozilla/5.0', // "Cookie":"searchneed=ok"
            },
class_name: '推荐&电影&电视剧&综艺&动漫',
class_url: '0&1&2&3&4',
    play_parse: true,
    lazy: '',
    limit: 6,
    推荐: '.public-list-div .public-list-bj;img&&alt;img&&data-original;.public-list-prb&&Text;a&&href',
    double: true,
    一级: '.public-list-box .public-list-bj;img&&alt;img&&data-original;.public-list-prb&&Text;a&&href',
    二级: {
    "title": ".this-desc-title&&Text",
    "img": ".lazy&&data-src",
    "desc": ".this-desc-info&&Text;.this-info:eq(0)&&a&&Text;.this-info:eq(1)&&a&&Text",
    "content": ".this-desc .height_limit&&Text",
    "tabs": ".title-tab .switch-button&&a",
    "lists": ".anthology-list-play:eq(#id) a"},
      搜索: '.public-list-div .public-list-bj;img&&alt;img&&data-original;.public-list-prb&&Text;a&&href',
      }