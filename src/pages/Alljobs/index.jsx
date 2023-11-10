import React from "react";

import { Sidebar } from "react-pro-sidebar";

import { Button, CheckBox, Img, Input, Line, List, Text } from "components";

import { CloseSVG } from "../../assets/images";

const AlljobsPage = () => {
  const [inputfieldvalue, setInputfieldvalue] = React.useState("");

  return (
    <>
      <div className="bg-gray-50_01 flex flex-col font-gilroy items-center justify-start mx-auto w-full">
        <div className="flex flex-col items-start justify-start w-full">
          <div className="bg-white-A700 flex flex-col items-center justify-start p-[22px] sm:px-5 w-full">
            <div className="flex flex-col items-center justify-start mx-auto md:px-5 w-full">
              <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                <Img
                  className="h-[35px] w-[13%]"
                  src="images/img_group_19.svg"
                  alt="Group"
                />
                <Input
                  name="InputField"
                  placeholder="Search Job, Company, Designation"
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
                  size="sm"
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
          <div className="flex md:flex-col flex-row gap-8 items-start justify-start md:px-5 w-[95%] md:w-full">
            <Sidebar className="!sticky !w-[300px] flex h-screen md:hidden justify-start overflow-auto top-[0]">
              <div className="bg-white-A700 flex flex-col gap-[30px] items-start justify-center p-6 sm:px-5 w-full">
                <div className="flex flex-row items-center justify-between mt-4 w-[94%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-evenly">
                    <Img
                      className="h-6 w-6"
                      src="images/img_location.svg"
                      alt="location"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700"
                      size="txtGilroySemiBold16Bluegray700"
                    >
                      Location
                    </Text>
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown"
                  />
                </div>
                <div className="flex flex-col gap-[25px] justify-start w-[94%] md:w-full">
                  <div className="flex flex-row items-center justify-between w-full">
                    <div className="flex flex-row gap-2 items-end justify-evenly">
                      <Img
                        className="h-6 w-6"
                        src="images/img_location.svg"
                        alt="location Two"
                      />
                      <Text
                        className="mt-[5px] text-base text-blue_gray-700"
                        size="txtGilroySemiBold16Bluegray700"
                      >
                        Job Type
                      </Text>
                    </div>
                    <Img
                      className="h-5 w-5"
                      src="images/img_arrowdown.svg"
                      alt="arrowdown One"
                    />
                  </div>
                  <div className="flex flex-col gap-[18px] items-start justify-start ml-3 md:ml-[0] w-1/2 md:w-full">
                    <CheckBox
                      className="font-semibold text-left text-sm"
                      inputClassName="border-[0.83px] border-blue_gray-50 border-solid h-5 mr-[5px] w-5"
                      name="Permanent"
                      id="Permanent"
                      label="Permanent"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-left text-sm"
                      inputClassName="border-[0.83px] border-blue_gray-50 border-solid h-5 mr-[5px] w-5"
                      name="Parttime"
                      id="Parttime"
                      label="Part-time"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-left text-sm"
                      inputClassName="border-[0.83px] border-blue_gray-50 border-solid h-5 mr-[5px] w-5"
                      name="Remote"
                      id="Remote"
                      label="Remote"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-left text-sm"
                      inputClassName="border-[0.83px] border-blue_gray-50 border-solid h-5 mr-[5px] w-5"
                      name="Student"
                      id="Student"
                      label="Student"
                    ></CheckBox>
                    <CheckBox
                      className="font-semibold text-left text-sm"
                      inputClassName="border-[0.83px] border-blue_gray-50 border-solid h-5 mr-[5px] w-5"
                      name="Contract"
                      id="Contract"
                      label="Contract"
                    ></CheckBox>
                  </div>
                </div>
                <div className="flex flex-row gap-11 items-center justify-start w-[94%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-evenly w-[73%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_mail.svg"
                      alt="mail"
                    />
                    <Text
                      className="mt-1 text-base text-blue_gray-700"
                      size="txtGilroySemiBold16Bluegray700"
                    >
                      Experience Level
                    </Text>
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown Two"
                  />
                </div>
                <div className="flex flex-row gap-[68px] items-center justify-start w-[94%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-evenly w-[63%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_computer.svg"
                      alt="computer"
                    />
                    <Text
                      className="mt-1 text-base text-blue_gray-700"
                      size="txtGilroySemiBold16Bluegray700"
                    >
                      Salary Range
                    </Text>
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown Three"
                  />
                </div>
                <div className="flex flex-row items-center justify-between mb-[468px] w-[94%] md:w-full">
                  <div className="flex flex-row gap-2 items-start justify-evenly">
                    <Img
                      className="h-6 w-6"
                      src="images/img_file_1.svg"
                      alt="file"
                    />
                    <Text
                      className="mt-[3px] text-base text-blue_gray-700"
                      size="txtGilroySemiBold16Bluegray700"
                    >
                      Position
                    </Text>
                  </div>
                  <Img
                    className="h-5 w-5"
                    src="images/img_arrowdown.svg"
                    alt="arrowdown Four"
                  />
                </div>
              </div>
            </Sidebar>
            <div className="flex flex-1 flex-col gap-10 items-center justify-start md:mt-0 mt-10 w-full">
              <div className="flex flex-col gap-7 items-start justify-start pt-1.5 w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-blue_gray-900 text-xl"
                    size="txtGilroySemiBold20"
                  >
                    Recent{" "}
                  </Text>
                  <a
                    href="javascript:"
                    className="mt-[3px] text-blue-A700 text-lg"
                  >
                    <Text size="txtGilroyMedium18BlueA700">See all</Text>
                  </a>
                </div>
                <div className="flex md:flex-col flex-row gap-4 items-center justify-start w-[63%] md:w-full">
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[108px] rounded-lg"
                    rightIcon={
                      <Img
                        className="h-[18px] ml-[5px] mr-2.5 my-2"
                        src="images/img_close_18X18.svg"
                        alt="close"
                      />
                    }
                    color="blue_50"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-medium text-base text-left">
                      Designer
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[181px] rounded-lg"
                    rightIcon={
                      <Img
                        className="h-[18px] ml-[5px] mr-2.5 my-2"
                        src="images/img_close_18X18.svg"
                        alt="close"
                      />
                    }
                    color="blue_50"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-medium text-base text-left">
                      Android Developer
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[155px] rounded-lg"
                    rightIcon={
                      <Img
                        className="h-[18px] ml-[5px] mr-2.5 my-2"
                        src="images/img_close_18X18.svg"
                        alt="close"
                      />
                    }
                    color="blue_50"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-medium text-base text-left">
                      Quality Analyst
                    </div>
                  </Button>
                  <Button
                    className="cursor-pointer flex items-center justify-center min-w-[148px] rounded-lg"
                    rightIcon={
                      <Img
                        className="h-[18px] ml-[5px] mr-2.5 my-2"
                        src="images/img_close_18X18.svg"
                        alt="close"
                      />
                    }
                    color="blue_50"
                    size="sm"
                    variant="fill"
                  >
                    <div className="font-medium text-base text-left">
                      iOS Developer
                    </div>
                  </Button>
                </div>
              </div>
              <div className="flex flex-col gap-[29px] items-start justify-start pt-1.5 w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-blue_gray-900 text-xl"
                    size="txtGilroySemiBold20"
                  >
                    Recommended Jobs For You
                  </Text>
                  <a href="javascript:" className="text-blue-A700 text-lg">
                    <Text size="txtGilroyMedium18BlueA700">See all</Text>
                  </a>
                </div>
                <List
                  className="sm:flex-col flex-row gap-6 grid sm:grid-cols-1 md:grid-cols-3 grid-cols-6 w-[94%]"
                  orientation="horizontal"
                >
                  <div className="bg-blue-50 flex flex-col gap-3.5 items-start justify-start p-2 rounded-lg w-full">
                    <Button
                      className="border border-gray-800_49 border-solid flex h-[53px] items-center justify-center rounded-[50%] w-[53px]"
                      color="white_A700"
                      size="xl"
                      variant="fill"
                    >
                      <Img src="images/img_lock.svg" alt="lock" />
                    </Button>
                    <div className="flex flex-col h-[129px] md:h-auto items-start justify-between w-[124px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900_02 w-auto"
                          size="txtGilroySemiBold16Black90002"
                        >
                          UX Designer
                        </Text>
                        <Text
                          className="mt-[5px] text-black-900_02 text-sm w-full"
                          size="txtGilroyMedium14Black90002"
                        >
                          Amazon
                        </Text>
                        <Text
                          className="leading-[22.00px] mt-1 text-blue_gray-400 text-sm w-full"
                          size="txtGilroyMedium14Bluegray400"
                        >
                          Seattle, US (Remote)
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-between mt-7 w-full">
                          <Text
                            className="text-[10px] text-blue_gray-400 w-[59px]"
                            size="txtGilroyMedium10"
                          >
                            1 day ago on
                          </Text>
                          <Img
                            className="h-3"
                            src="images/img_linkedin.svg"
                            alt="Linkedin"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 flex flex-col gap-3.5 items-start justify-start p-2 rounded-lg w-full">
                    <Button
                      className="border border-gray-800_49 border-solid flex h-[53px] items-center justify-center rounded-[50%] w-[53px]"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      <Img src="images/img_companylogo.png" alt="Companylogo" />
                    </Button>
                    <div className="flex flex-col h-[129px] md:h-auto items-start justify-between w-[124px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900_02 w-auto"
                          size="txtGilroySemiBold16Black90002"
                        >
                          VR Designer
                        </Text>
                        <Text
                          className="mt-[5px] text-black-900_02 text-sm w-full"
                          size="txtGilroyMedium14Black90002"
                        >
                          Meta
                        </Text>
                        <Text
                          className="leading-[22.00px] mt-1 text-blue_gray-400 text-sm w-full"
                          size="txtGilroyMedium14Bluegray400"
                        >
                          London, UK (Remote)
                        </Text>
                        <div className="flex flex-row gap-3 items-start justify-between mt-7 w-full">
                          <Text
                            className="text-[10px] text-blue_gray-400 w-[65px]"
                            size="txtGilroyMedium10"
                          >
                            5 days ago on
                          </Text>
                          <Img
                            className="h-2"
                            src="images/img_signal.svg"
                            alt="signal"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 flex flex-col gap-3.5 items-start justify-start p-2 rounded-lg w-full">
                    <Button
                      className="border border-gray-800_49 border-solid flex h-[53px] items-center justify-center rounded-[50%] w-[53px]"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      <Img src="images/img_fire.svg" alt="fire" />
                    </Button>
                    <div className="flex flex-col h-[129px] md:h-auto items-start justify-between w-[124px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900_02 w-auto"
                          size="txtGilroySemiBold16Black90002"
                        >
                          UI Designer
                        </Text>
                        <Text
                          className="mt-1.5 text-black-900_02 text-sm w-full"
                          size="txtGilroyMedium14Black90002"
                        >
                          Apple
                        </Text>
                        <Text
                          className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                          size="txtGilroyMedium14Bluegray400"
                        >
                          Cupertino, US (Remote)
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-between mt-7 w-full">
                          <Text
                            className="text-[10px] text-blue_gray-400 w-[59px]"
                            size="txtGilroyMedium10"
                          >
                            1 day ago on
                          </Text>
                          <Img
                            className="h-3"
                            src="images/img_linkedin.svg"
                            alt="Linkedin One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 flex flex-col gap-3.5 items-start justify-start p-2 rounded-lg w-full">
                    <Button
                      className="border border-gray-800_49 border-solid flex h-[53px] items-center justify-center rounded-[50%] w-[53px]"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      <Img
                        src="images/img_companylogo.png"
                        alt="Companylogo One"
                      />
                    </Button>
                    <div className="flex flex-col h-[129px] md:h-auto items-start justify-between w-[124px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900_02 w-auto"
                          size="txtGilroySemiBold16Black90002"
                        >
                          VR Designer
                        </Text>
                        <Text
                          className="mt-[5px] text-black-900_02 text-sm w-full"
                          size="txtGilroyMedium14Black90002"
                        >
                          Meta
                        </Text>
                        <Text
                          className="leading-[22.00px] mt-1 text-blue_gray-400 text-sm w-full"
                          size="txtGilroyMedium14Bluegray400"
                        >
                          London, UK (Remote)
                        </Text>
                        <div className="flex flex-row gap-3 items-start justify-between mt-7 w-full">
                          <Text
                            className="text-[10px] text-blue_gray-400 w-[65px]"
                            size="txtGilroyMedium10"
                          >
                            5 days ago on
                          </Text>
                          <Img
                            className="h-2"
                            src="images/img_signal.svg"
                            alt="signal One"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 flex flex-col gap-3.5 items-start justify-start p-2 rounded-lg w-full">
                    <Button
                      className="border border-gray-800_49 border-solid flex h-[53px] items-center justify-center rounded-[50%] w-[53px]"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      <Img src="images/img_lock.svg" alt="lock One" />
                    </Button>
                    <div className="flex flex-col h-[129px] md:h-auto items-start justify-between w-[124px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900_02 w-auto"
                          size="txtGilroySemiBold16Black90002"
                        >
                          UX Designer
                        </Text>
                        <Text
                          className="mt-[5px] text-black-900_02 text-sm w-full"
                          size="txtGilroyMedium14Black90002"
                        >
                          Amazon
                        </Text>
                        <Text
                          className="leading-[22.00px] mt-1 text-blue_gray-400 text-sm w-full"
                          size="txtGilroyMedium14Bluegray400"
                        >
                          Seattle, US (Remote)
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-between mt-7 w-full">
                          <Text
                            className="text-[10px] text-blue_gray-400 w-[59px]"
                            size="txtGilroyMedium10"
                          >
                            1 day ago on
                          </Text>
                          <Img
                            className="h-3"
                            src="images/img_linkedin.svg"
                            alt="Linkedin Two"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="bg-blue-50 flex flex-col gap-3.5 items-start justify-start p-2 rounded-lg w-full">
                    <Button
                      className="border border-gray-800_49 border-solid flex h-[53px] items-center justify-center rounded-[50%] w-[53px]"
                      color="white_A700"
                      size="lg"
                      variant="fill"
                    >
                      <Img src="images/img_fire.svg" alt="fire One" />
                    </Button>
                    <div className="flex flex-col h-[129px] md:h-auto items-start justify-between w-[124px]">
                      <div className="flex flex-col items-start justify-start w-full">
                        <Text
                          className="text-base text-black-900_02 w-auto"
                          size="txtGilroySemiBold16Black90002"
                        >
                          UI Designer
                        </Text>
                        <Text
                          className="mt-1.5 text-black-900_02 text-sm w-full"
                          size="txtGilroyMedium14Black90002"
                        >
                          Apple
                        </Text>
                        <Text
                          className="leading-[22.00px] text-blue_gray-400 text-sm w-full"
                          size="txtGilroyMedium14Bluegray400"
                        >
                          Cupertino, US (Remote)
                        </Text>
                        <div className="flex flex-row gap-4 items-start justify-between mt-7 w-full">
                          <Text
                            className="text-[10px] text-blue_gray-400 w-[59px]"
                            size="txtGilroyMedium10"
                          >
                            1 day ago on
                          </Text>
                          <Img
                            className="h-3"
                            src="images/img_linkedin.svg"
                            alt="Linkedin Three"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </List>
              </div>
              <div className="flex flex-col gap-6 items-start justify-end pt-[7px] w-full">
                <div className="flex flex-row md:gap-10 items-start justify-between w-full">
                  <Text
                    className="text-blue_gray-900 text-xl"
                    size="txtGilroySemiBold20"
                  >
                    Trending Jobs
                  </Text>
                  <a href="javascript:" className="text-blue-A700 text-lg">
                    <Text size="txtGilroyMedium18BlueA700">See all</Text>
                  </a>
                </div>
                <div className="flex flex-col gap-4 items-center justify-start md:ml-[0] ml-[5px] w-[94%] md:w-full">
                  <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between w-[98%] md:w-full">
                    <div className="flex flex-col items-center justify-start w-[27%] sm:w-full">
                      <div className="flex flex-row gap-[15px] items-start justify-between w-full">
                        <Button
                          className="border border-gray-800_49 border-solid flex h-[53px] items-center justify-center mb-10 rounded-[50%] w-[53px]"
                          color="white_A700"
                          size="lg"
                          variant="fill"
                        >
                          <Img src="images/img_google.svg" alt="google" />
                        </Button>
                        <div className="flex flex-col items-start justify-start mt-1.5">
                          <Text
                            className="text-base text-black-900"
                            size="txtGilroySemiBold16Black900"
                          >
                            Product Designer
                          </Text>
                          <Text
                            className="mt-1 text-black-900 text-sm"
                            size="txtGilroyMedium14Black900"
                          >
                            Coinbase
                          </Text>
                          <Text
                            className="mt-2 text-blue_gray-400 text-sm"
                            size="txtGilroyMedium14Bluegray400"
                          >
                            San Francisco, US (Remote)
                          </Text>
                          <div className="flex flex-row gap-[9px] items-center justify-start mt-2 w-[63%] md:w-full">
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtGilroyMedium10"
                            >
                              9h ago on
                            </Text>
                            <Img
                              className="h-[13px] w-1/2"
                              src="images/img_linkedin.svg"
                              alt="Linkedin Four"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-row gap-6 items-center justify-between rounded-md w-1/4 sm:w-full">
                      <Button
                        className="cursor-pointer font-medium min-w-[126px] rounded-md text-base text-center"
                        shape="round"
                        color="blue_A700"
                        size="3xl"
                        variant="outline"
                      >
                        View Details
                      </Button>
                      <Button
                        className="cursor-pointer font-medium min-w-[79px] rounded-md text-base text-center"
                        shape="round"
                        color="blue_A700"
                        size="3xl"
                        variant="fill"
                      >
                        Apply
                      </Button>
                    </div>
                  </div>
                  <List
                    className="flex flex-col gap-[16.5px] items-center pt-[17px] px-[17px] w-full"
                    orientation="vertical"
                  >
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-row gap-[15px] items-start justify-start md:pr-10 sm:pr-5 pr-[88px] w-[34%] sm:w-full">
                        <Button
                          className="border border-gray-800_49 border-solid flex h-[53px] items-center justify-center mb-10 rounded-[50%] w-[53px]"
                          color="white_A700"
                          size="3xl"
                          variant="fill"
                        >
                          <Img
                            src="images/img_close_53X53.svg"
                            alt="close Two"
                          />
                        </Button>
                        <div className="flex flex-col items-start justify-start mt-[5px] w-[70%]">
                          <Text
                            className="text-base text-black-900"
                            size="txtGilroySemiBold16Black900"
                          >
                            Lead UX/UI Designer
                          </Text>
                          <Text
                            className="mt-[5px] text-black-900 text-sm"
                            size="txtGilroyMedium14Black900"
                          >
                            Figma
                          </Text>
                          <Text
                            className="mt-1 text-blue_gray-400 text-sm"
                            size="txtGilroyMedium14Bluegray400"
                          >
                            London, UK (Remote)
                          </Text>
                          <div className="flex flex-row gap-[9px] items-start justify-start mt-2 w-[73%] md:w-full">
                            <Text
                              className="text-[10px] text-blue_gray-400"
                              size="txtGilroyMedium10"
                            >
                              5h ago on
                            </Text>
                            <Img
                              className="h-2.5 mt-[3px] w-[51%]"
                              src="images/img_signal_10X56.svg"
                              alt="signal Two"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-row gap-6 items-center justify-between rounded-md w-1/4 sm:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[126px] rounded-md text-base text-center"
                          shape="round"
                          color="blue_A700"
                          size="3xl"
                          variant="outline"
                        >
                          View Details
                        </Button>
                        <Button
                          className="cursor-pointer font-medium min-w-[79px] rounded-md text-base text-center"
                          shape="round"
                          color="blue_A700"
                          size="3xl"
                          variant="fill"
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                    <Line className="self-center h-px bg-blue_gray-100 w-full" />
                    <div className="flex flex-1 sm:flex-col flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex sm:flex-1 flex-row gap-[15px] items-start justify-between w-[34%] sm:w-full">
                        <Button
                          className="border border-gray-800_49 border-solid flex h-[53px] items-center justify-center mb-[43px] rounded-[50%] w-[53px]"
                          color="white_A700"
                          size="lg"
                          variant="fill"
                        >
                          <Img src="images/img_lock.svg" alt="lock Two" />
                        </Button>
                        <div className="flex flex-col items-start justify-end pr-1.5 pt-1.5">
                          <Text
                            className="text-base text-black-900"
                            size="txtGilroySemiBold16Black900"
                          >
                            UX Designer
                          </Text>
                          <Text
                            className="mt-1 text-black-900 text-sm"
                            size="txtGilroyMedium14Black900"
                          >
                            Amazon
                          </Text>
                          <Text
                            className="mt-[3px] text-[15px] text-gray-800_99 tracking-[-0.24px]"
                            size="txtSFProTextRegular15"
                          >
                            Seattle, US (Remote)
                          </Text>
                          <div className="flex flex-row font-sfprotext items-start justify-start mt-[15px] w-[46%] md:w-full">
                            <Text
                              className="text-[11px] text-black-900_01 tracking-[0.07px]"
                              size="txtSFProTextRegular11"
                            >
                              9h ago on
                            </Text>
                            <Img
                              className="h-[13px] ml-0.5 w-1/2"
                              src="images/img_linkedin.svg"
                              alt="Linkedin Five"
                            />
                          </div>
                        </div>
                      </div>
                      <div className="flex sm:flex-1 flex-row gap-6 items-center justify-between rounded-md w-1/4 sm:w-full">
                        <Button
                          className="cursor-pointer font-medium min-w-[126px] rounded-md text-base text-center"
                          shape="round"
                          color="blue_A700"
                          size="3xl"
                          variant="outline"
                        >
                          View Details
                        </Button>
                        <Button
                          className="cursor-pointer font-medium min-w-[79px] rounded-md text-base text-center"
                          shape="round"
                          color="blue_A700"
                          size="3xl"
                          variant="fill"
                        >
                          Apply
                        </Button>
                      </div>
                    </div>
                  </List>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AlljobsPage;
