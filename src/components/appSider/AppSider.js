import React from "react";
import "./appSider.css";
import { Layout, List } from "antd";
import { BiHome, BiCartAlt, BiHeartCircle } from "react-icons/bi"
import { AiOutlineInbox, AiOutlineTags } from "react-icons/ai"
import { BsInfoSquare } from "react-icons/bs"
import { AiOutlineContacts } from "react-icons/ai"
import { RiShieldStarLine } from "react-icons/ri"

const { Sider } = Layout;

const AppSider = () => {
  return (
    <Sider className="app__sider">
      <List size="large">
        <List.Item>
          <List.Item.Meta
            avatar={
              <BiHome size={18}/>
            }
            title={<a href="https://ant.design">Home</a>}
          />
        </List.Item>
        
        <List.Item>
          <List.Item.Meta
            avatar={
              <AiOutlineInbox size={18}/>
            }
            title={<a href="https://ant.design">Products</a>}
          />
        </List.Item>

        <List.Item>
          <List.Item.Meta
            avatar={
              <RiShieldStarLine size={18}/>
            }
            title={<a href="https://ant.design">Featured Items</a>}
          />
        </List.Item>

        <List.Item>
          <List.Item.Meta
            avatar={
              <AiOutlineTags size={18}/>
            }
            title={<a href="https://ant.design">Campaigns</a>}
          />
        </List.Item>

        <List.Item>
          <List.Item.Meta
            avatar={
              <BiCartAlt size={18}/>
            }
            title={<a href="https://ant.design">My Cart</a>}
          />
        </List.Item>

        <List.Item>
          <List.Item.Meta
            avatar={
              <BiHeartCircle size={18}/>
            }
            title={<a href="https://ant.design">My Wishlist</a>}
          />
        </List.Item>

        <List.Item>
          <List.Item.Meta
            avatar={
              <BsInfoSquare size={18}/>
            }
            title={<a href="https://ant.design">About Us</a>}
          />
        </List.Item>

        <List.Item>
          <List.Item.Meta
            avatar={
              <AiOutlineContacts size={18}/>
            }
            title={<a href="https://ant.design">Contact Us</a>}
          />
        </List.Item>
      </List>
    </Sider>
  );
};

export default AppSider;
