import styled from 'styled-components'
import day_challenge from "../../statics/imgs/day_challenge.png"
import jianshu_vip from "../../statics/imgs/jianshu_vip.png"
import optimize_continu from "../../statics/imgs/optimize_continu.png"
import jianshu_copyright from "../../statics/imgs/jianshu_copyright.png"
export const HomeWrapper = styled.div`
width:960px;
margin:0 auto;

`
export const HomeLeft = styled.div`
margin-left:15px;                                                                                                                                                                                                                                                                                                                                                                                                          
padding-top:30px;
width:625px
float:left;
.banner-img{
    width:625px;
    height:270px;
    background-repeat:no-repeat;
    background-size:contain;
}
`
export const HomeRight = styled.div`
width:240px;
float:right;
`

export const TopicWrapper = styled.div`
padding :20px 0 10px 0;
overflow:hidden;
margin-left:-18px;
border-bottom:1px solid #dcdcdc
`
export const TopicItem = styled.div`
    float:left;
    margin-left:18px;
    background:#f7f7f7;
    height:32px;
    line-height:32px;
    font-size:14px;
    margin-bottom:18px;
    color:#000;
    padding-right:10px;
    border:1px solid #dcdcdc;
    border-radius:4px;
   .topic-pic{
        width:32px;
        height:32px;
        display:block;
        float:left;
        margin-right:10px;
    }
`
export const ListItem = styled.div`
overflow:hidden;
padding:20px 0;
border-bottom:1px solid #dcdcdc;
.pic{
    display:block;
    width:125px;
    height:100px;
    float:right;
    border-radius:10px;

}
`
export const ListInfo = styled.div`
width:500px;
float:left;
.title{
    line-height:27px;
    font-size:18px;
    font-weight:bold;
    color:#333;

}
.desc{
    line-height:24px;
    font-size:13px;
    color:#999;
}
`
export const RecommendWrapper = styled.div`
margin:30px 0;
width:280px
`
export const RecommendItem = styled.div`
&.day_challenge{
    background:url(${day_challenge});
    width:280px;
    height:50px;
    background-size:contain;
    cursor:pointer
}
&.jianshu_vip{
    background:url(${jianshu_vip});
    width:280px;
    height:50px;
    background-size:contain;
    cursor:pointer
}
&.optimize_continu{
    background:url(${optimize_continu});
    width:280px;
    height:50px;
    background-size:contain;
    cursor:pointer
}
&.jianshu_copyright{
    background:url(${jianshu_copyright});
    width:280px;
    height:50px;
    background-size:contain;
    cursor:pointer
}
`
export const WriterWrapper = styled.div`
width:278px;
border:1px solid #dcdcdc;
border-radius:3px;
height:456px;
padding 10px;
margin-top:44px;
clear:both;
`
export const LoadMore = styled.div`
width: 100%;
height: 40px;
line-height: 40px;
margin: 30px 0;
background: #a5a5a5;
text-align:center;
border-radius: 20px;
color: #fff;
cursor: pointer;
`;

export const BackTop = styled.div`
position: fixed;
right: 100px;
bottom: 100px;
width: 50px;
height: 50px;
line-height: 60px;
text-align: center;
border:1px solid #dcdcdc;
font-size:36px;
cursor:pointer;
color:#626262;
font-weight:100;
`
export const Download = styled.a.attrs({
    href: "https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click",
    target: "_blank"
})`
width:280px;
height:80px;
border:1px solid #dcdcdc;
display:block;
margin-bottom:30px;
border-radius:6px;
box-sizing:border-box;
img{
    display:inline-block;
width:60px;
height:60px;
padding:10px;
float:left;
}

`
export const DownInfo = styled.div`
margin-left:70px;
display:inline-block;
width:170px;
height:60px;
margin:10px;
float:right;
text-align:center;
`
export const Title = styled.div`
font-size:15px;
color:#333;
display:block;
margin:10px 0;
`
export const Description = styled.div`
margin-top:4px;
font-size:13px;
color:#999;
`
export const WriteTitle = styled.div`
font-size: 14px;
color: #969696;
height:20px;
width:100%;
clear:both;
border-bottom: 1px solid #dcdcdc;
`
export const WrapperItem = styled.div`
height:60px;
width:100%;
clear:both;
margin-top:10px;
box-sizing:border-box;
padding:7px 0 7px 0;
cursor:pointer;
border-bottom: 1px solid #dcdcdc;
img{
    width:48px;
    height:48px;
    display:inline-block;
    border-radius:24px;
    float:left;
    margin-right:10px;
    margin-bottom:10px;
}
`
export const WrapperInfo = styled.div`
display:inline-block;
float:left;
height:48px;
width:200px;
margin-left:20px;
`
export const WrapperName = styled.div`
font-size:14px;
margin-top: 7px;
`
export const WrapperDesc = styled.div`
margin-top: 7px;
font-size: 12px;
color: #969696;
`
export const WrapperMore = styled.div`
height:40px;
width:266px;
font-size: 13px;
color: #787878;
border: 1px solid #dcdcdc;
margin:20px auto;
clear:both;
border-radius:10px;
text-align:center;
line-height:40px;
cursor:pointer;
a{display:block;width:100%;height:100%;text-decoration:none;color: #787878;}

`