import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, Line, List, Switch, Text } from "components";

import { CloseSVG } from "../../assets/images";

const BlogmanagementPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-center justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_3.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search "
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="font-medium p-0 placeholder:text-blue_gray-200 text-base text-left w-full"
                  wrapClassName="border border-blue_gray-300 border-solid flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[32%] md:w-full"
                  prefix={
                    <Img
                      className="cursor-pointer h-5 m-3"
                      src="images/img_search.svg"
                      alt="search"
                    />
                  }
                  suffix={
                    <CloseSVG
                      fillColor="#bac1ce"
                      className="cursor-pointer h-5 my-auto"
                      onClick={() => setInputfieldvalue("")}
                      style={{
                        visibility:
                          inputfieldvalue?.length <= 0 ? "hidden" : "visible",
                      }}
                      height={20}
                      width={20}
                      viewBox="0 0 20 20"
                    />
                  }
                  shape="round"
                  color="white_A700"
                  size="xs"
                  variant="fill"
                ></Input>
                <div className="bg-white-A700 border border-blue_gray-100 border-solid flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[480px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red-700 border border-blue_gray-50 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-white-A700 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12WhiteA700"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="border border-blue-A700_01 border-solid flex flex-col h-14 items-center justify-start ml-6 md:ml-[0] p-1 rounded-[50%] w-14">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_profileimglarg.png"
                    alt="ProfileImgLarg"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-[50px] items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col md:gap-10 gap-[375px] items-center justify-end p-[5px] w-full">
                <div className="flex flex-col gap-2 items-center justify-start mt-[19px] w-[87%] md:w-full">
                  <div className="flex flex-col items-start justify-start pr-4 py-4 w-full">
                    <div className="flex flex-row gap-2 items-center justify-start w-[56%] md:w-full">
                      <Img
                        className="h-6 ml-[7px] w-6"
                        src="images/img_save.svg"
                        alt="save"
                      />
                      <Text
                        className="text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Dashboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user_24X24.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Users
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-[49%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Categories
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[31%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_edit.svg"
                        alt="edit"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Items
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[35%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_bag.svg"
                        alt="bag"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Orders
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-row gap-1.5 items-center justify-start pr-4 py-4 w-full">
                    <Line className="bg-blue-A700 h-6 w-0.5" />
                    <div className="flex flex-row gap-2 items-start justify-start w-[28%]">
                      <Img
                        className="h-6 w-6"
                        src="images/img_instagram.svg"
                        alt="instagram"
                      />
                      <Text
                        className="mt-1 text-base text-blue-A700"
                        size="txtGilroySemiBold16BlueA700"
                      >
                        Blog
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-[9px] w-[54%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_notification.svg"
                        alt="notification One"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Notifications
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-2 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start my-2 w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_settings_24X24.svg"
                        alt="settings"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Settings
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col font-opensans items-start justify-start p-2 w-[87%] md:w-full">
                  <div className="flex flex-row gap-2 items-end justify-start my-2 w-[29%] md:w-full">
                    <Img
                      className="h-6 w-6"
                      src="images/img_question.svg"
                      alt="question"
                    />
                    <Text
                      className="mt-[5px] text-base text-blue_gray-700"
                      size="txtOpenSansRomanSemiBold16"
                    >
                      Help
                    </Text>
                  </div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col items-start justify-start w-full">
              <div className="flex sm:flex-col flex-row md:gap-10 items-end justify-between w-full">
                <Text
                  className="sm:mt-0 mt-[7px] text-gray-900_02 text-lg"
                  size="txtGilroySemiBold18Gray90002"
                >
                  Blog Posts Management
                </Text>
                <div className="flex sm:flex-1 flex-row gap-4 items-end justify-between w-1/4 sm:w-full">
                  <Text
                    className="mt-[7px] text-gray-900_02 text-lg"
                    size="txtGilroySemiBold18Gray90002"
                  >
                    Automated Publishing
                  </Text>
                  <div className="h-[29px] relative w-[21%]">
                    <Switch
                      onColor="#56c568"
                      offColor="#56c568"
                      onHandleColor="#ffffff"
                      offHandleColor="#ffffff"
                      value={true}
                      className="m-auto w-full"
                    />
                    <Switch
                      onColor="#56c568"
                      offColor="#56c568"
                      onHandleColor="#ffffff"
                      offHandleColor="#ffffff"
                      value={true}
                      className="absolute inset-[0] justify-center m-auto w-full"
                    />
                  </div>
                </div>
              </div>
              <List
                className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-2 grid-cols-3 justify-center mt-[30px] w-full"
                orientation="horizontal"
              >
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[15px] items-start justify-start">
                      <Text
                        className="mt-1 text-base text-blue_gray-400"
                        size="txtGilroyMedium16Bluegray400"
                      >
                        Blogs Uploaded
                      </Text>
                      <Text
                        className="mb-[5px] text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                        size="txtGilroyBold24"
                      >
                        87
                      </Text>
                    </div>
                    <Img
                      className="h-[45px] w-[54%]"
                      src="images/img_chartsmicro.svg"
                      alt="Chartsmicro"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[21px] items-start justify-start pr-1 py-1">
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtGilroyMedium16Bluegray400"
                      >
                        Total Clicks
                      </Text>
                      <Text
                        className="mb-0.5 text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                        size="txtGilroyBold24"
                      >
                        3.5k
                      </Text>
                    </div>
                    <Img
                      className="h-[45px] w-[54%]"
                      src="images/img_chartsmicro.svg"
                      alt="Chartsmicro One"
                    />
                  </div>
                </div>
                <div className="bg-white-A700 flex flex-1 flex-col items-center justify-start p-6 sm:px-5 rounded-md w-full">
                  <div className="flex flex-row gap-[13px] items-center justify-start w-full">
                    <div className="flex flex-col gap-[17px] items-start justify-start pr-[5px] py-[5px]">
                      <Text
                        className="text-base text-blue_gray-400"
                        size="txtGilroyMedium16Bluegray400"
                      >
                        Total Earnings
                      </Text>
                      <Text
                        className="text-2xl md:text-[22px] text-gray-900_02 sm:text-xl"
                        size="txtGilroyBold24"
                      >
                        5,732
                      </Text>
                    </div>
                    <Img
                      className="h-[45px] w-[54%]"
                      src="images/img_chartsmicro.svg"
                      alt="Chartsmicro Two"
                    />
                  </div>
                </div>
              </List>
              <Img
                className="h-[347px] sm:h-auto mt-6 object-cover rounded-md w-full"
                src="images/img_rectangle1388_347X1040.png"
                alt="Rectangle1388"
              />
              <Input
                name="country"
                placeholder="Battlegrounds Mobile India iOS release date"
                className="!placeholder:text-black-900_02 !text-black-900_02 font-medium md:h-auto p-0 sm:h-auto text-left text-lg w-full"
                wrapClassName="border border-blue_gray-300 border-solid mt-[30px] w-full"
                type="number"
                shape="round"
                color="white_A700"
                size="xl"
                variant="fill"
              ></Input>
              <div className="flex flex-col items-center justify-start mt-4 w-full">
                <div className="bg-white-A700 border border-blue_gray-300 border-solid flex flex-col items-start justify-start p-2 rounded-md w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-5 items-center justify-start ml-1 md:ml-[0] pl-1 w-[43%] md:w-full">
                    <div className="flex flex-col items-center justify-start rounded w-[30%] sm:w-full">
                      <div className="flex flex-row gap-4 items-center justify-between w-full">
                        <Button
                          className="flex h-5 items-center justify-center rounded w-5"
                          shape="round"
                          color="gray_300"
                          size="xs"
                          variant="fill"
                        >
                          <Img src="images/img_mobile.svg" alt="mobile" />
                        </Button>
                        <Img
                          className="h-5 w-5"
                          src="images/img_volume.svg"
                          alt="volume"
                        />
                        <Img
                          className="h-5 w-5"
                          src="images/img_refresh.svg"
                          alt="refresh"
                        />
                        <Img
                          className="h-5 rounded w-5"
                          src="images/img_iconstypeunde.svg"
                          alt="IconsTypeunde"
                        />
                      </div>
                    </div>
                    <Button
                      className="flex h-7 items-center justify-center ml-7 sm:ml-[0] rounded w-7"
                      shape="round"
                      color="gray_50_02"
                      size="xs"
                      variant="fill"
                    >
                      <Img
                        className="h-5"
                        src="images/img_link.svg"
                        alt="link"
                      />
                    </Button>
                    <List
                      className="sm:flex-col flex-row gap-6 grid grid-cols-2 ml-6 sm:ml-[0] w-[52%] sm:w-full"
                      orientation="horizontal"
                    >
                      <div className="bg-gray-50_02 flex flex-col items-center justify-start p-1 rounded w-full">
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_volume_20X20.svg"
                            alt="volume One"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_user_20X20.svg"
                            alt="user One"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_iconstypeh3.svg"
                            alt="IconsTypehThree"
                          />
                        </div>
                      </div>
                      <div className="bg-gray-50_02 flex flex-col items-center justify-start p-1 rounded w-full">
                        <div className="flex flex-row gap-4 items-center justify-between w-full">
                          <Img
                            className="h-5 w-5"
                            src="images/img_menu_20X20.svg"
                            alt="menu"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_menu_1.svg"
                            alt="menu One"
                          />
                          <Img
                            className="h-5 w-5"
                            src="images/img_menu_2.svg"
                            alt="menu Two"
                          />
                        </div>
                      </div>
                    </List>
                  </div>
                </div>
                <div className="bg-white-A700 border border-blue_gray-300 border-solid flex flex-col gap-[7px] justify-start rounded-md w-full">
                  <Line className="bg-blue_gray-100_01 h-px mr-[740px] w-[29%]" />
                  <div className="h-24 md:h-[88px] md:ml-[0] ml-[7px] relative w-full">
                    <Text
                      className="absolute inset-x-[0] leading-[22.00px] mx-auto text-blue_gray-400 text-sm top-[0] w-full"
                      size="txtGilroyMedium14Bluegray400"
                    >
                      <>
                        Krafton has been dropping hints about the BGMI iOS
                        version for a few days. In the social media post that
                        announced special rewards on 50 million downloads dated
                        August 5, 2021, the caption clearly stated &quot;We are
                        preparing for all Indian players to receive rewards
                        regardless of their OS [apple emoji].&quot;
                        Additionally, Krafton also shared a reveal poster that
                        has the Apple mascot in it. While speculations about
                        Battlegrounds Mobile India release date have been made
                        in the past, Krafton might have revealed the date
                        accidentally.
                      </>
                    </Text>
                    <div className="absolute bottom-[0] md:h-2 h-3 p-0.5 right-[0] w-3">
                      <Img
                        className="absolute h-2 inset-[0] justify-center m-auto w-2"
                        src="images/img_basetextarea.svg"
                        alt="baseTextarea"
                      />
                    </div>
                  </div>
                </div>
              </div>
              <Button
                className="cursor-pointer font-medium mt-[30px] rounded-md text-center text-lg w-[504px]"
                shape="round"
                color="blue_A700"
                size="3xl"
                variant="fill"
              >
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BlogmanagementPage;
