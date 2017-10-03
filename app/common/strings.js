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
  AUDIO: '/music/TimeToSayGoodbye.mp3',
  ID: '001',
  IMG: IMG,
  LRC: '...',
  NAME: 'Time to say goodbye',
  SINGER: 'Lauren Aquilina',
  TIME: '03:08',
}

// support a default sheet
const SHEET = {
  SRC: IMG,
  VALUE: '你打开苦难的里面，打开了我',
}

const RECOMMEND = {
  SUBJECTS: ['推荐歌单', '最新音乐', '推荐歌手'],
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
  LABELS: ['全部', '华语', '欧美', '韩国', '日本'],
  LIST_BUTTON: ['播放全部', '收藏全部'],
}

const SUBJECTS = [
  { HEADER: '推荐', ITEMS: ['发现音乐'] },
  { HEADER: '我的音乐', ITEMS: ['上传音乐', '下载历史'] },
  { HEADER: '创建的歌单', ITEMS: ['我喜欢的音乐'] },
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
}
