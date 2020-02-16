import React from 'react';
import home_background from '../img/home_background.svg';
import article_pic from "../img/article_pic.svg";
import app_pic from "../img/app_pic.svg";
import game_pic from "../img/game_pic.svg";
import logo from '../img/logo.svg';
import rank1 from '../img/rank1.svg';
import rank2 from '../img/rank2.svg';
import rank3 from '../img/rank3.svg';
import rank4 from '../img/rank4.svg';
import {showNotSupportInfo} from "./utils";

// 导航
export const NavDataSource = {
    wrapper: {className: 'header0 home-page-wrapper'},
    page: {className: 'home-page'},
    logo: {
        className: 'header0-logo',
        children: logo,
    },
    Menu: {
        className: 'header0-menu',
        children: [
            {
                name: 'item0',
                className: 'header0-item',
                children: {
                    href: '#banner',
                    children: [{children: '首页', name: 'text'}],
                },
            },
            {
                name: 'item1',
                className: 'header0-item',
                children: {
                    href: '#wortin-recommend',
                    children: [{children: '我丁推荐', name: 'text'}],
                },
            },
            {
                name: 'item2',
                className: 'header0-item',
                children: {
                    href: '#article',
                    children: [{children: '分享', name: 'text'}],
                },
            },
            {
                name: 'item5',
                className: 'header0-item',
                children: {
                    href: '#author',
                    children: [{children: '作者', name: 'text'}],
                },
            },
            {
                name: 'item6',
                className: 'header0-item',
                children: {
                    href: '#wortin-records',
                    children: [{children: '创世纪', name: 'text'}],
                },
            },
        ],
    },
    mobileMenu: {className: 'header0-mobile-menu'},
};
// 首页
export const BannerDataSource = {
    wrapper: {className: 'home-page-wrapper banner5'},
    page: {className: 'home-page banner5-page'},
    childWrapper: {
        className: 'banner5-title-wrapper',
        children: [
            {name: 'title', children: 'Wortin World', className: 'banner5-title'},
            {
                name: 'explain',
                className: 'banner5-explain',
                children: '我丁世界',
            },
            {
                name: 'content',
                className: 'banner5-content',
                children: '张丁文分享个人文章、应用和游戏的空间',
            },
            {
                name: 'button',
                className: 'banner5-button-wrapper',
                children: {
                    href: '#',
                    className: 'banner5-button',
                    type: 'primary',
                    onClick: showNotSupportInfo,
                    children: '开始冒险',
                },
            },
        ],
    },
    image: {
        className: 'banner5-image',
        children: home_background,
    },
};
// 推荐
export const WortinRecommendDataSource = {
    wrapper: {className: 'home-page-wrapper teams1-wrapper'},
    page: {className: 'home-page teams1'},
    OverPack: {playScale: 0.3, className: ''},
    titleWrapper: {
        className: 'title-wrapper',
        children: [{name: 'title', children: '我丁推荐'}],
    },
    block: {
        className: 'block-wrapper',
        children: [
            {
                name: 'block0',
                className: 'block',
                md: 8,
                xs: 24,
                titleWrapper: {
                    children: [
                        {
                            name: 'image',
                            className: 'teams1-image',
                            children: <img src={require('../img/wortin_world_design_schema.svg')}></img>
                        },
                        {name: 'title', className: 'teams1-title', children: '世界构想'},
                        {
                            name: 'content',
                            className: 'teams1-job',
                            children: '敬请期待',
                        },
                        {
                            name: 'content1',
                            className: 'teams1-content',
                            children:
                                '想了解我丁世界的创作背景、设计方案和故事架构吗？看这里！',
                        },
                    ],
                },
            },
            {
                name: 'block1',
                className: 'block',
                md: 8,
                xs: 24,
                titleWrapper: {
                    children: [
                        {
                            name: 'image',
                            className: 'teams1-image',
                            children: <img src={require('../img/wortin_world_wps_template.svg')}></img>,
                        },
                        {name: 'title', className: 'teams1-title', children: '我丁系列模板'},
                        {
                            name: 'content',
                            className: 'teams1-job',
                            children: '敬请期待',
                        },
                        {
                            name: 'content1',
                            className: 'teams1-content',
                            children:
                                '太喜欢我丁世界的设计风格了，来下载我丁风格的文档模板吧！',
                        },
                    ],
                },
            },
            {
                name: 'block2',
                className: 'block',
                md: 8,
                xs: 24,
                titleWrapper: {
                    children: [
                        {
                            name: 'image',
                            className: 'teams1-image',
                            children: <img src={require('../img/wortin_world_time_app.svg')}></img>,
                        },
                        {name: 'title', className: 'teams1-title', children: '我丁时光'},
                        {
                            name: 'content',
                            className: 'teams1-job',
                            children: '敬请期待',
                        },
                        {
                            name: 'content1',
                            className: 'teams1-content',
                            children:
                                '我丁的时间管理APP——我丁时光，与你一同见证时间的奇迹。',
                        },
                    ],
                },
            },
        ],
    },
};
// 文章
export const ArticleDataSource = {
    wrapper: {className: 'home-page-wrapper content1-wrapper'},
    OverPack: {className: 'home-page content1', playScale: 0.3},
    imgWrapper: {className: 'content1-img', md: 10, xs: 24},
    img: {
        children: article_pic,
    },
    textWrapper: {className: 'content1-text', md: 14, xs: 24},
    title: {className: 'content1-title', children: '文章'},
    content: {
        className: 'content1-content',
        children:
            '程序猿多少写点技术文吧，可惜我不善于坚持，而适合短期冲刺。如果任务太复杂就很可能半途而废。好在写文章并不太复杂。记得小学时，班主任要求写周记，我憋死写一篇却总能被老师看上当范文朗读。初中时，老师推荐我去市里参加作文竞赛，但一轮就被刷，高中时作文竞赛也是同样的命运，从此就没怎么对写作太抱自信。高中毕业，汪老师再三安利我要坚持写作，不要废弃了。大学时还心血来潮想写小说，结果3千字烂尾。现在工作性质可以写写博客，也算是缘份吧。',
    },
};
// 应用
export const AppDataSource = {
    wrapper: {className: 'home-page-wrapper content2-wrapper'},
    OverPack: {className: 'home-page content2', playScale: 0.3},
    imgWrapper: {className: 'content2-img', md: 10, xs: 24},
    img: {
        children: app_pic,
    },
    textWrapper: {className: 'content2-text', md: 14, xs: 24},
    title: {className: 'content2-title', children: '应用'},
    content: {
        className: 'content2-content',
        children:
            '我是专业后端开发，业余设计和前端。第一次较完整的原创应用开发经历是大学的时候，受班导影响对时间管理有了兴趣，就报了个小课题：研究大学生时间管理的习惯并依此设计一款应用改善现状。课题三人成团，因为我是发起人，所以从文献调研、问卷调查、需求设计、UI设计、Android端开发、后端开发、推广宣传、论文纂写，我全程主力。那时我不是一个好Leader，但绝对是一个全职Worker。这个项目让我认识到，技术和应用并不难得，难得的是产品推广和运营。'
    },
};
// 游戏
export const GameDataSource = {
    wrapper: {className: 'home-page-wrapper content1-wrapper'},
    OverPack: {className: 'home-page content1', playScale: 0.3},
    imgWrapper: {className: 'content1-img', md: 10, xs: 24},
    img: {
        children: game_pic,
    },
    textWrapper: {className: 'content1-text', md: 14, xs: 24},
    title: {className: 'content1-title', children: '游戏'},
    content: {
        className: 'content1-content',
        children:
            '可以说我从事软件的初衷来自游戏。小时候喜欢大富翁这样的桌游，还自己画棋盘，找小伙伴来玩。小学五年级时迷恋上游戏王，傻傻买了几箱盗版卡，喜欢画它的卡图，喜欢分析卡组。初中的时候被魔兽争霸彻底俘获，从此打开我大型游戏的潘多拉魔盒。高中时我开始用软件制作游戏王卡组，并写脚本实现卡片技能，同期还制作魔兽地图，写脚本自娱自乐。大学的游戏时间锐减，只做过一个微信H5小程序的密室逃脱游戏。现在虽然没能从事游戏开发，但热情一直未变！'
    },
};
// 作者
export const AuthorDataSource = {
    wrapper: {className: 'home-page-wrapper teams0-wrapper'},
    OverPack: {playScale: 0.3, className: 'home-page teams0'},
    BannerAnim: {
        className: 'banner-anim',
        children: [
            {
                name: 'elem0',
                className: 'teams0-banner-user-elem',
                titleWrapper: {
                    className: 'teams0-content-wrapper',
                    children: [
                        {
                            name: 'image',
                            children: <img src={require('../img/author_avatar.png')}></img>,
                            // children: author_avatar,
                            className: 'teams0-image',
                        },
                        {
                            name: 'content',
                            children:
                                '张丁文（Wortin Cheung），1993年。浙江大学软件学院硕士研究生，杭州趣链科技有限公司高级架构师、项目经理。',
                            className: 'teams0-content',
                        },
                        {name: 'title', children: '作者', className: 'teams0-h1'},
                        {
                            name: 'content2',
                            children: 'wortin@outlook.com',
                            className: 'teams0-content',
                        },
                    ],
                },
            }
        ],
    },
};
// 创世纪
export const WortinRecordsDataSource = {
    wrapper: {className: 'home-page-wrapper content9-wrapper'},
    page: {className: 'home-page content9'},
    titleWrapper: {
        className: 'title-wrapper',
        children: [
            {
                name: 'image',
                className: 'title-image',
            },
            {name: 'title', children: '创世纪', className: 'title-h1'},
        ],
    },
    block: {
        className: 'timeline',
        children: [
            {
                name: 'block0',
                className: 'block-wrapper',
                playScale: 0.3,
                children: {
                    imgWrapper: {className: 'image-wrapper'},
                    textWrapper: {className: 'text-wrapper'},
                    img: {
                        className: 'block-img',
                        children:
                        rank1,
                    },
                    icon: {
                        className: 'block-icon',
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/qJnGrvjXPxdKETlVSrbe.svg',
                    },
                    name: {className: 'block-name', children: '准备阶段'},
                    post: {className: 'block-post', children: '2019年03月 - 2020年01月'},
                    time: {className: 'block-time', children: '浙江杭州'},
                    title: {className: 'block-title', children: '菜鸟：漫长的准备和构思'},
                    content: {
                        className: 'block-content',
                        children: '一直心心念想做个自己的网站，云服务器、域名都是老早就买好了，但是网站却迟迟没上。苦于没有定下网站的风格，或者限于能力无法创作出来，也因为生活工作的关系，没有足够的时间。但是执念就像深海的暗流，几经长年累月，就越发汹涌澎湃。终于不堪折磨的我还是在不断成长的，AI、React、Java技术的日渐娴熟，一个Wortin World的创作理念在2020年伊始之际在脑海中慢慢成型...'
                    },
                },
            },
            {
                name: 'block1',
                className: 'block-wrapper',
                playScale: 0.3,
                children: {
                    imgWrapper: {className: 'image-wrapper'},
                    textWrapper: {className: 'text-wrapper'},
                    img: {
                        className: 'block-img',
                        children: rank2,
                    },
                    icon: {
                        className: 'block-icon',
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
                    },
                    name: {className: 'block-name', children: '启动阶段'},
                    post: {className: 'block-post', children: '2020年02月 - 2020年03月'},
                    time: {className: 'block-time', children: '浙江杭州'},
                    title: {className: 'block-title', children: '精英：终于决定先上个简单版本'},
                    content: {
                        className: 'block-content',
                        children:
                            '将理念转化为现实往往是艰辛的，尤其是对我这个业余设计和前端来说。好在扁平式的风格和成熟的前端框架减轻了我不少工作量，但是在实现过程中也不见得就因此一帆风顺了。虽然确定了设计主题，但是具体对某个图形的绘制还是需要灵感和大量的参考，特别是对我这个完美主义，还喜欢制作一会儿就沉浸在自己作品中反复欣赏一会儿的人来说，实现这个网站简直要了命。算了，图片粗糙、功能烂尾都不管，上了再说。',
                    },
                },
            },
            {
                name: 'block2',
                className: 'block-wrapper',
                playScale: 0.3,
                children: {
                    imgWrapper: {className: 'image-wrapper'},
                    textWrapper: {className: 'text-wrapper'},
                    img: {
                        className: 'block-img',
                        children: rank3,
                    },
                    icon: {
                        className: 'block-icon',
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/QviGtUPvTFxdhsTUAacr.svg',
                    },
                    name: {className: 'block-name', children: '完善阶段'},
                    post: {className: 'block-post', children: '2020年03月 - 时间待定'},
                    time: {className: 'block-time', children: '浙江杭州'},
                    title: {className: 'block-title', children: '传说：完美主义的痛'},
                    content: {
                        className: 'block-content',
                        children:
                            '如果大家有幸能看到这个网站，其实是牺牲了很多我心中的完美特性和期望功能之后的结果。第一，它没有酷炫的动效，当时我是执意要在首页加个动图的，虽然An和CSS都是会一点点，但是无法支撑起我内心电影特效级的画面感。第二，它还非常单薄，很多功能都还没有开发完全，以至于你只需要花几分钟就能了解这个网站的全貌，然后迅速把这个网站遗忘在脑后。其实我丁世界是一个宏大的世界，故事已经徐徐展开，只等王者归来！',
                    },
                },
            },
            {
                name: 'block3',
                className: 'block-wrapper',
                playScale: 0.3,
                children: {
                    imgWrapper: {className: 'image-wrapper'},
                    textWrapper: {className: 'text-wrapper'},
                    img: {
                        className: 'block-img',
                        children: rank4,
                    },
                    icon: {
                        className: 'block-icon',
                        children:
                            'https://gw.alipayobjects.com/zos/rmsportal/agOOBdKEIJlQhfeYhHJc.svg',
                    },
                    name: {className: 'block-name', children: '沉淀阶段'},
                    post: {className: 'block-post', children: '时间待定 - 2040年6月'},
                    time: {className: 'block-time', children: '我丁世界'},
                    title: {className: 'block-title', children: '王者：对未来的一些期待'},
                    content: {
                        className: 'block-content',
                        children:
                            '没错，我丁世界不应该如此简单。我希望它具有魔兽世界一样恢弘的背景故事，具有游戏王一样巧妙的游戏构思，具有GIGANTIC一样优秀的平面设计。原谅我都是以游戏作为衡量标准，因为对于未来的期望我情不自禁的觉得，还是要回归于初心，回归于那份少年时对游戏世界的无限憧憬。',
                    },
                },
            },
        ],
    },
};
// 页脚
export const FooterDataSource = {
    wrapper: {className: 'home-page-wrapper footer1-wrapper'},
    OverPack: {className: 'footer1', playScale: 0.2},
    block: {
        className: 'home-page',
        gutter: 0,
        children: [
            {
                name: 'block0',
                xs: 24,
                md: 6,
                className: 'block',
                title: {
                    className: 'logo',
                    children: <img src={require('../img/logo.svg')}></img>,
                },
                childWrapper: {
                    className: 'slogan',
                    children: [
                        {
                            name: 'content0',
                            children: '我丁世界-原创分享',
                        },
                    ],
                },
            },
            {
                name: 'block1',
                xs: 24,
                md: 6,
                className: 'block',
                title: {children: '产品'},
                childWrapper: {
                    children: [
                        {name: 'link0', href: '#.', children: '世界编年史 —— 更新记录', onClick: showNotSupportInfo},
                        {name: 'link1', href: '#.', children: '世界冒险指南 —— 使用指南', onClick: showNotSupportInfo},
                        {
                            name: 'link2',
                            href: 'https://github.com/wortin/wortin-home-web',
                            target: '_blank',
                            children: '世界之源 —— 网站源码Github'
                        },
                    ],
                },
            },
            {
                name: 'block2',
                xs: 24,
                md: 6,
                className: 'block',
                title: {children: '关于'},
                childWrapper: {
                    children: [
                        {href: '#.', name: 'link0', children: 'FAQ', onClick: showNotSupportInfo},
                        {href: '#.', name: 'link1', children: '联系我', onClick: showNotSupportInfo},
                    ],
                },
            },
            {
                name: 'block3',
                xs: 24,
                md: 6,
                className: 'block',
                title: {children: '友情链接'},
                childWrapper: {
                    children: [
                        {
                            href: 'https://github.com/toFindMore/OJ_Practice',
                            target: '_blank',
                            name: 'link0',
                            children: '周健的算法笔记Github'
                        },
                    ],
                },
            },
        ],
    },
    copyrightWrapper: {className: 'copyright-wrapper'},
    copyrightPage: {className: 'home-page'},
    copyright: {
        className: 'copyright',
        children: (
            <>
        <span>
          ©2020 by <a href="https://www.wortin.com">Wortin Cheung</a> All Rights
          Reserved
        </span>
            </>
        ),
    },
};
