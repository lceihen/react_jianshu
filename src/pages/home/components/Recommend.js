import React, { PureComponent } from 'react'
import { RecommendWrapper, RecommendItem } from './../style'

class Recommend extends PureComponent {
    render() {
        return (
            <RecommendWrapper>
                <RecommendItem className="day_challenge"></RecommendItem>
                <RecommendItem className="jianshu_vip"></RecommendItem>
                <RecommendItem className="optimize_continu"></RecommendItem>
                <RecommendItem className="jianshu_copyright"></RecommendItem>
            </RecommendWrapper>
        )
    }
}
export default Recommend;