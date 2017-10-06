import {
  blue500,
  cyan400,
  pink400,
  red700,
  deepPurple700,
} from 'material-ui/styles/colors'

// default image source
const IMG = '/img/0.png'
const MORE = '更多'

// support a default song infomations
const SONG = {
  ALBUM: 'I don\'t know',
  AUDIO: 'music/TimeToSayGoodbye.mp3',
  ID: '000',
  IMG: IMG,
  LRC: '...',
  NAME: 'Time to say goodbye',
  SINGER: 'Lauren Aquilina',
  TIME: '03:08',
}

// support a default sheet
const SHEET = {
  IMG: IMG,
  NAME: '你打开苦难的里面，打开了我',
  CREATOR: '__jln',
  DATE: '2016-12-17',
  DESCRIPTION: '山不在高，有仙则灵。水不在深，有龙则灵。',
}

const RECOMMEND = {
  SUBJECTS: ['推荐歌单', '最新音乐'],
}

const SHEETS = {
  H_HOT_LABEL: '热门标签：',
  LABELS: [ '华语', '流行', '电子', '轻音乐', 'ACG', '怀旧'],
}

const SINGER = {
  ATTRIBUTES: [
    { title: '语种', items: ['全部', '华语', '欧美', '日本', '韩国', '其他'] },
    { title: '分类', items: ['全部', '男歌手', '女歌手', '乐队组合'] },
    { title: '筛选', items: [
      '热门',
      ...Array(26).fill(0).map((v, i) => String.fromCodePoint(i + 0x41)),
      '#',
    ] }
  ]
}

const RANK = {
  OFFICIAL: '官方榜',
  GLOBAL: '全球榜',
  LIST: [
    { title: '飙升榜', color: blue500 },
    { title: '新歌榜', color: cyan400 },
    { title: '原创榜', color: pink400 },
    { title: '热歌榜', color: red700 },
    { title: '歌手榜', color: deepPurple700 },
  ],
  LIST_INFO: {
    ITEMS: Array(8).fill(false).map((v, i) => i),
    NAME: SONG.NAME,
    SINGER: SONG.SINGER,
    DATE: '09月17日更新',
  },
  LOOK_AT_ALL: '查看全部',
}

const LATEST = {
  CONTENT: ['新歌速递', '新碟上架'],
  LABELS: ['全部', '华语', '欧美', '韩国', '日本'],
  LIST_BUTTON: ['播放全部', '收藏全部'],
}

const SUBJECTS = {
  HEADERS: ['推荐', '我的音乐', '创建的歌单'],
  FINDMUSIC: '发现音乐',
  SHEET: '歌单',
  UPLOAD: '上传音乐',
  HISTORY: '下载历史',
}

const SHEETLIST = [
  '我喜欢的音乐',
]

export {
  SONG,
  SHEET,
  RECOMMEND,
  SHEETS,
  SINGER,
  RANK,
  LATEST,
  MORE,
  SUBJECTS,
  SHEETLIST,
}
