import React from 'react';

const PersonalInfoItem = (props) => (
    <>
        <div className="col-4"><b>{props.header}</b></div><div className="col-8">{props.data}</div>
    </>

);

export default PersonalInfoItem;