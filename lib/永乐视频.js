var rule = {
    title: '永乐视频',
    host: 'https://www.ylys.tv',
    url: '/vodshow/fyfilter/',
    searchUrl: '/vodsearch/**----------fypage---/',
    class_name: '电影&电视剧&动漫&综艺',
    class_url: '1&2&4&3',
    searchable: 1,quickSearch: 0,play_parse: true,filterable: 1,
    filter_url: '{{fl.cateId}}-{{fl.area}}-{{fl.by}}-{{fl.class}}-----fypage---{{fl.year}}',
    filter_def: {'1': {cateId: '1'},'2': {cateId: '2'},'3': {cateId: '3'},'4': {cateId: '4'}},
    headers: {'User-Agent': 'MOBILE_UA'},
    lazy: `js:
  let html = request(input);
  let hconf = html.match(/r player_.*?=(.*?)</)[1];
  let json = JSON5.parse(hconf);
  let url = json.url;
  if (json.encrypt == '1') {
    url = unescape(url);
  } else if (json.encrypt == '2') {
    url = unescape(base64Decode(url));
  }
  if (/\\.(m3u8|mp4|m4a|mp3)/.test(url)) {
    input = {parse: 1,jx: 0,url: url,};} else {input;}`,
    推荐: '*',
    一级: '.module-items a;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
    二级: {
        title: 'h1&&Text;.module-info-tag-link:eq(-1)&&Text',
        img: '.lazyload&&data-original||data-src||src',
        desc: '.module-info-item:eq(-2)&&Text;.module-info-tag-link&&Text;.module-info-tag-link:eq(1)&&Text;.module-info-item:eq(2)&&Text;.module-info-item:eq(1)&&Text',
        content: '.module-info-introduction&&Text',
        tabs: '.module-tab-item',
        lists: '.module-play-list:eq(#id) a',
        tab_text: 'div--small&&Text'
    },
    搜索: 'body .module-item;.module-card-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href;.module-card-item-info&&Text',
    filter:'H4sIAAAAAAAAA+2Ya0+iRxTH3/dTNLy2KQ8Xlf0G/QzNvmC3JN10u03UNjGbTbyhgFbQuLoseKsX1BUFtVYfBL4MMw98iw7PzLkM2SW8IL0k8O53/sw8M+fMnDMzbwNO4Nn3bwM/JWYDzwIv4zOJ734IjAXexH9OKPaqNbG3qvi3+OtfE/4f3yizSJ51Fs+6ZgWBd2PGmjlr1YteesUI46RsF0W6RMoEKl6qKheTpEySUtoQjzVSYtTbyYqlOEGU5HxOzm0zyaFW6ZL1JSdErVIfWm6apFCQz8nbYt8K0aTkwqW3vcEk6lAsb3by50wK07Qy1179gkkR6nAxIxc+khSJklRea6f2mETD8OYbnY8NJjHn1je8GgtIRHn3eVc0wX4dn56mWGsHDRprP6LGasCOqdEM2AEymgF7/UCfGuzVAH1qsCML7TTYoYXvaQCtXT4VaxdGM2CHCb6nwV4TNM4u2GsTNA0UxNNW4wDGosFeMdBOA7bbu1Ajh3Ya7EUImgZ7PYGmAedXy4rkA8xPA2id3U354cRoBrDP7ZV22oU+NeAcGlfe1p+iXoVpIOM/ssftI4yUBtTWl0X2BjQNGKlmTvkZIqWBPFeUuxvoOR9QW2p6n2AmBno2Bx+wZeI7JT6ViLONUqyINXfQjXJc6uSXYQga0NGneflwDY7WQK6qyMcGusoHHHpjXRTqMGgNGKDb96QZQDeuVkkzgO12TmTxEtppwHHun1M7AxT0v0gzQGOp8LFUrHa/V4R7Cu00YLulrPKUSMF+IMaZnDS9bNlL52EyyLRJD+RqUzXDfQqM/0jet2qQigzwoM8m4lMs6I93rVp9wKCHgiqtQy1hGV5BmOxhbg+RPcTtDtkdbg+SPcjsTgztTozbJ8k+ye0TZJ/g9nGyj3N7lOxRbqf5Ony+Ds3X4fN1aL4On69D83X4fJ3gN6FgkCYNDP+IBf0AHcFhARD0SVuf7NVl4U7u4HrTwBfDi1laCnJ9U7jZAZeC3Lnv7NwZ68wr1QEoLdeVlS2j/PhqZppW9/WSSEHOmH75y1SiO5bnY199rX6B0NDOa4V6yy1RGWcBUplI5RwmRXiiYPaolSTQHmZdXZa6KYqajFv5gZqwT2xXOueXTIr2bFqSQtHhHWn6FKd+xwhdIcX8vVjMWkXTmAY5Momre+GWQdMw4FHki0emfkeRfkemfoW437Gh9XhIhdgAHUWSMg+VzgB+7/0yHW8MsCJNPjMwaP4eFe1R0R4V7VHR/reLdiA8tIK9nFRpzKs90RUsRPHXNdtWJ3tSha3GepKFpYZZnfZLuK2yNxe/WqtMYf9homfP2urwXiI6c2mvNAd5TgMvO0v7rOwowHhdNduVFKQiDdhusywzcG80QI5MygcogQbIjbetxxzmXB9Y/u8cwVgMoOZeiKs90DTQIr9hN24N2G5rX97hq4gGWg4PMpVtuZt0c7ZM6Ie7P1QhBz9owD6qC+35NWitYVgl1l/LkMg12CsZB+0DW8dqsVLJ64K9TkHTMCoOo+LwHysOL2a/tepDZMgXusyZfPoEidbhO0dVAFulQOkKYKuxnh1pqZHPVAD7D07PxrRV9lqu73SWGh5afehXA/q9KnuL5fYh1BUD2Of6mZeDcBpALbfnXeKLrAZKel9+5W3ndtvrcMU0gH0eHIoCXA8NDHIFlEWXvRxrwO/1eVPtd90VFeUmWP4GuHZyyzQF6M/jRusJXqMN0JVzX6QK0E4DbaobUYaaagD7LGRkHmqjAfJLVTR30C8+/BNXR38PQtcaBrmufbZ2jS49o7r2/6lrVNTe/Q08viGWVh4AAA=='
}