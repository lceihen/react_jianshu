import React, { PureComponent } from 'react'
import { WriterWrapper, WriteTitle, WrapperItem, WrapperInfo,WrapperName,WrapperDesc,WrapperMore } from '../style'
import imgone from "./../../../statics/imgs/梅拾樱.png"
import imgtwo from "./../../../statics/imgs/格列柯南.png"
import imgthr from "./../../../statics/imgs/琪官Kafka.png"
import imgfour from "./../../../statics/imgs/吴校布.png"
import imgfive from "./../../../statics/imgs/野狐狸.png"
class Writer extends PureComponent {
    render() {
        return (
            <WriterWrapper><WriteTitle><span>推荐作者</span></WriteTitle>
                <WrapperItem>
                    <a  href="https://www.jianshu.com/u/6810a6332de9?utm_source=desktop&utm_medium=index-users" ><img src={imgone} alt="" ></img></a>
                    <WrapperInfo href="https://www.jianshu.com/u/6810a6332de9?utm_source=desktop&utm_medium=index-users">
                        <WrapperName>

                        梅拾璎
        
                        </WrapperName>
                        <WrapperDesc>
          写了249.6k字 · 31.1k喜欢
        </WrapperDesc>
                    </WrapperInfo>
                </WrapperItem>
                <WrapperItem>
                <a  href="https://www.jianshu.com/u/62fc150bab96?utm_source=desktop&utm_medium=index-users" > <img src={imgtwo} alt=""></img></a>
                    <WrapperInfo>
                    <WrapperName>


                    琪官Kafka
        

</WrapperName>
<WrapperDesc>

写了274k字 · 4.3k喜欢
        
</WrapperDesc>
        
                    </WrapperInfo>
                </WrapperItem>
                <WrapperItem>
                <a  href="https://www.jianshu.com/u/ffc565d738a3?utm_source=desktop&utm_medium=index-users" >   <img src={imgthr} alt=""></img></a>
                    <WrapperInfo>
                    <WrapperName>


                    格列柯南
        

</WrapperName>
<WrapperDesc>

写了760.5k字 · 18.2k喜欢
        
</WrapperDesc>
                    </WrapperInfo>
                </WrapperItem>
                <WrapperItem>
                <a  href="https://www.jianshu.com/u/addcee2f9c78?utm_source=desktop&utm_medium=index-users" > <img src={imgfour} alt=""></img></a>
                    <WrapperInfo>
                    <WrapperName>


                    野狐狸_
        

</WrapperName>
<WrapperDesc>

写了366.8k字 · 6.3k喜欢
        
</WrapperDesc>
                    </WrapperInfo>
                </WrapperItem>
                <WrapperItem>
                <a  href="https://www.jianshu.com/u/b3b2c03354f3?utm_source=desktop&utm_medium=index-users" > <img src={imgfive} alt=""></img></a>
                    <WrapperInfo>
                    <WrapperName>


                    吴晓布
        

</WrapperName>
<WrapperDesc>

写了742.6k字 · 25.2k喜欢
        
</WrapperDesc>
                    </WrapperInfo>
                </WrapperItem>
                   <WrapperMore>  <a href="https://www.jianshu.com/recommendations/users?utm_source=desktop&utm_medium=index-users" > {'查看全部     '}&nbsp;{' >'}</a></WrapperMore>
                
            </WriterWrapper>
        )
    }
}
export default Writer;