import React from "react";

import { Button, Img, Input, Line, List, Radio, Text } from "components";

import { CloseSVG } from "../../assets/images";

const FeedPage = () => {
  const [group9874value, setGroup9874value] = React.useState("");

  return (
    <>
      <div className="bg-gray-50 flex flex-col font-gilroy items-center justify-end mx-auto w-full">
        <div className="flex flex-col gap-[29px] items-center justify-end w-full">
          <div className="flex h-[100px] sm:h-[102px] md:h-[298px] justify-end md:px-5 relative w-full">
            <div className="flex sm:flex-col flex-row sm:gap-5 h-full items-center justify-center mb-[30px] ml-auto mr-[424px] mt-auto w-[35%]">
              <Line className="bg-white-A700 h-[3px] w-1/4" />
              <Line className="bg-white-A700 h-[3px] w-1/4" />
              <Line className="bg-white-A700 h-[3px] w-1/4" />
              <Line className="bg-white-A700 h-[3px] w-1/4" />
            </div>
            <div className="absolute bg-white-A700 flex flex-col h-full inset-[0] items-center justify-center m-auto p-[25px] sm:px-5 shadow-bs w-full">
              <div className="flex flex-col items-center justify-start w-[92%] md:w-full">
                <div className="flex md:flex-col flex-row md:gap-5 items-center justify-start w-full">
                  <Img
                    className="h-12 w-12"
                    src="images/img_facebook_48X48.svg"
                    alt="facebook"
                  />
                  <Input
                    name="Group9874"
                    placeholder="Search Facebook"
                    value={group9874value}
                    onChange={(e) => setGroup9874value(e)}
                    className="!placeholder:text-blue_gray-400 !text-blue_gray-400 font-semibold p-0 text-base text-left w-full"
                    wrapClassName="flex md:flex-1 ml-3 md:ml-[0] rounded-[24px] w-[21%] md:w-full"
                    prefix={
                      <Img
                        className="mt-[13px] mb-3.5 cursor-pointer h-[21px] ml-[18px] mr-[29px]"
                        src="images/img_search_bluegray_400_21X21.svg"
                        alt="search"
                      />
                    }
                    suffix={
                      <CloseSVG
                        fillColor="#74839d"
                        className="cursor-pointer h-[21px] my-auto"
                        onClick={() => setGroup9874value("")}
                        style={{
                          visibility:
                            group9874value?.length <= 0 ? "hidden" : "visible",
                        }}
                        height={21}
                        width={21}
                        viewBox="0 0 21 21"
                      />
                    }
                    color="blue_gray_50"
                    size="md"
                    variant="fill"
                  ></Input>
                  <div className="flex md:flex-1 sm:flex-col flex-row font-poppins sm:gap-10 gap-[60px] items-center justify-center md:ml-[0] ml-[90px] w-[37%] md:w-full">
                    <Img
                      className="h-[42px] w-[16%]"
                      src="images/img_home.svg"
                      alt="home"
                    />
                    <div className="md:h-[29px] h-[34px] relative w-[9%] sm:w-full">
                      <Img
                        className="absolute bottom-[0] h-[29px] left-[0] w-[85%]"
                        src="images/img_play_29X33.svg"
                        alt="play"
                      />
                      <Text
                        className="absolute bg-red-700 h-[15px] justify-center pb-0.5 px-[3px] right-[0] rounded-[7.78px] text-white-A700 text-xs top-[0] w-[22px]"
                        size="txtPoppinsMedium12"
                      >
                        3+
                      </Text>
                    </div>
                    <Img
                      className="h-[29px] w-[7%]"
                      src="images/img_home_29X32.svg"
                      alt="home One"
                    />
                    <Button
                      className="flex h-8 items-center justify-center w-8"
                      shape="circle"
                      color="blue_gray_400"
                      size="xs"
                      variant="outline"
                    >
                      <Img src="images/img_user_32X32.svg" alt="user" />
                    </Button>
                    <div className="md:h-[31px] h-[37px] relative w-[10%] sm:w-full">
                      <Img
                        className="absolute bottom-[0] h-[31px] left-[0] w-8"
                        src="images/img_computer.svg"
                        alt="computer"
                      />
                      <Text
                        className="absolute bg-red-700 h-[15px] justify-center pb-0.5 px-[3px] right-[0] rounded-[7.78px] text-white-A700 text-xs top-[0] w-[22px]"
                        size="txtPoppinsMedium12"
                      >
                        9+
                      </Text>
                    </div>
                  </div>
                  <div className="flex md:flex-1 flex-row font-poppins items-center justify-between md:ml-[0] ml-[167px] w-[19%] md:w-full">
                    <Button
                      className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                      shape="circle"
                      color="blue_gray_50"
                      size="xl"
                      variant="fill"
                    >
                      <Img
                        className="h-[22px]"
                        src="images/img_grid.svg"
                        alt="grid"
                      />
                    </Button>
                    <Button
                      className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                      shape="circle"
                      color="blue_gray_50"
                      size="xl"
                      variant="fill"
                    >
                      <Img src="images/img_arrowup_50X50.svg" alt="arrowup" />
                    </Button>
                    <div className="h-[50px] relative w-1/4">
                      <div className="h-[50px] m-auto w-full">
                        <div className="absolute bg-blue_gray-50 h-[50px] inset-y-[0] left-[0] my-auto rounded-[50%] w-[50px]"></div>
                        <div className="absolute bg-red-700 flex flex-col items-end justify-start pb-0.5 px-0.5 right-[0] rounded-[7.78px] top-[10%]">
                          <Text
                            className="text-white-A700 text-xs"
                            size="txtPoppinsMedium12"
                          >
                            9+
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="absolute h-[27px] inset-y-[0] left-[20%] my-auto w-[43%]"
                        src="images/img_notification_27X25.svg"
                        alt="notification"
                      />
                    </div>
                    <Button
                      className="flex h-[50px] items-center justify-center rounded-[50%] w-[50px]"
                      shape="circle"
                      color="blue_gray_50"
                      size="3xl"
                      variant="fill"
                    >
                      <Img src="images/img_polygon2.svg" alt="PolygonTwo" />
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex md:flex-col flex-row font-poppins md:gap-5 items-start justify-start max-w-[1268px] mx-auto md:px-5 w-full">
            <div className="flex md:flex-1 flex-col items-start justify-start w-1/5 md:w-full">
              <div className="flex flex-row font-gilroy gap-3 items-center justify-start w-[69%] md:w-full">
                <Img
                  className="h-12 md:h-auto rounded-[50%] w-12"
                  src="images/img_ellipse15.png"
                  alt="EllipseFifteen"
                />
                <Text
                  className="text-base text-black-900"
                  size="txtGilroyMedium16Black900"
                >
                  Tyler Tornberg
                </Text>
              </div>
              <div className="flex flex-col font-gilroy gap-[30px] items-start justify-start mt-[30px] w-[67%] md:w-full">
                <div className="flex flex-row gap-[19px] items-start justify-start md:ml-[0] ml-[7px] pt-1 w-[81%] md:w-full">
                  <Img
                    className="h-6 mt-[3px] w-[27%]"
                    src="images/img_user_24X34.svg"
                    alt="user One"
                  />
                  <div className="flex flex-col gap-2.5 items-start justify-start w-3/5">
                    <Text
                      className="text-base text-black-900"
                      size="txtGilroyMedium16Black900"
                    >
                      Friends
                    </Text>
                    <Radio
                      value="2request"
                      className="font-medium text-blue-A700 text-left text-sm"
                      inputClassName="bg-blue-A700 border-2 border-solid border-white-A700 h-[10.86px] mr-[5px] w-[10.86px]"
                      checked={false}
                      name="request"
                      label="2 request"
                      id="2request"
                    ></Radio>
                  </div>
                </div>
                <div className="flex flex-row gap-[15px] items-center justify-start md:ml-[0] ml-[3px] w-[69%] md:w-full">
                  <Button
                    className="flex h-[42px] items-center justify-center rounded-[50%] w-[42px]"
                    shape="circle"
                    size="xs"
                    variant="gradient"
                    color="green_400_cc_blue_700_cc"
                  >
                    <Img src="images/img_user_42X42.svg" alt="user Two" />
                  </Button>
                  <Text
                    className="text-base text-black-900"
                    size="txtGilroyMedium16Black900"
                  >
                    Groups
                  </Text>
                </div>
                <div className="flex flex-row gap-5 items-start justify-between md:ml-[0] ml-[9px] w-[89%] md:w-full">
                  <Img
                    className="h-[27px] md:h-auto object-cover"
                    src="images/img_vector.png"
                    alt="Vector"
                  />
                  <div className="flex flex-col gap-2 items-start justify-start mt-[5px] pb-[3px]">
                    <Text
                      className="text-base text-black-900"
                      size="txtGilroyMedium16Black900"
                    >
                      Marketplace
                    </Text>
                    <Radio
                      value="1new"
                      className="font-medium text-blue-A700 text-left text-sm"
                      inputClassName="bg-blue-A700 border-2 border-solid border-white-A700 h-[10.86px] mr-[5px] w-[10.86px]"
                      checked={false}
                      name="new"
                      label="1 new"
                      id="1new"
                    ></Radio>
                  </div>
                </div>
                <div className="flex flex-row gap-[18px] items-start justify-between md:ml-[0] ml-[9px] w-[95%] md:w-full">
                  <Img
                    className="h-[29px] md:h-auto object-cover"
                    src="images/img_group3.png"
                    alt="GroupThree"
                  />
                  <div className="flex flex-col gap-[9px] items-start justify-start mt-1 pb-[3px]">
                    <Text
                      className="text-base text-black-900"
                      size="txtGilroyMedium16Black900"
                    >
                      Watch
                    </Text>
                    <Radio
                      value="9newvideos"
                      className="font-medium text-blue-A700 text-left text-sm"
                      inputClassName="bg-blue-A700 border-2 border-solid border-white-A700 h-[10.86px] mr-[5px] w-[10.86px]"
                      checked={false}
                      name="newvideos"
                      label="9 new videos"
                      id="9newvideos"
                    ></Radio>
                  </div>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start w-[81%] md:w-full">
                  <Button
                    className="flex h-12 items-center justify-center rounded-[50%] w-12"
                    shape="circle"
                    color="indigo_50"
                    size="3xl"
                    variant="fill"
                  >
                    <Img
                      src="images/img_arrowdown_black_900.svg"
                      alt="arrowdown"
                    />
                  </Button>
                  <a href="javascript:" className="text-base text-black-900">
                    <Text size="txtGilroyMedium16Black900">See More</Text>
                  </a>
                </div>
              </div>
              <Line className="bg-blue_gray-400_01 h-px mt-[30px] w-full" />
              <Text
                className="mt-[33px] text-blue_gray-400_01 text-lg"
                size="txtPoppinsMedium18"
              >
                Your Shortcuts
              </Text>
              <div className="flex flex-col font-gilroy gap-[30px] items-start justify-start mt-[34px] w-[83%] md:w-full">
                <div className="flex flex-row gap-3 items-center justify-start md:ml-[0] ml-[3px] w-[99%] md:w-full">
                  <Img
                    className="h-12 md:h-auto rounded-[50%] w-12"
                    src="images/img_ellipse26.png"
                    alt="EllipseTwentySix"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtGilroyMedium16Black900"
                  >
                    Phtography House
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start rounded-[10px] w-[72%] md:w-full">
                  <Img
                    className="h-12 md:h-auto object-cover rounded-[10px] w-12"
                    src="images/img_rectangle55.png"
                    alt="RectangleFiftyFive"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtGilroyMedium16Black900"
                  >
                    Pizza Hood
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start rounded-[10px] w-[69%] md:w-full">
                  <Img
                    className="h-12 md:h-auto object-cover rounded-[10px] w-12"
                    src="images/img_rectangle56.png"
                    alt="RectangleFiftySix"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtGilroyMedium16Black900"
                  >
                    8 Ball Pool
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start rounded-[10px] w-[78%] md:w-full">
                  <Img
                    className="h-12 md:h-auto object-cover rounded-[10px] w-12"
                    src="images/img_rectangle57.png"
                    alt="RectangleFiftySeven"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtGilroyMedium16Black900"
                  >
                    Cloud 9 Pent
                  </Text>
                </div>
                <div className="flex flex-row gap-3 items-center justify-start rounded-[10px] w-[86%] md:w-full">
                  <Img
                    className="h-12 md:h-auto object-cover rounded-[10px] w-12"
                    src="images/img_rectangle58.png"
                    alt="RectangleFiftyEight"
                  />
                  <Text
                    className="text-base text-black-900"
                    size="txtGilroyMedium16Black900"
                  >
                    +46 Restaurant
                  </Text>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start md:ml-[0] ml-[30px] w-[48%] md:w-full">
              <div className="flex sm:flex-col flex-row gap-3.5 items-center justify-between w-full">
                <div className="md:h-[199px] h-[200px] relative shadow-bs1 w-[19%] sm:w-full">
                  <Img
                    className="absolute h-[199px] inset-[0] justify-center m-auto object-cover rounded-[18px] w-full"
                    src="images/img_rectangle22.png"
                    alt="RectangleTwentyTwo"
                  />
                  <div className="absolute bottom-[0] md:h-[51px] h-[66px] inset-x-[0] mx-auto w-full">
                    <div className="absolute bg-white-A700 bottom-[0] h-[51px] inset-x-[0] mx-auto rounded-bl-[18px] rounded-br-[18px] w-full"></div>
                    <Text
                      className="absolute bg-blue-A700 border-[2.67px] border-solid border-white-A700 flex h-[34px] inset-x-[0] items-center justify-center mx-auto rounded-[50%] sm:text-[19.67px] md:text-[21.67px] text-[23.67px] text-center text-white-A700 top-[0] w-max"
                      size="txtPoppinsMedium2367"
                    >
                      +
                    </Text>
                  </div>
                </div>
                <List
                  className="sm:flex-1 sm:flex-col flex-row gap-[13.52px] grid sm:grid-cols-1 grid-cols-4 w-4/5 sm:w-full"
                  orientation="horizontal"
                >
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[199px] items-start justify-start p-[5px] rounded-[19.73px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group10550.png')",
                    }}
                  >
                    <Img
                      className="h-[38px] md:h-auto mb-[150px] rounded-[50%] w-[38px]"
                      src="images/img_ellipse1.png"
                      alt="EllipseOne"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[199px] items-start justify-start p-[5px] rounded-[19.73px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group10554.png')",
                    }}
                  >
                    <Img
                      className="h-[38px] md:h-auto mb-[150px] rounded-[50%] w-[38px]"
                      src="images/img_ellipse1_38X38.png"
                      alt="EllipseOne One"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[199px] items-start justify-start p-[5px] rounded-[19.73px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group10555.png')",
                    }}
                  >
                    <Img
                      className="h-[38px] md:h-auto mb-[150px] rounded-[50%] w-[38px]"
                      src="images/img_ellipse1_1.png"
                      alt="EllipseOne Two"
                    />
                  </div>
                  <div
                    className="bg-cover bg-no-repeat flex flex-col h-[199px] items-start justify-start p-[5px] rounded-[19.73px] w-full"
                    style={{
                      backgroundImage: "url('images/img_group10556.png')",
                    }}
                  >
                    <Img
                      className="h-[38px] md:h-auto mb-[150px] rounded-[50%] w-[38px]"
                      src="images/img_ellipse1_2.png"
                      alt="EllipseOne Three"
                    />
                  </div>
                </List>
              </div>
              <div className="flex flex-col font-gilroy relative w-full">
                <div className="bg-white-A700 flex flex-col items-center justify-start mx-auto p-[30px] sm:px-5 shadow-bs w-full">
                  <div className="flex flex-row sm:gap-10 items-start justify-between w-full">
                    <div className="flex flex-row gap-6 items-center justify-between w-[41%]">
                      <Img
                        className="h-[72px] md:h-auto rounded-[50%] w-[72px]"
                        src="images/img_profileimglarg_5.png"
                        alt="ProfileImgLarg"
                      />
                      <div className="flex flex-col items-start justify-start">
                        <Text
                          className="text-blue_gray-900 text-xl"
                          size="txtGilroySemiBold20"
                        >
                          Rose J. Henry
                        </Text>
                        <Text
                          className="mt-0.5 text-base text-blue_gray-400"
                          size="txtGilroyRegular16Bluegray400"
                        >
                          7 May at 19:18
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-6 mt-3 w-6"
                      src="images/img_user.svg"
                      alt="user Three"
                    />
                  </div>
                  <Img
                    className="h-[410px] md:h-auto mt-6 object-cover w-full"
                    src="images/img_group106521.png"
                    alt="Group106521"
                  />
                  <div className="flex flex-col gap-[9px] items-center justify-start mt-4 pt-1 w-full">
                    <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14Bluegray400"
                      >
                        109 Likes
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14Bluegray400"
                      >
                        03 Comment
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14Bluegray400"
                      >
                        2 Share
                      </Text>
                    </div>
                    <div className="border-blue_gray-100 border-solid border-y flex flex-col items-center justify-start p-2 w-full">
                      <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                        <div className="flex flex-row gap-2 items-center justify-between w-[12%]">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            Like
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center w-[19%]">
                          <Img
                            className="h-6 w-6"
                            src="images/img_volume.svg"
                            alt="volume"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            Comment
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-between w-[14%]">
                          <Img
                            className="h-6 w-6"
                            src="images/img_reply.svg"
                            alt="reply"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            Share
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col items-center justify-start mb-[73px] mt-6 w-full">
                    <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                      <div className="flex flex-row gap-4 items-end justify-start md:pr-10 sm:pr-5 pr-[162px]">
                        <Img
                          className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                          src="images/img_profileimglarg.png"
                          alt="ProfileImgLarg One"
                        />
                        <div className="flex flex-col gap-[5px] items-start justify-start mt-1.5">
                          <Text
                            className="text-base text-blue_gray-900"
                            size="txtGilroySemiBold16Bluegray900"
                          >
                            Rose J. Henry
                          </Text>
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyRegular12"
                          >
                            7 May at 19:18
                          </Text>
                        </div>
                      </div>
                      <Img
                        className="h-6 w-6"
                        src="images/img_arrowdown_bluegray_400.svg"
                        alt="arrowdown One"
                      />
                    </div>
                    <Text
                      className="mt-[18px] text-blue_gray-900 text-lg"
                      size="txtGilroyMedium18"
                    >
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Dictum ipsum venenatis sagittis, a sapien, magna lorem
                      vitae. Pretium, risus nisl mi molestie adipiscing.
                    </Text>
                    <div className="flex flex-col gap-1.5 items-center justify-start mt-[82px] w-full">
                      <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyMedium14Bluegray400"
                        >
                          109 Likes
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-sm"
                          size="txtGilroyMedium14Bluegray400"
                        >
                          03 Comment
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-center text-sm"
                          size="txtGilroyMedium14Bluegray400"
                        >
                          2 Share
                        </Text>
                      </div>
                      <div className="border-blue_gray-100 border-solid border-y flex flex-col items-center justify-start p-2 w-full">
                        <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                          <div className="flex flex-row gap-2 items-center justify-between w-[12%]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_thumbsup.svg"
                              alt="thumbsup One"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              Like
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-center w-[19%]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_volume.svg"
                              alt="volume One"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              Comment
                            </Text>
                          </div>
                          <div className="flex flex-row gap-2 items-center justify-between w-[14%]">
                            <Img
                              className="h-6 w-6"
                              src="images/img_reply.svg"
                              alt="reply One"
                            />
                            <Text
                              className="text-blue_gray-400 text-xs"
                              size="txtGilroyMedium12"
                            >
                              Share
                            </Text>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-center justify-start mt-[-79px] mx-auto w-[91%] z-[1]">
                  <div className="flex flex-row sm:gap-10 items-center justify-between w-full">
                    <div className="flex flex-row gap-4 items-center justify-between w-3/5">
                      <Img
                        className="h-[46px] md:h-auto rounded-[50%] w-[46px]"
                        src="images/img_profileimglarg.png"
                        alt="ProfileImgLarg Two"
                      />
                      <div className="flex flex-col items-center justify-start">
                        <Text
                          className="text-base text-blue_gray-900"
                          size="txtGilroySemiBold16Bluegray900"
                        >
                          Rose J. Henry
                        </Text>
                        <Text
                          className="text-blue_gray-400 text-xs"
                          size="txtGilroyRegular12"
                        >
                          7 May at 19:18
                        </Text>
                      </div>
                    </div>
                    <Img
                      className="h-6 w-6"
                      src="images/img_arrowdown_bluegray_400.svg"
                      alt="arrowdown Two"
                    />
                  </div>
                  <Text
                    className="leading-[29.00px] text-blue_gray-900 text-lg w-[88%] sm:w-full"
                    size="txtGilroyMedium18"
                  >
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Dictum ipsum venenatis sagittis, a sapien, magna lorem
                    vitae. Pretium, risus nisl mi molestie adipiscing.
                  </Text>
                  <div className="flex flex-col gap-1.5 items-center justify-start w-full">
                    <div className="flex flex-row items-center justify-between w-[85%] md:w-full">
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14Bluegray400"
                      >
                        109 Likes
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-sm"
                        size="txtGilroyMedium14Bluegray400"
                      >
                        03 Comment
                      </Text>
                      <Text
                        className="text-blue_gray-400 text-center text-sm"
                        size="txtGilroyMedium14Bluegray400"
                      >
                        2 Share
                      </Text>
                    </div>
                    <div className="border-blue_gray-100 border-solid border-y flex flex-col items-center justify-start p-2 w-full">
                      <div className="flex flex-row items-center justify-between w-[89%] md:w-full">
                        <div className="flex flex-row gap-2 items-center justify-between w-[12%]">
                          <Img
                            className="h-6 w-6"
                            src="images/img_thumbsup.svg"
                            alt="thumbsup Two"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            Like
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-center w-[19%]">
                          <Img
                            className="h-6 w-6"
                            src="images/img_volume.svg"
                            alt="volume Two"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            Comment
                          </Text>
                        </div>
                        <div className="flex flex-row gap-2 items-center justify-between w-[14%]">
                          <Img
                            className="h-6 w-6"
                            src="images/img_reply.svg"
                            alt="reply Two"
                          />
                          <Text
                            className="text-blue_gray-400 text-xs"
                            size="txtGilroyMedium12"
                          >
                            Share
                          </Text>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex md:flex-1 flex-col gap-6 items-center justify-start ml-7 md:ml-[0] w-[29%] md:w-full">
              <div className="bg-blue_gray-50 flex flex-col items-end justify-start p-3 rounded-[10px] shadow-bs w-full">
                <div className="flex flex-col gap-2.5 items-start justify-start mb-[11px] w-[96%] md:w-full">
                  <div className="flex flex-row items-end justify-between w-full">
                    <div className="flex flex-row gap-[11px] items-start justify-start mb-0.5 mt-1.5">
                      <Img
                        className="h-4 md:h-auto object-cover w-[17%]"
                        src="images/img_group5.png"
                        alt="GroupFive"
                      />
                      <Text
                        className="text-base text-black-900_01"
                        size="txtPoppinsMedium16"
                      >
                        Birthdays
                      </Text>
                    </div>
                    <Img
                      className="h-7 w-7"
                      src="images/img_close_28X28.svg"
                      alt="close"
                    />
                  </div>
                  <Text
                    className="text-black-900_01 text-sm w-[94%] sm:w-full"
                    size="txtPoppinsRegular14"
                  >
                    <span className="text-colors2 font-poppins text-left font-normal">
                      Alen Max{" "}
                    </span>
                    <span className="text-colors3 font-poppins text-left font-normal">
                      and
                    </span>
                    <span className="text-colors2 font-poppins text-left font-normal">
                      {" "}
                      6 other{" "}
                    </span>
                    <span className="text-colors3 font-poppins text-left font-normal">
                      have Birthdays Today.
                    </span>
                  </Text>
                </div>
              </div>
              <div className="flex flex-col font-gilroy gap-[26px] items-start justify-start pt-[3px] w-full">
                <div className="flex flex-row items-center justify-between w-full">
                  <Text
                    className="text-black-900_01 text-lg"
                    size="txtGilroySemiBold18Black90001"
                  >
                    Contacts
                  </Text>
                  <div className="flex flex-row gap-6 items-center justify-between w-[33%]">
                    <Img
                      className="h-6 w-6"
                      src="images/img_videocamera_24X24.svg"
                      alt="videocamera"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_search_bluegray_400_21X21.svg"
                      alt="search One"
                    />
                    <Img
                      className="h-6 w-6"
                      src="images/img_user.svg"
                      alt="user Four"
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-4 items-start justify-start w-[84%] md:w-full">
                  <div className="flex flex-row gap-4 items-center justify-start w-[58%] md:w-full">
                    <div className="h-12 relative w-12">
                      <Img
                        className="h-12 m-auto rounded-[50%] w-12"
                        src="images/img_profileimglarg.png"
                        alt="ProfileImgLarg Three"
                      />
                      <div className="absolute bg-green-600 bottom-[6%] h-3 outline outline-[2px] outline-gray-50 right-[0] rounded-[50%] w-3"></div>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Rose J. Henry
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[24px] w-[51%] md:w-full">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_profileimglarg_50X50.png"
                      alt="ProfileImgLarg Four"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Kai Caudle
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-[72%] md:w-full">
                    <div className="h-12 relative w-12">
                      <Img
                        className="h-12 m-auto rounded-[50%] w-12"
                        src="images/img_profileimglarg_1.png"
                        alt="ProfileImgLarg Five"
                      />
                      <div className="absolute bg-green-600 bottom-[6%] h-3 outline outline-[2px] outline-gray-50 right-[0] rounded-[50%] w-3"></div>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Carmelo Rousseau
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[24px] w-[48%] md:w-full">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_profileimglarg_2.png"
                      alt="ProfileImgLarg Six"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Ali Comer
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[24px] w-[64%] md:w-full">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_profileimglarg_3.png"
                      alt="ProfileImgLarg Seven"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Jacklyn Kovach
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start w-[61%] md:w-full">
                    <div className="h-12 relative w-12">
                      <Img
                        className="h-12 m-auto rounded-[50%] w-12"
                        src="images/img_profileimglarg_4.png"
                        alt="ProfileImgLarg Eight"
                      />
                      <div className="absolute bg-green-600 bottom-[6%] h-3 outline outline-[2px] outline-gray-50 right-[0] rounded-[50%] w-3"></div>
                    </div>
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Landon Mosby
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[24px] w-1/2 md:w-full">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_profileimglarg_5.png"
                      alt="ProfileImgLarg Nine"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Man Marin
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[24px] w-[56%] md:w-full">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_profileimglarg_6.png"
                      alt="ProfileImgLarg Ten"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Benito Nickel
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[24px] w-[64%] md:w-full">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_profileimglarg_7.png"
                      alt="ProfileImgLarg Eleven"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Angelyn Weiner
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[24px] w-[54%] md:w-full">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_profileimglarg_72X72.png"
                      alt="ProfileImgLarg Twelve"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Anton Ligon
                    </Text>
                  </div>
                  <div className="flex flex-row gap-4 items-center justify-start rounded-[24px] w-[55%] md:w-full">
                    <Img
                      className="h-12 md:h-auto rounded-[50%] w-12"
                      src="images/img_profileimglarg_48X48.png"
                      alt="ProfileImgLarg Thirteen"
                    />
                    <Text
                      className="text-blue_gray-900 text-lg"
                      size="txtGilroySemiBold18Bluegray900"
                    >
                      Danial Sams
                    </Text>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeedPage;
