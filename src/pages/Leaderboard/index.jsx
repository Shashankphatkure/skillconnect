import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, Img, Input, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const LeaderboardPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-900_03 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search Game"
                  value={inputfieldvalue}
                  onChange={(e) => setInputfieldvalue(e)}
                  className="!placeholder:text-blue_gray-200 !text-blue_gray-200 font-medium p-0 text-base text-left w-full"
                  wrapClassName="flex md:flex-1 md:ml-[0] ml-[101px] md:mt-0 my-1.5 w-[31%] md:w-full"
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
                  color="gray_900_03"
                  size="xs"
                  variant="fill"
                ></Input>
                <div className="bg-gray-900_03 flex flex-col font-opensans h-14 items-end justify-start md:ml-[0] ml-[526px] p-2 rounded-[50%] w-14">
                  <div className="md:h-9 h-[35px] mb-1 relative w-9">
                    <Img
                      className="absolute bottom-[0] h-8 left-[0] w-8"
                      src="images/img_notification.svg"
                      alt="notification"
                    />
                    <Text
                      className="absolute bg-red-700 border border-gray-900_03 border-solid h-[18px] justify-center pb-[5px] pt-0.5 px-[5px] right-[0] rounded-[50%] text-blue_gray-200 text-xs top-[0] w-[18px]"
                      size="txtOpenSansRomanSemiBold12"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <Button
                  className="flex h-14 items-center justify-center ml-8 md:ml-[0] rounded-[50%] w-14"
                  shape="circle"
                  color="gray_900_03"
                  size="xl"
                  variant="fill"
                >
                  <Img
                    className="h-8"
                    src="images/img_settings.svg"
                    alt="settings"
                  />
                </Button>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row md:gap-10 items-start justify-between mx-auto md:px-5 w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-blue_gray-900_01 flex flex-col md:gap-10 gap-[482px] items-center justify-start p-6 sm:px-5 w-full">
                <div className="flex flex-col gap-2 items-center justify-start w-full">
                  <div className="flex flex-col items-start justify-start p-4 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start w-[35%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_home.svg"
                        alt="home"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-100"
                        size="txtGilroySemiBold16"
                      >
                        Home
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-end p-[15px] w-full">
                    <div className="flex flex-row gap-2 items-start justify-start w-[38%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                      <Text
                        className="mt-1 text-base text-blue_gray-100"
                        size="txtGilroySemiBold16"
                      >
                        Library
                      </Text>
                    </div>
                  </div>
                  <div className="bg-gray-900_03 flex flex-col items-start justify-start p-4 rounded-[10px] w-full">
                    <div className="flex flex-row gap-2 items-start justify-start w-[59%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_volume.svg"
                        alt="volume"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-100"
                        size="txtGilroySemiBold16"
                      >
                        Leaderboard
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-4 w-full">
                    <div className="flex flex-row gap-2 items-end justify-start w-[45%] md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_volume_24X24.svg"
                        alt="volume One"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-100"
                        size="txtGilroySemiBold16"
                      >
                        Massage
                      </Text>
                    </div>
                  </div>
                  <div className="flex flex-col items-start justify-start p-4 w-full">
                    <div className="flex flex-row gap-2 items-start justify-start w-2/5 md:w-full">
                      <Img
                        className="h-6 w-6"
                        src="images/img_user.svg"
                        alt="user"
                      />
                      <Text
                        className="mt-[3px] text-base text-blue_gray-100"
                        size="txtGilroySemiBold16"
                      >
                        Friends
                      </Text>
                    </div>
                  </div>
                </div>
                <div className="bg-gray-900_03 flex flex-col items-center justify-start p-4 rounded-[10px] w-full">
                  <div className="flex flex-row items-center justify-start w-full">
                    <Img
                      className="h-10 md:h-auto rounded-[50%] w-10"
                      src="images/img_profileimglarg.png"
                      alt="ProfileImgLarg"
                    />
                    <Text
                      className="ml-2 text-base text-blue_gray-100"
                      size="txtGilroySemiBold16"
                    >
                      Wade Warren
                    </Text>
                    <Img
                      className="h-6 ml-[45px] w-6"
                      src="images/img_arrowdown_bluegray_100.svg"
                      alt="arrowdown"
                    />
                  </div>
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col items-center justify-start w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-end justify-evenly w-full">
                <div className="h-[422px] md:mt-0 mt-[145px] relative w-[34%] md:w-full">
                  <Img
                    className="h-[197px] mb-[-28.82px] ml-[45px] object-cover w-[58%] z-[1]"
                    src="images/img_234571onepie.png"
                    alt="234571onepie"
                  />
                  <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mt-auto mx-auto p-10 sm:px-5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700_01 sm:text-xl"
                      size="txtGilroyMedium24"
                    >
                      One Piece
                    </Text>
                    <Text
                      className="mt-[22px] text-lg text-white-A700_01"
                      size="txtGilroyMedium18WhiteA70001"
                    >
                      1340 pts
                    </Text>
                    <Text
                      className="my-[25px] sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                      size="txtGilroyBold52"
                    >
                      2
                    </Text>
                  </div>
                </div>
                <div className="h-[567px] relative w-[34%] md:w-full">
                  <Img
                    className="h-[242px] mb-[-10px] mx-auto object-cover w-3/4 z-[1]"
                    src="images/img_pngfind1.png"
                    alt="pngfindOne"
                  />
                  <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mt-auto mx-auto p-[82px] md:px-10 sm:px-5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700_01 sm:text-xl"
                      size="txtGilroyMedium24"
                    >
                      Naruto
                    </Text>
                    <Text
                      className="mt-[22px] text-lg text-white-A700_01"
                      size="txtGilroyMedium18WhiteA70001"
                    >
                      1470 pts
                    </Text>
                    <Text
                      className="my-6 sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                      size="txtGilroyBold52"
                    >
                      1
                    </Text>
                  </div>
                </div>
                <div className="h-[381px] md:mt-0 mt-[186px] relative w-[34%] md:w-full">
                  <Img
                    className="h-[184px] mb-[-13px] mx-auto object-cover w-[48%] z-[1]"
                    src="images/img_pngfind2.png"
                    alt="pngfindTwo"
                  />
                  <div className="bg-blue_gray-900_01 flex flex-col items-center justify-start mt-auto mx-auto p-[29px] sm:px-5 rounded-tl-[10px] rounded-tr-[10px] w-full">
                    <Text
                      className="text-2xl md:text-[22px] text-white-A700_01 sm:text-xl"
                      size="txtGilroyMedium24"
                    >
                      Dragon Ball
                    </Text>
                    <Text
                      className="mt-[15px] text-lg text-white-A700_01"
                      size="txtGilroyMedium18WhiteA70001"
                    >
                      1202 pts
                    </Text>
                    <Text
                      className="mb-[7px] mt-[25px] sm:text-[38px] md:text-[44px] text-[52px] text-white-A700"
                      size="txtGilroyBold52"
                    >
                      3
                    </Text>
                  </div>
                </div>
              </div>
              <List
                className="flex flex-col gap-[0] items-center w-full"
                orientation="vertical"
              >
                <div className="bg-blue_gray-900_01 border-black-900_01 border-solid border-y flex flex-1 flex-row items-start justify-between my-0 p-[21px] sm:px-5 w-full">
                  <Text
                    className="ml-[53px] mt-[3px] text-blue_gray-100 text-lg"
                    size="txtGilroyRegular18"
                  >
                    Rank
                  </Text>
                  <Text
                    className="my-0.5 text-blue_gray-100 text-lg"
                    size="txtGilroyRegular18"
                  >
                    Anime
                  </Text>
                  <Text
                    className="mr-[53px] my-0.5 text-blue_gray-100 text-lg"
                    size="txtGilroyRegular18"
                  >
                    PTS
                  </Text>
                </div>
                <div className="bg-blue_gray-900_01 flex flex-1 flex-row items-center justify-between my-0 p-2.5 w-full">
                  <div className="flex flex-col items-center justify-start ml-[74px] mt-[5px]">
                    <Text
                      className="text-gray-50_03 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      4
                    </Text>
                    <Img
                      className="h-[21px] w-[21px]"
                      src="images/img_bxsleftarrow.svg"
                      alt="bxsleftarrow"
                    />
                  </div>
                  <Text
                    className="text-gray-50_03 text-lg"
                    size="txtGilroyMedium18Gray5003"
                  >
                    Demon slayer
                  </Text>
                  <Text
                    className="mr-[60px] text-blue-A200 text-lg"
                    size="txtGilroySemiBold18BlueA200"
                  >
                    1007
                  </Text>
                </div>
                <div className="bg-blue_gray-900_01 flex flex-1 md:flex-col flex-row md:gap-5 items-center justify-end my-0 p-2.5 w-full">
                  <div className="flex md:flex-1 flex-col items-start justify-start md:mt-0 mt-[5px] w-[3%] md:w-full">
                    <Text
                      className="md:ml-[0] ml-[5px] text-gray-50_03 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      5
                    </Text>
                    <Img
                      className="h-[21px] w-[21px]"
                      src="images/img_bxsleftarrow.svg"
                      alt="bxsleftarrow One"
                    />
                  </div>
                  <Text
                    className="md:ml-[0] ml-[206px] text-gray-50_03 text-lg"
                    size="txtGilroyMedium18Gray5003"
                  >
                    Bleach
                  </Text>
                  <Text
                    className="md:ml-[0] ml-[263px] mr-[63px] text-blue-A200 text-lg"
                    size="txtGilroySemiBold18BlueA200"
                  >
                    990
                  </Text>
                </div>
                <div className="bg-blue_gray-900_01 flex flex-1 flex-row items-center justify-between my-0 p-2.5 w-full">
                  <div className="flex flex-col items-start justify-start ml-[74px] mt-[5px]">
                    <Text
                      className="md:ml-[0] ml-[5px] text-gray-50_03 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      6
                    </Text>
                    <Img
                      className="h-[21px] w-[21px]"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown One"
                    />
                  </div>
                  <Text
                    className="text-gray-50_03 text-lg"
                    size="txtGilroyMedium18Gray5003"
                  >
                    Hunter X Hunter
                  </Text>
                  <Text
                    className="mr-16 text-blue-A200 text-lg"
                    size="txtGilroySemiBold18BlueA200"
                  >
                    958
                  </Text>
                </div>
                <div className="bg-blue_gray-900_01 flex flex-1 flex-row items-center justify-between my-0 p-2.5 w-full">
                  <div className="flex flex-col items-start justify-start ml-[74px] mt-[5px]">
                    <Text
                      className="md:ml-[0] ml-[5px] text-gray-50_03 text-lg"
                      size="txtGilroySemiBold18"
                    >
                      7
                    </Text>
                    <Img
                      className="h-[21px] w-[21px]"
                      src="images/img_bxsleftarrow.svg"
                      alt="bxsleftarrow Two"
                    />
                  </div>
                  <Text
                    className="text-gray-50_03 text-lg"
                    size="txtGilroyMedium18Gray5003"
                  >
                    Demon slayer
                  </Text>
                  <Text
                    className="mr-[62px] text-blue-A200 text-lg"
                    size="txtGilroySemiBold18BlueA200"
                  >
                    900
                  </Text>
                </div>
              </List>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LeaderboardPage;
