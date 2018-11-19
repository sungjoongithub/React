import React, { Component } from 'react';
import PhoneInfo from './PhoneInfo';


class PhoneInfoList extends Component {
    static defaultProps={
        data:[],
        onRemove:()=>console.warn('Remove가 정의 되지 않았습니다.'),
        onUpdate:()=>console.warn('Update가 정의 되지않았습니다.')
    }

    shouldComponentUpdate(nextProps,nextState){
        return nextProps.data !==this.props.data;
    }
    render() {
        console.log('render PhoneInfoList');
        const {data,onRemove,onUpdate}=this.props;
        const list=data.map(
            info=>(<PhoneInfo 
                key={info.id} 
                info={info} 
                onRemove={onRemove}
                onUpdate={onUpdate}
                />)
        );
        return (
            <div>
                {list}
            </div>
        );
    }
}

export default PhoneInfoList;