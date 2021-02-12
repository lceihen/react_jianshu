import React, { Component } from 'react'
import { RecommendWrapper, RecommendItem } from './../style'

class Recommend extends Component {
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