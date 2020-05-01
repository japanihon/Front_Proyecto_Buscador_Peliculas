import React from 'react';
import {Spin} from 'antd';

import './Loading.scss';

export default function Loading(){
    return (
        <div className="loading">
            <Spin size="large">
                <h1>Loading</h1>
            </Spin>
        </div>
    );
}
