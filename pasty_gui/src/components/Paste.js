import React from 'react';
import { List, Icon } from 'antd';
import Moment from 'react-moment';


const IconText = ({ type, text }) => (
  <span>
    <Icon type={type} style={{ marginRight: 8 }} />
    {text}
  </span>
);

const Paste = (props)=> {
  return(
    <List
    itemLayout="vertical"
    size="large"
    pagination={{
      onChange: page => {
        console.log(page);
      },
      pageSize: 3,
    }}
    dataSource={props.data}
    footer={
      <div>

      </div>
    }
    renderItem={item => (
      <List.Item
        key={item.title}
        actions={[
          <IconText type="star-o" text="156" />,
          <IconText type="like-o" text="156" />,
          <IconText type="message" text="2" />,
        ]}

      >
        <List.Item.Meta
          title={<a href={`/pasties/${item.slug}`}>{item.title}</a>}
        />
          <Moment fromNow>{item.created}</Moment>

      </List.Item>
      
      

      

    )}
  />
  );
}

export default Paste;