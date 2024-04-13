import React from "react";
import { default as ModalProvider } from "react-modal";

import { Button, Img, Input, Text } from "components";

const FeedpostModal = (props) => {
  return (
    <ModalProvider
      appElement={document.getElementById("root")}
      className="m-auto !w-[46%]"
      overlayClassName="bg-gray-900_cc fixed flex h-full inset-y-[0] w-full"
      {...props}
    >
      <div className="max-h-[97vh] overflow-y-auto sm:w-full md:w-full">
        <div className="bg-white-A700 flex flex-col gap-6 justify-center p-6 md:px-5 rounded-[12px] shadow-bs2 w-full">
          <div className="flex flex-row items-center justify-between md:ml-[0] ml-[238px] mt-[13px] w-[61%] md:w-full">
            <Text
              className="text-2xl md:text-[22px] text-black-900_02 sm:text-xl"
              size="txtGilroySemiBold24"
            >
              Create Post
            </Text>
            <Img
              className="common-pointer h-6 w-6"
              src="images/img_close_1.svg"
              alt="close"
              onClick={props.onRequestClose}
            />
          </div>
          <div className="flex flex-col items-start justify-start mb-[7px] w-[97%] md:w-full">
            <div className="flex flex-row gap-4 items-start justify-start pr-[3px] pt-[3px] w-[59%] md:w-full">
              <Img
                className="h-[60px] md:h-auto mb-0.5 rounded-[50%] w-[60px]"
                src="images/img_profileimglarg.png"
                alt="ProfileImgLarg"
              />
              <div className="flex flex-col gap-2 items-start justify-start mt-1 w-[41%]">
                <Text
                  className="text-blue_gray-900 text-lg"
                  size="txtGilroySemiBold18Bluegray900"
                >
                  Rose J. Henry
                </Text>
                <div className="flex flex-row gap-2 items-center justify-between w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[68px]"
                    leftIcon={
                      <Img
                        className="h-4 my-1.5 mx-1"
                        src="images/img_user_16X16.svg"
                        alt="user"
                      />
                    }
                    shape="round"
                    color="blue_gray_300"
                    size="md"
                    variant="outline"
                  >
                    <div className="text-left text-xs">Friends</div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[63px]"
                    leftIcon={
                      <Img
                        className="h-4 my-1.5 mx-1"
                        src="images/img_plus_16X16.svg"
                        alt="plus"
                      />
                    }
                    shape="round"
                    color="blue_gray_300"
                    size="md"
                    variant="outline"
                  >
                    <div className="text-left text-xs">Album</div>
                  </Button>
                </div>
              </div>
            </div>
            <Input
              name="Group10719"
              placeholder="Say something about this post..."
              className="!placeholder:text-blue_gray-300 !text-blue_gray-300 font-medium p-0 text-base text-left w-full"
              wrapClassName="border border-blue_gray-300 border-solid mt-[17px] w-full"
              shape="round"
              color="white_A700"
              size="sm"
              variant="fill"
            ></Input>
            <div
              className="bg-cover bg-no-repeat flex flex-col h-[279px] items-center justify-start mt-[17px] p-4 w-full"
              style={{ backgroundImage: "url('images/img_group10706.png')" }}
            >
              <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start mb-[217px] w-[99%] md:w-full">
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[72px] rounded-md"
                  leftIcon={
                    <Img
                      className="h-5 ml-[11px] mr-1 my-[5px]"
                      src="images/img_call_20X20.svg"
                      alt="call"
                    />
                  }
                  shape="round"
                  color="black_900_99"
                  size="md"
                  variant="fill"
                >
                  <div className="font-bold text-left text-sm">Edit</div>
                </Button>
                <Button
                  className="cursor-pointer flex items-center justify-center min-w-[91px] ml-2 sm:ml-[0] rounded-md"
                  leftIcon={
                    <Img
                      className="h-5 ml-3 mr-1 my-[5px]"
                      src="images/img_cut_20X20.svg"
                      alt="cut"
                    />
                  }
                  shape="round"
                  color="black_900_99"
                  size="md"
                  variant="fill"
                >
                  <div className="font-bold text-left text-sm">Effects</div>
                </Button>
                <Img
                  className="h-6 sm:ml-[0] ml-[351px] w-6"
                  src="images/img_close.svg"
                  alt="close One"
                />
              </div>
            </div>
            <div className="flex sm:flex-col flex-row sm:gap-10 items-start justify-between mt-4 pt-0.5 w-full">
              <div className="flex sm:flex-1 flex-row gap-2 items-center justify-start w-[24%] sm:w-full">
                <Img className="h-6 w-6" src="images/img_mail.svg" alt="mail" />
                <Text
                  className="text-blue_gray-400 text-lg"
                  size="txtGilroySemiBold18Bluegray400"
                >
                  Photo/Video
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-row gap-2 items-start justify-center w-[22%] sm:w-full">
                <Img
                  className="h-6 mb-0.5 w-6"
                  src="images/img_offer.svg"
                  alt="offer"
                />
                <Text
                  className="mt-1 text-blue_gray-400 text-lg"
                  size="txtGilroySemiBold18Bluegray400"
                >
                  Tag People
                </Text>
              </div>
              <div className="flex sm:flex-1 flex-row gap-2 items-center justify-start w-[24%] sm:w-full">
                <Img
                  className="h-6 w-6"
                  src="images/img_location_24X24.svg"
                  alt="location"
                />
                <Text
                  className="text-blue_gray-400 text-lg"
                  size="txtGilroySemiBold18Bluegray400"
                >
                  Add location
                </Text>
              </div>
            </div>
            <Button
              className="cursor-pointer font-medium min-w-[586px] sm:min-w-full mt-10 rounded-md text-base text-center"
              shape="round"
              color="blue_A700"
              size="3xl"
              variant="fill"
            >
              Post
            </Button>
          </div>
        </div>
      </div>
    </ModalProvider>
  );
};

export default FeedpostModal;
