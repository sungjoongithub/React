import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';


class PhoneInfoList extends Component {
    static defaultProps={
        list:[],
        onRemove:()=>console.warn('Remove가 정의 되지 않았습니다.'),
    }
    render() {
        const {data,onRemove}=this.props;
        const list=data.map(
            info=>(<PhoneInfo key={info.id} info={info} onRemove={onRemove}/>)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;