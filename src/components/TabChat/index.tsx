import { RootState } from "../../app/store/rootSotre";
import MessageInput from "components/MessageInput";
import Message from "components/Messages";
import React from "react";
import { useSelector } from "react-redux";
import "./tabchat.scss";
import { Dimmer, Loader } from "semantic-ui-react";
import { getImageChannel } from "../../utils/GetImageUrl";

export default function TabChat() {
  const listMessage: any = useSelector(
    (state: RootState) => state.messages?.data
  );
  const isLoading: any = useSelector(
    (state: RootState) => state.messages?.isLoading
  );
  const channelInfor: any = useSelector(
    (state: RootState) => state.channel.channelInfo
  );

  const userId = localStorage.getItem("userId");

  let sortListMessage =
    listMessage &&
    [...listMessage]?.sort((mess1: any, mess2: any) => {
      if (Number(mess2.cId) > Number(mess1.cId)) {
        return 1;
      }
      if (Number(mess2.cId) < Number(mess1.cId)) {
        return -1;
      }
      return 0;
    });

  return (
    <>
      {listMessage && (
        <div className="tabchat">
          <div className="tabchat-header">
            <div className="tabchat-header--infor">
              <img src={getImageChannel(channelInfor?.room_profile_image)} alt="" />
              <div className="tabchat-header--infor-name">
                <h2>sklasfkldsafk</h2>
                <p>aklsdfjadklsjf</p>
              </div>
            </div>
            <div className="tabchat-header--action">
              <input type="text" />
              <div className="notification">
                <img />
              </div>
              <div className="more">
                <img src="" />
              </div>
            </div>
          </div>
          <div className="tabchat--list-messge">
            {isLoading ? (
              <div>
                <Loader active content="Loading" />
              </div>
            ) : (
              sortListMessage?.map(
                (message: any, index: number) =>
                  message.message !== "" && (
                    <Message
                      key={index}

                      message={message}
                      isComming={
                        message?.senderId
                          ? message?.senderId !== userId
                          : message?.ownerId !== userId
                      }
                    />
                  )
              )
            )}
          </div>
          <MessageInput />
        </div>
      )}
    </>
  );
}
